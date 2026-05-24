import json

with open("herbs.json", "r", encoding="utf-8") as f:
    herbs = json.load(f)
with open("formulas.json", "r", encoding="utf-8") as f:
    formulas = json.load(f)
with open("relationships.json", "r", encoding="utf-8") as f:
    relationships = json.load(f)

herbs_js = json.dumps(herbs, ensure_ascii=False)
formulas_js = json.dumps(formulas, ensure_ascii=False)
relationships_js = json.dumps(relationships, ensure_ascii=False)

# 数据统计面板 HTML
stats_panel = """
<div id="stats-panel">
  <h3>📊 数据统计</h3>
  <div class="stat-item">
    <span class="stat-label">药材总数</span>
    <span class="stat-value" id="stat-herbs">0</span>
  </div>
  <div class="stat-item">
    <span class="stat-label">方剂总数</span>
    <span class="stat-value" id="stat-formulas">0</span>
  </div>
  <div class="stat-item">
    <span class="stat-label">关系总数</span>
    <span class="stat-value" id="stat-rels">0</span>
  </div>
  <hr style="border-color:#1e3a5f;margin:10px 0;">
  <div class="stat-item">
    <span class="stat-label">药材分类</span>
    <span class="stat-value" id="stat-herb-cats">0</span>
  </div>
  <div id="herb-cat-detail" style="font-size:11px;color:#99a;margin-top:6px;max-height:150px;overflow-y:auto;"></div>
  <hr style="border-color:#1e3a5f;margin:10px 0;">
  <div class="stat-item">
    <span class="stat-label">方剂分类</span>
    <span class="stat-value" id="stat-formula-cats">0</span>
  </div>
  <div id="formula-cat-detail" style="font-size:11px;color:#99a;margin-top:6px;max-height:150px;overflow-y:auto;"></div>
</div>
"""

