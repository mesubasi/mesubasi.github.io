const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActieClass();
    panel.classList.add("active");
  });
});

function removeActieClass() {
  panels.forEach(panel => {
    panel.classList.remove("active")
  });
}
