const container = document.querySelector("nav");
const sidebar = document.querySelector(".side-bar");

container.addEventListener("click", (e) => {
  if (e.target.classList.contains("toggle-button")) {
    sidebar.classList.toggle("active");
  }
});
sidebar.addEventListener("click", (e) => {
  if (e.target.classList.contains("close-btn")) {
    sidebar.classList.remove("active");
  }
});