html = """<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<title>中医药知识图谱</title>
<style>
* { margin:0; padding:0; box-sizing:border-box; }
body { font-family:"PingFang SC","Microsoft YaHei",sans-serif; background:#0a0e17; color:#e0e0e0; overflow:hidden; }
#toolbar { position:fixed; top:0; left:0; right:0; height:52px; background:rgba(15,20,35,0.95); border-bottom:1px solid #1e3a5f; display:flex; align-items:center; padding:0 20px; gap:12px; z-index:100; backdrop-filter:blur(8px); }
#toolbar h1 { font-size:16px; color:#5cf; margin-right:20px; white-space:nowrap; }
#search-box { flex:0 1 260px; padding:6px 12px; border-radius:6px; border:1px solid #2a4a6a; background:#0d1525; color:#e0e0e0; font-size:14px; outline:none; }
#search-box:focus { border-color:#5cf; }
#search-box::placeholder { color:#556; }
.filter-btn { padding:5px 14px; border-radius:6px; border:1px solid #2a4a6a; background:#0d1525; color:#aac; cursor:pointer; font-size:13px; transition:all 0.2s; }
.filter-btn:hover { border-color:#5cf; color:#5cf; }
.filter-btn.active { background:#103050; border-color:#5cf; color:#5cf; }
#stats { margin-left:auto; font-size:12px; color:#667; white-space:nowrap; }
#detail-card { position:fixed; top:62px; right:16px; width:340px; background:rgba(12,18,32,0.96); border:1px solid #1e3a5f; border-radius:10px; padding:18px; z-index:90; display:none; backdrop-filter:blur(12px); box-shadow:0 8px 32px rgba(0,0,0,0.5); max-height:calc(100vh - 80px); overflow-y:auto; }
#detail-card h2 { font-size:18px; color:#5cf; margin-bottom:10px; }
#detail-card .badge { display:inline-block; padding:2px 8px; border-radius:4px; font-size:11px; margin-bottom:10px; }
#detail-card .badge.herb { background:#1a3a2a; color:#5c5; border:1px solid #2a5a3a; }
#detail-card .badge.formula { background:#1a2a4a; color:#59f; border:1px solid #2a3a5a; }
#detail-card .label { font-size:12px; color:#667; margin-top:8px; }
#detail-card .value { font-size:13px; color:#bcd; margin-top:2px; line-height:1.5; }
#detail-card .source { font-size:12px; color:#6a8; margin-top:10px; padding-top:8px; border-top:1px solid #1a2a3a; }
#detail-card .source a { color:#5af; text-decoration:none; }
#detail-card .source a:hover { text-decoration:underline; color:#8cf; }
#detail-card .close-btn { position:absolute; top:10px; right:12px; cursor:pointer; color:#556; font-size:18px; }
#detail-card .close-btn:hover { color:#a00; }
#detail-card .composition-list { margin-top:6px; }
#detail-card .comp-item { font-size:12px; color:#abc; padding:3px 0; border-bottom:1px solid #0a1520; }
#detail-card .comp-role { display:inline-block; width:28px; font-size:11px; color:#485; }
#hint { position:fixed; bottom:16px; left:50%; transform:translateX(-50%); font-size:12px; color:#445; background:rgba(10,14,23,0.8); padding:6px 16px; border-radius:8px; z-index:80; pointer-events:none; transition:opacity 0.5s; }
#legend { position:fixed; bottom:16px; right:16px; background:rgba(12,18,32,0.95); border:1px solid #1e3a5f; border-radius:8px; padding:10px 14px; font-size:12px; z-index:80; max-height:50vh; overflow-y:auto; }
#legend .item { display:flex; align-items:center; gap:8px; margin:4px 0; color:#99a; }
#legend .dot { width:12px; height:12px; border-radius:50%; flex-shrink:0; }
#legend .dot.formula { border-radius:3px; }
#legend .section-title { color:#5cf; font-size:11px; margin-top:8px; margin-bottom:2px; border-top:1px solid #1e3a5f; padding-top:6px; }
.node-label { pointer-events:none; }

/* 数据统计面板样式 */
#stats-panel { position:fixed; top:62px; left:16px; width:240px; background:rgba(12,18,32,0.96); border:1px solid #1e3a5f; border-radius:10px; padding:14px; z-index:85; backdrop-filter:blur(12px); box-shadow:0 8px 32px rgba(0,0,0,0.4); font-size:12px; max-height:calc(100vh - 80px); overflow-y:auto; }
#stats-panel h3 { font-size:14px; color:#5cf; margin-bottom:10px; }
#stats-panel .stat-item { display:flex; justify-content:space-between; margin:6px 0; color:#99a; }
#stats-panel .stat-label { color:#667; }
#stats-panel .stat-value { color:#5cf; font-weight:bold; }
#stats-panel hr { border-color:#1e3a5f; margin:10px 0; }
#stats-panel .cat-item { margin:3px 0; padding-left:8px; border-left:2px solid #2a4a6a; }
#stats-panel .cat-name { color:#8ab; font-size:11px; }
#stats-panel .cat-count { color:#5cf; font-size:11px; float:right; }
</style>
</head>
<body>
<div id="toolbar">
  <h1>中医药知识图谱</h1>
  <input id="search-box" type="text" placeholder="搜索药材或方剂名称..." />
  <button class="filter-btn active" data-filter="all">全部</button>
  <button class="filter-btn" data-filter="herb">药材</button>
  <button class="filter-btn" data-filter="formula">方剂</button>
  <select id="herb-cat-filter" style="padding:5px 10px;border-radius:6px;border:1px solid #2a4a6a;background:#0d1525;color:#aac;font-size:13px;outline:none;cursor:pointer;margin-left:8px;">
    <option value="all">全部药材分类</option>
  </select>
  <div id="stats"></div>
</div>
<svg id="canvas"></svg>
"""

html += stats_panel

