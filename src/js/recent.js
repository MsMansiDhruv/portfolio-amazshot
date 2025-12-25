document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("recentGrid");

  if (!grid || !window.PORTFOLIO || !Array.isArray(window.PORTFOLIO.recent)) {
    console.error("Recent work data missing");
    return;
  }

  window.PORTFOLIO.recent.forEach(item => {
    const card = document.createElement("div");
    card.className = "recent-card"; // ✅ MUST MATCH CSS

    const img = document.createElement("img");
    img.src = `/images/${item.src}`; // absolute path
    img.alt = item.title || "";

    const meta = document.createElement("div");
    meta.className = "work-meta";
    meta.innerHTML = `
      <h3>${item.title || ""}</h3>
      <span>${item.category || ""}</span>
    `;

    card.appendChild(img);
    card.appendChild(meta);
    grid.appendChild(card);
  });

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
});
