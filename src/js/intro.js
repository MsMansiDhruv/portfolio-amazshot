const intro = document.getElementById("intro-overlay");
const replay = document.getElementById("replayIntro");

let introTimer = null;

function playIntro() {
  // Reset state
  intro.classList.remove("hidden");

  // Force reflow so CSS animations restart
  intro.offsetHeight;

  clearTimeout(introTimer);
  introTimer = setTimeout(() => {
    intro.classList.add("hidden");
  }, 2800);
}

// Initial play
playIntro();

// Replay (dev / QA)
if (replay) {
  replay.addEventListener("click", playIntro);
}