html += """
<div id="detail-card">
  <span class="close-btn" onclick="closeCard()">&times;</span>
  <h2 id="card-title"></h2>
  <div id="card-body"></div>
</div>
<div id="hint">滚轮缩放 · 拖拽平移 · 点击节点查看详情 · 悬停高亮关联</div>
<div id="legend">
  <div class="item"><div class="dot" style="background:#5c5"></div> 药材节点</div>
  <div class="item"><div class="dot formula" style="background:#59f"></div> 方剂节点</div>
  <div class="item"><div class="dot" style="background:rgba(100,150,255,0.4);width:20px;height:2px"></div> 包含关系</div>
  <div class="section-title">药材分类颜色</div>
  <div class="item"><div class="dot" style="background:#4caf50"></div> 解表药</div>
  <div class="item"><div class="dot" style="background:#f44336"></div> 清热药</div>
  <div class="item"><div class="dot" style="background:#ff9800"></div> 泻下药</div>
  <div class="item"><div class="dot" style="background:#8bc34a"></div> 祛风湿药</div>
  <div class="item"><div class="dot" style="background:#ffeb3b"></div> 化湿药</div>
  <div class="item"><div class="dot" style="background:#2196f3"></div> 利水渗湿药</div>
  <div class="item"><div class="dot" style="background:#e91e63"></div> 温里药</div>
  <div class="item"><div class="dot" style="background:#9c27b0"></div> 理气药</div>
  <div class="item"><div class="dot" style="background:#ff5722"></div> 消食药</div>
  <div class="item"><div class="dot" style="background:#c62828"></div> 止血药</div>
  <div class="item"><div class="dot" style="background:#00bcd4"></div> 化痰止咳平喘药</div>
  <div class="item"><div class="dot" style="background:#3f51b5"></div> 安神药</div>
  <div class="item"><div class="dot" style="background:#009688"></div> 平肝息风药</div>
  <div class="item"><div class="dot" style="background:#ffc107"></div> 补虚药</div>
</div>
<script src="https://d3js.org/d3.v7.min.js"></script>
<script>
"""

# 嵌入数据
html += "const HERBS = " + herbs_js + ";\n"
html += "const FORMULAS = " + formulas_js + ";\n"
html += "const RELATIONSHIPS = " + relationships_js + ";\n"

