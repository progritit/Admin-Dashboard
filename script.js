// Footer year helper
// This keeps the copyright year current without needing manual updates.
document.addEventListener("DOMContentLoaded", () => {
  const currentYear = document.querySelector("#current-year");

  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }
});
