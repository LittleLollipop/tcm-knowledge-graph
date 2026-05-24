#!/usr/bin/env python3
"""
向 index.html 添加路径分析功能（简化版）
"""

# 读取 index.html
with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()

# 路径分析面板的 HTML
path_panel = """
<div id="path-panel" style="position:fixed;top:62px;left:50%;transform:translateX(-50%);width:400px;background:rgba(12,18,32,0.96);border:1px solid #1e3a5f;border-radius:10px;padding:18px;z-index:95;backdrop-filter:blur(12px);box-shadow:0 8px 32px rgba(0,0,0,0.5);display:none;">
  <span class="close-btn" onclick="closePathPanel()" style="position:absolute;top:10px;right:12px;cursor:pointer;color:#556;font-size:18px;">×</span>
  <h3 style="font-size:16px;color:#5cf;margin-bottom:12px;">🔍 路径分析</h3>
  <div style="margin:8px 0;">
    <div style="font-size:12px;color:#667;margin-bottom:4px;">起点药材</div>
    <select id="path-start" style="width:100%;padding:6px 10px;border-radius:6px;border:1px solid #2a4a6a;background:#0d1525;color:#e0e0e0;font-size:13px;outline:none;"></select>
  </div>
  <div style="margin:8px 0;">
    <div style="font-size:12px;color:#667;margin-bottom:4px;">终点药材</div>
    <select id="path-end" style="width:100%;padding:6px 10px;border-radius:6px;border:1px solid #2a4a6a;background:#0d1525;color:#e0e0e0;font-size:13px;outline:none;"></select>
  </div>
  <button onclick="analyzePath()" style="width:100%;padding:8px 14px;border-radius:6px;border:none;background:#e94560;color:#fff;font-size:13px;cursor:pointer;margin-top:8px;transition:background 0.2s;">分析路径</button>
  <div id="path-result" style="margin-top:10px;font-size:12px;color:#abc;max-height:200px;overflow-y:auto;"></div>
</div>
"""