html += """
// ============ 构建图谱数据 ============
const herbIdToObj = {};
HERBS.forEach(h => herbIdToObj[h.id] = h);

const nodeData = [
  ...HERBS.map(h => ({ ...h, type: "herb", label: h.name })),
  ...FORMULAS.map(f => ({ ...f, type: "formula", label: f.name }))
];

const linkData = RELATIONSHIPS.map(r => ({
  source: r.source,
  target: r.target,
  role: r.role,
  dosage: r.dosage
}));

// 颜色映射
const catColor = (d3) => {
  const colors = {
    "解表药": "#4caf50", "清热药": "#f44336", "泻下药": "#ff9800",
    "祛风湿药": "#8bc34a", "化湿药": "#ffeb3b", "利水渗湿药": "#2196f3",
    "温里药": "#e91e63", "理气药": "#9c27b0", "消食药": "#ff5722",
    "止血药": "#c62828", "活血化瘀药": "#e91e63", "化痰止咳平喘药": "#00bcd4",
    "安神药": "#3f51b5", "平肝息风药": "#009688", "补虚药": "#ffc107",
    "其他": "#607d8b"
  };
  return colors[d3] || "#607d8b";
};

// ============ 初始化统计面板 ============
function updateStatsPanel() {
  // 基础统计
  document.getElementById("stat-herbs").textContent = HERBS.length;
  document.getElementById("stat-formulas").textContent = FORMULAS.length;
  document.getElementById("stat-rels").textContent = RELATIONSHIPS.length;
  
  // 药材分类统计
  const herbCats = {};
  HERBS.forEach(h => {
    const cat = h.category ? h.category.split("-")[0] : "其他";
    herbCats[cat] = (herbCats[cat] || 0) + 1;
  });
  const herbCatCount = Object.keys(herbCats).length;
  document.getElementById("stat-herb-cats").textContent = herbCatCount;
  
  let herbCatHtml = "";
  Object.keys(herbCats).sort().forEach(cat => {
    herbCatHtml += '<div class="cat-item"><span class="cat-name">' + cat + '</span><span class="cat-count">' + herbCats[cat] + ' 味</span></div>';
  });
  document.getElementById("herb-cat-detail").innerHTML = herbCatHtml;
  
  // 方剂分类统计
  const formulaCats = {};
  FORMULAS.forEach(f => {
    const cat = f.category ? f.category.split("-")[0] : "其他";
    formulaCats[cat] = (formulaCats[cat] || 0) + 1;
  });
  const formulaCatCount = Object.keys(formulaCats).length;
  document.getElementById("stat-formula-cats").textContent = formulaCatCount;
  
  let formulaCatHtml = "";
  Object.keys(formulaCats).sort().forEach(cat => {
    formulaCatHtml += '<div class="cat-item"><span class="cat-name">' + cat + '</span><span class="cat-count">' + formulaCats[cat] + ' 个</span></div>';
  });
  document.getElementById("formula-cat-detail").innerHTML = formulaCatHtml;
}

// ============ 药材分类筛选 ============
function initHerbCategoryFilter() {
  const select = document.getElementById("herb-cat-filter");
  const cats = new Set();
  HERBS.forEach(h => {
    const cat = h.category ? h.category.split("-")[0] : "其他";
    cats.add(cat);
  });
  Array.from(cats).sort().forEach(cat => {
    const option = document.createElement("option");
    option.value = cat;
    option.textContent = cat;
    select.appendChild(option);
  });
}

document.getElementById("herb-cat-filter").addEventListener("change", function() {
  const selectedCat = this.value;
  if (selectedCat === "all") {
    // 显示所有节点
    node.style("display", "block");
    link.style("display", "block");
    linkLabel.style("display", l => l.role ? 0.7 : 0);
  } else {
    // 筛选药材分类
    node.style("display", d => {
      if (d.type === "herb") {
        const cat = d.category ? d.category.split("-")[0] : "其他";
        return cat === selectedCat ? "block" : "none";
      } else if (d.type === "formula") {
        // 显示包含当前分类药材的方剂
        const hasHerbInCat = (d.composition||[]).some(c => {
          const herb = herbIdToObj[c.herb] || HERBS.find(h => h.name === c.herb);
          if (!herb) return false;
          const cat = herb.category ? herb.category.split("-")[0] : "其他";
          return cat === selectedCat;
        });
        return hasHerbInCat ? "block" : "none";
      }
      return "block";
    });
    
    // 显示相关的关系线
    link.style("display", function(d) {
      const sId = typeof d.source === "object" ? d.source.id : d.source;
      const tId = typeof d.target === "object" ? d.target.id : d.target;
      const sEl = node.filter(n => n.id === sId);
      const tEl = node.filter(n => n.id === tId);
      return (sEl.style("display") !== "none" && tEl.style("display") !== "none") ? "block" : "none";
    });
    
    linkLabel.style("display", function(d) {
      const sId = typeof d.source === "object" ? d.source.id : d.source;
      const tId = typeof d.target === "object" ? d.target.id : d.target;
      const sEl = node.filter(n => n.id === sId);
      const tEl = node.filter(n => n.id === tId);
      return (sEl.style("display") !== "none" && tEl.style("display") !== "none") ? "block" : "none";
    });
  }
  updateStats();
});

const width = window.innerWidth;
const height = window.innerHeight;

const svg = d3.select("#canvas").attr("width", width).attr("height", height);
const g = svg.append("g").attr("class", "main-group");

const zoom = d3.zoom()
  .scaleExtent([0.15, 4])
  .on("zoom", e => g.attr("transform", e.transform));
svg.call(zoom);
svg.on("click", () => closeCard());

const simulation = d3.forceSimulation(nodeData)
  .force("link", d3.forceLink(linkData).id(d => d.id).distance(100))
  .force("charge", d3.forceManyBody().strength(-250))
  .force("center", d3.forceCenter(width / 2, height / 2))
  .force("collision", d3.forceCollide(30))
  .on("tick", ticked);

const link = g.append("g").attr("class", "links")
  .selectAll("line")
  .data(linkData)
  .join("line")
  .attr("stroke", "rgba(100,150,255,0.25)")
  .attr("stroke-width", 1.5)
  .attr("stroke-dasharray", "4,2");

const linkLabel = g.append("g").attr("class", "link-labels")
  .selectAll("text")
  .data(linkData)
  .join("text")
  .attr("font-size", 9)
  .attr("fill", "rgba(100,180,255,0.5)")
  .attr("text-anchor", "middle")
  .text(d => d.role || "");

const node = g.append("g").attr("class", "nodes")
  .selectAll("g")
  .data(nodeData)
  .join("g")
  .attr("class", "node")
  .style("cursor", "pointer")
  .call(d3.drag()
    .on("start", dragStarted)
    .on("drag", dragged)
    .on("end", dragEnded));

node.each(function(d) {
  const el = d3.select(this);
  if (d.type === "herb") {
    el.append("circle")
      .attr("r", 10)
      .attr("fill", () => catColor(d.category ? d.category.split("-")[0] : "其他"))
      .attr("stroke", "#1a2a3a")
      .attr("stroke-width", 2);
  } else {
    el.append("rect")
      .attr("x", -14)
      .attr("y", -10)
      .attr("width", 28)
      .attr("height", 20)
      .attr("rx", 3)
      .attr("fill", "#1a2a4a")
      .attr("stroke", "#2a3a5a")
      .attr("stroke-width", 2);
  }
  el.append("text")
    .text(d => d.label)
    .attr("text-anchor", "middle")
    .attr("dy", d => d.type === "herb" ? 18 : 16)
    .attr("font-size", d => d.type === "formula" ? 10 : 9)
    .attr("fill", d => d.type === "formula" ? "#88bbff" : "#ccc")
    .attr("font-weight", d => d.type === "formula" ? "bold" : "normal")
    .attr("class", "node-label");
});

let highlighted = new Set();

node.on("click", (event, d) => {
  event.stopPropagation();
  showCard(d);
  highlightNeighbors(d);
});

node.on("mouseover", (event, d) => {
  highlightNeighbors(d);
});

node.on("mouseout", function() {
  setTimeout(() => {
    if (!highlighted.size) return;
    const card = document.getElementById("detail-card");
    if (!card.matches(":hover") && !d3.select(".node:hover").size()) {
      unhighlightAll();
    }
  }, 100);
});

function highlightNeighbors(d) {
  const neighbors = new Set();
  neighbors.add(d.id);
  linkData.forEach(l => {
    const sId = typeof l.source === "object" ? l.source.id : l.source;
    const tId = typeof l.target === "object" ? l.target.id : l.target;
    if (sId === d.id) neighbors.add(tId);
    if (tId === d.id) neighbors.add(sId);
  });
  highlighted = neighbors;
  node.select("circle, rect").attr("opacity", n => neighbors.has(n.id) ? 1 : 0.15);
  node.select("text").attr("opacity", n => neighbors.has(n.id) ? 1 : 0.1);
  link.attr("opacity", l => {
    const sId = typeof l.source === "object" ? l.source.id : l.source;
    const tId = typeof l.target === "object" ? l.target.id : l.target;
    return (neighbors.has(sId) && neighbors.has(tId)) ? 1 : 0.06;
  });
  linkLabel.attr("opacity", l => {
    const sId = typeof l.source === "object" ? l.source.id : l.source;
    const tId = typeof l.target === "object" ? l.target.id : l.target;
    return (neighbors.has(sId) && neighbors.has(tId)) ? 1 : 0;
  });
}

function unhighlightAll() {
  if (highlighted.size === 0) return;
  highlighted = new Set();
  node.select("circle, rect").attr("opacity", 1);
  node.select("text").attr("opacity", 1);
  link.attr("opacity", 1);
  linkLabel.attr("opacity", l => l.role ? 0.7 : 0);
}

// ============ 详情卡片 ============
function showCard(d) {
  const card = document.getElementById("detail-card");
  const title = document.getElementById("card-title");
  const body = document.getElementById("card-body");
  title.textContent = d.label || d.name;
  let html = "";
  if (d.type === "herb") {
    html += '<span class="badge herb">药材</span>';
    html += '<div class="label">分类</div><div class="value">' + (d.category || "") + '</div>';
    html += '<div class="label">性味</div><div class="value">' + (d.nature || "") + '</div>';
    html += '<div class="label">归经</div><div class="value">' + (d.meridian || "") + '</div>';
    html += '<div class="label">功效</div><div class="value">' + (d.effect || "") + '</div>';
    html += '<div class="label">主治</div><div class="value">' + (d.indication || "") + '</div>';
    const related = FORMULAS.filter(f => (f.composition||[]).some(c => c.herb === d.name));
    if (related.length) {
      html += '<div class="label">所属方剂（' + related.length + '个）</div><div class="composition-list">';
      related.slice(0, 8).forEach(f => {
        const comp = f.composition.find(c => c.herb === d.name);
        html += '<div class="comp-item"><span class="comp-role">' + (comp ? comp.role : "") + '</span>' + f.name + ' ' + (comp ? comp.dosage : "") + '</div>';
      });
      if (related.length > 8) html += '<div style="color:#556;font-size:11px">...还有' + (related.length-8) + '个</div>';
      html += "</div>";
    }
  } else {
    html += '<span class="badge formula">方剂</span>';
    html += '<div class="label">分类</div><div class="value">' + (d.category || "") + '</div>';
    html += '<div class="label">功效</div><div class="value">' + (d.effect || "") + '</div>';
    html += '<div class="label">主治</div><div class="value">' + (d.indication || "") + '</div>';
    html += '<div class="label">组成（君臣佐使）</div><div class="composition-list">';
    (d.composition||[]).forEach(c => {
      html += '<div class="comp-item"><span class="comp-role">' + c.role + '</span>' + c.herb + ' ' + c.dosage + '</div>';
    });
    html += "</div>";
  }
  if (d.source) {
    if (d.source_url) {
      html += '<div class="source">来源：<a href="' + d.source_url + '" target="_blank" rel="noopener">' + d.source + ' &#128280;</a></div>';
    } else {
      html += '<div class="source">来源：' + d.source + '</div>';
    }
  }
  body.innerHTML = html;
  card.style.display = "block";
}

function closeCard() {
  document.getElementById("detail-card").style.display = "none";
  unhighlightAll();
}

// ============ 搜索 ============
const searchBox = document.getElementById("search-box");
searchBox.addEventListener("input", function() {
  const q = this.value.trim().toLowerCase();
  if (!q) {
    node.style("display", "block");
    link.style("display", "block");
    linkLabel.style("display", "block");
    updateStats();
    return;
  }
  node.style("display", d => d.label.toLowerCase().includes(q) ? "block" : "none");
  link.style("display", function(d) {
    const sId = typeof d.source === "object" ? d.source.id : d.source;
    const tId = typeof d.target === "object" ? d.target.id : d.target;
    const sEl = node.filter(n => n.id === sId);
    const tEl = node.filter(n => n.id === tId);
    return (sEl.style("display") !== "none" && tEl.style("display") !== "none") ? "block" : "none";
  });
});

// ============ 筛选按钮 ============
document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", function() {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    this.classList.add("active");
    const filter = this.dataset.filter;
    if (filter === "all") {
      node.style("display", "block");
      link.style("display", "block");
      linkLabel.style("display", "block");
    } else if (filter === "herb") {
      node.style("display", d => d.type === "herb" ? "block" : "none");
      link.style("display", "none");
      linkLabel.style("display", "none");
    } else if (filter === "formula") {
      node.style("display", d => d.type === "formula" ? "block" : "none");
      link.style("display", "none");
      linkLabel.style("display", "none");
    }
    updateStats();
  });
});

function updateStats() {
  const total = nodeData.length;
  const visible = node.filter(function() { return d3.select(this).style("display") !== "none"; }).size();
  document.getElementById("stats").textContent = "显示: " + visible + " / " + total;
}

// ============ tick ============
function ticked() {
  link
    .attr("x1", d => d.source.x)
    .attr("y1", d => d.source.y)
    .attr("x2", d => d.target.x)
    .attr("y2", d => d.target.y);
  linkLabel
    .attr("x", d => (d.source.x + d.target.x) / 2)
    .attr("y", d => (d.source.y + d.target.y) / 2);
  node.attr("transform", d => "translate(" + d.x + "," + d.y + ")");
}

function dragStarted(event, d) {
  if (!event.active) simulation.alphaTarget(0.3).restart();
  d.fx = d.x; d.fy = d.y;
}
function dragged(event, d) { d.fx = event.x; d.fy = event.y; }
function dragEnded(event, d) {
  if (!event.active) simulation.alphaTarget(0);
  d.fx = null; d.fy = null;
}

// 初始化
updateStats();
updateStatsPanel();
linkLabel.attr("opacity", 0);
setTimeout(() => {
  const hint = document.getElementById("hint");
  hint.style.opacity = 0;
  setTimeout(() => hint.style.display = "none", 500);
}, 5000);
</script>
</body>
</html>
"""

with open("index.html", "w", encoding="utf-8") as f:
    f.write(html)

print("index.html 已生成，大小:", len(html), "字节")
print("✅ 已添加数据统计面板功能")
