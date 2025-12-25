document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("portfolio");
  if (!window.PORTFOLIO || !root) return;

  window.PORTFOLIO.categories.forEach(category => {
    const section = document.createElement("section");
    section.className = "portfolio-section";

    const imagesHtml = category.images
      .map(
        img => `
        <figure class="editorial-image">
          <img src="./images/${category.id}/${img.file}" alt="${img.meta || ""}" />
        </figure>
      `
      )
      .join("");

    section.innerHTML = `
      <h2 data-label="Gallery">${category.title}</h2>
      <div class="editorial-stack">
        ${imagesHtml}
      </div>
    `;

    root.appendChild(section);
  });

  document.getElementById("year").textContent = new Date().getFullYear();

  // reveal on scroll
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          observer.unobserve(e.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document
    .querySelectorAll(".portfolio-section")
    .forEach(sec => observer.observe(sec));
});
