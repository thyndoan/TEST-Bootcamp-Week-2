//For recipes:
const checkboxes = document.querySelectorAll(".ingredients input");
checkboxes.forEach((box) => {
  box.addEventListener("change", () => {
    box.parentElement.style.opacity = box.checked ? 0.5 : 1;
  });
});