# 路径分析的 JavaScript 代码
path_js = """

// ============ 路径分析 ============
let pathPanelVisible = false;
let pathNodes = [];
let pathLinks = [];

// 初始化路径分析面板
function initPathPanel() {
  const startSelect = document.getElementById("path-start");
  const endSelect = document.getElementById("path-end");
  
  // 填充药材下拉框
  HERBS.forEach(h => {
    const option1 = document.createElement("option");
    option1.value = h.id;
    option1.textContent = h.name;
    startSelect.appendChild(option1);
    
    const option2 = document.createElement("option");
    option2.value = h.id;
    option2.textContent = h.name;
    endSelect.appendChild(option2);
  });
}

// 显示/隐藏路径分析面板
function togglePathPanel() {
  pathPanelVisible = !pathPanelVisible;
  document.getElementById("path-panel").style.display = pathPanelVisible ? "block" : "none";
  
  if (pathPanelVisible && !document.getElementById("path-start").options.length) {
    initPathPanel();
  }
  
  if (!pathPanelVisible) {
    clearPathHighlight();
  }
}

// 关闭路径分析面板
function closePathPanel() {
  pathPanelVisible = false;
  document.getElementById("path-panel").style.display = "none";
  clearPathHighlight();
}

// 分析路径
function analyzePath() {
  const startId = document.getElementById("path-start").value;
  const endId = document.getElementById("path-end").value;
  
  if (startId === endId) {
    document.getElementById("path-result").innerHTML = '<span style="color:#f44336;">起点和终点不能相同！</span>';
    return;
  }
  
  // 使用 BFS 查找最短路径
  const path = findShortestPath(startId, endId);
  
  if (!path || path.length === 0) {
    document.getElementById("path-result").innerHTML = '<span style="color:#f44336;">未找到路径！</span>';
    return;
  }
  
  // 显示路径
  displayPath(path);
}

// BFS 查找最短路径
function findShortestPath(startId, endId) {
  const queue = [[startId]];
  const visited = new Set([startId]);
  
  while (queue.length > 0) {
    const path = queue.shift();
    const nodeId = path[path.length - 1];
    
    // 找到所有邻居
    const neighbors = new Set();
    RELATIONSHIPS.forEach(r => {
      const sId = r.source;
      const tId = r.target;
      
      if (sId === nodeId && !visited.has(tId)) {
        neighbors.add(tId);
        visited.add(tId);
        queue.push([...path, tId]);
      }
      if (tId === nodeId && !visited.has(sId)) {
        neighbors.add(sId);
        visited.add(sId);
        queue.push([...path, sId]);
      }
    });
    
    // 检查是否到达终点
    if (nodeId === endId) {
      return path;
    }
  }
  
  return null; // 未找到路径
}

// 显示路径
function displayPath(path) {
  // 清除之前的高亮
  clearPathHighlight();
  
  // 高亮路径上的节点
  pathNodes = path;
  node.select("circle, rect").attr("opacity", d => pathNodes.includes(d.id) ? 1 : 0.15);
  node.select("text").attr("opacity", d => pathNodes.includes(d.id) ? 1 : 0.1);
  
  // 高亮路径上的边
  pathLinks = [];
  for (let i = 0; i < path.length - 1; i++) {
    const sId = path[i];
    const tId = path[i + 1];
    pathLinks.push([sId, tId]);
  }
  
  link.attr("opacity", l => {
    const sId = typeof l.source === "object" ? l.source.id : l.source;
    const tId = typeof l.target === "object" ? l.target.id : l.target;
    
    return pathLinks.some(([ps, pt]) => 
      (ps === sId && pt === tId) || (ps === tId && pt === sId)
    ) ? 1 : 0.06;
  });
  
  // 显示路径信息
  const startName = HERBS.find(h => h.id === path[0])?.name || path[0];
  const endName = HERBS.find(h => h.id === path[path.length - 1])?.name || path[path.length - 1];
  
  let html = '<div style="color:#5cf;margin-bottom:6px;">✅ 找到路径！</div>';
  html += '<div style="font-size:11px;color:#8ab;margin-bottom:4px;">' + startName + ' → ' + endName + '</div>';
  html += '<div style="font-size:11px;color:#667;">路径长度：' + (path.length - 1) + ' 步</div>';
  html += '<div style="margin-top:6px;font-size:11px;color:#abc;">路径：';
  
  path.forEach((nodeId, index) => {
    const herb = HERBS.find(h => h.id === nodeId);
    const formula = FORMULAS.find(f => f.id === nodeId);
    const name = herb ? herb.name : (formula ? formula.name : nodeId);
    
    html += name;
    if (index < path.length - 1) html += ' → ';
  });
  
  html += '</div>';
  document.getElementById("path-result").innerHTML = html;
}

// 清除路径高亮
function clearPathHighlight() {
  pathNodes = [];
  pathLinks = [];
  
  node.select("circle, rect").attr("opacity", 1);
  node.select("text").attr("opacity", 1);
  link.attr("opacity", 1);
}

// 初始化路径分析按钮
document.addEventListener("DOMContentLoaded", function() {
  // 在工具栏添加路径分析按钮
  const toolbar = document.getElementById("toolbar");
  if (toolbar) {
    const pathBtn = document.createElement("button");
    pathBtn.id = "path-btn";
    pathBtn.textContent = "路径分析";
    pathBtn.style.cssText = "padding:5px 14px;border-radius:6px;border:1px solid #2a4a6a;background:#0d1525;color:#aac;cursor:pointer;font-size:13px;transition:all 0.2s;margin-left:8px;";
    pathBtn.onmouseover = function() { this.style.borderColor = "#5cf"; this.style.color = "#5cf"; };
    pathBtn.onmouseout = function() { if (!pathPanelVisible) { this.style.borderColor = ""; this.style.color = ""; } };
    pathBtn.onclick = togglePathPanel;
    toolbar.appendChild(pathBtn);
  }
});
"""

# 在 </body> 标签之前插入路径分析面板
html = html.replace("</body>", path_panel + "</body>")

# 在 </script> 标签之前插入路径分析的 JavaScript 代码
html = html.replace("</script>\n</body>", path_js + "\n</script>\n</body>")

# 写回文件
with open("index.html", "w", encoding="utf-8") as f:
    f.write(html)

print("✅ 已添加路径分析功能（简化版）")
print("   文件大小:", len(html), "字节")
