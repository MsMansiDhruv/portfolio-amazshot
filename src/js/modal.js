window.ModalViewer = (() => {
  const modal = document.getElementById("imageModal");
  const img = document.getElementById("modalImage");
  const meta = document.getElementById("shotMeta");

  let gallery = [];
  let index = 0;
  let onChange = null;

  function open(items, start = 0, cb = null) {
    gallery = items;
    index = start;
    onChange = cb;

    update();
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function close() {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }

  function update() {
    img.classList.add("is-transitioning");

    setTimeout(() => {
      img.src = `./images/${gallery[index].file ? "" : ""}${gallery[index].file || gallery[index]}`;
      meta.textContent = gallery[index].meta || "";
      img.classList.remove("is-transitioning");
      if (onChange) onChange(index);
    }, 180);
  }

  function next() {
    index = (index + 1) % gallery.length;
    update();
  }

  function prev() {
    index = (index - 1 + gallery.length) % gallery.length;
    update();
  }

  modal.addEventListener("click", e => {
    if (!e.target.closest("img")) close();
  });

  document.addEventListener("keydown", e => {
    if (!modal.classList.contains("active")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  });

  return { open };
})();
