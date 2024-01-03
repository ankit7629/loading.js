const loadingbar = document.querySelector(".loading-bar");
const percentage = document.querySelector(".parcentage");

window.addEventListener("DOMContentLoaded", () => {
  console.log("loading");
  let progress = 0;
  setInterval(() => {
    if (progress < 100) {
      progress++;
      loadingbar.style.width = `${progress}%`;
      percentage.textContent = `${progress}%`;
    }
  }, 30);
});
