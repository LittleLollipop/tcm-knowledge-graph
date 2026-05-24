// 节点群集/展开功能 - 简化版

let clusterMode = false;
let clusterNodesData = [];
let clusterGroup = null;

// 切换群集模式
function toggleClusterMode() {
  clusterMode = !clusterMode;
  const btn = document.getElementById("cluster-btn");
  
  if (clusterMode) {
    btn.style.background = "#103050";
    btn.style.borderColor = "#5cf";
    btn.style.color = "#5cf";
    enterClusterMode();
  } else {
    btn.style.background = "";
    btn.style.borderColor = "";
    btn.style.color = "";
    exitClusterMode();
  }
}

// 进入群集模式
function enterClusterMode() {
  // 创建群集数据
  const clusters = {};
  HERBS.forEach(h => {
    const cat = h.category ? h.category.split("-")[0] : "其他";
    if (!clusters[cat]) clusters[cat] = { count: 0, herbs: [] };
    clusters[cat].count++;
    clusters[cat].herbs.push(h);
  });
  
  clusterNodesData = Object.keys(clusters).map(cat => ({
    id: "cluster-" + cat,
    label: cat,
    count: clusters[cat].count,
    type: "cluster",
    herbs: clusters[cat].herbs,
    x: width / 2 + (Math.random() - 0.5) * 200,
    y: height / 2 + (Math.random() - 0.5) * 200
  }));
  
  // 隐藏原始节点
  node.style("display", "none");
  link.style("display", "none");
  linkLabel.style("display", "none");
  
  // 显示群集节点
  clusterGroup = g.append("g").attr("class", "clusters");
  
  const clusterNodes = clusterGroup.selectAll("g")
    .data(clusterNodesData)
    .join("g")
    .attr("class", "cluster-node")
    .style("cursor", "pointer")
    .call(d3.drag()
      .on("start", (event, d) => {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x; d.fy = d.y;
      })
      .on("drag", (event, d) => {
        d.fx = event.x; d.fy = event.y;
      })
      .on("end", (event, d) => {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null; d.fy = null;
      }))
    .on("click", (event, d) => {
      event.stopPropagation();
      showClusterDetail(d);
    });
    
  clusterNodes.append("circle")
    .attr("r", d => 20 + d.count * 1.5)
    .attr("fill", d => catColor(d.label))
    .attr("opacity", 0.6)
    .attr("stroke", "#5cf")
    .attr("stroke-width", 2);
    
  clusterNodes.append("text")
    .text(d => d.label + " (" + d.count + ")")
    .attr("text-anchor", "middle")
    .attr("dy", 4)
    .attr("fill", "#fff")
    .attr("font-size", 12)
    .attr("font-weight", "bold");
    
  // 更新力导向图
  simulation.nodes(clusterNodesData);
  simulation.force("link").links([]);
  simulation.alpha(0.3).restart();
  
  updateStats();
}

// 退出群集模式
function exitClusterMode() {
  // 移除群集节点
  if (clusterGroup) {
    clusterGroup.remove();
    clusterGroup = null;
  }
  
  // 显示原始节点
  node.style("display", "block");
  link.style("display", "block");
  linkLabel.style("display", l => l.role ? 0.7 : 0);
  
  // 恢复正常力导向图
  simulation.nodes(nodeData);
  simulation.force("link").links(linkData);
  simulation.alpha(0.3).restart();
  
  updateStats();
}

// 显示群集详情
function showClusterDetail(d) {
  const card = document.getElementById("detail-card");
  const title = document.getElementById("card-title");
  const body = document.getElementById("card-body");
  
  title.textContent = d.label + " (" + d.count + " 味药材)";
  
  let html = '<span class="badge" style="background:#1a3a5a;color:#5cf;border:1px solid #2a4a6a;">药材分类群集</span>';
  html += '<div class="label">分类名称</div><div class="value">' + d.label + '</div>';
  html += '<div class="label">药材数量</div><div class="value">' + d.count + ' 味</div>';
  html += '<div class="label">包含药材</div><div class="composition-list">';
  
  d.herbs.slice(0, 10).forEach(h => {
    html += '<div class="comp-item">' + h.name + '</div>';
  });
  if (d.herbs.length > 10) {
    html += '<div style="color:#556;font-size:11px">...还有 ' + (d.herbs.length - 10) + ' 味药材</div>';
  }
  html += '</div>';
  html += '<div style="margin-top:10px;color:#667;font-size:11px;">💡 完整展开功能需要进一步实现</div>';
  
  body.innerHTML = html;
  card.style.display = "block";
}

// 初始化群集模式按钮
document.getElementById("cluster-btn").addEventListener("click", toggleClusterMode);
