function toggleResumePositions() {
  var x = document.getElementById("previous-positions");
  var y = document.getElementById("toggle-previous-positions");

  x.style.display = "block";
  y.style.display = "none";
}

window.addEventListener("DOMContentLoaded", () => {
  if (window?.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.body.setAttribute("data-theme", "dark");
  } else {
    document.body.removeAttribute("data-theme");
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      if (entry.intersectionRatio > 0) {
        document
          .querySelector(`nav li a[href="#${id}"]`)
          .parentElement.classList.add("active");
      } else {
        document
          .querySelector(`nav li a[href="#${id}"]`)
          .parentElement.classList.remove("active");
      }
    });
  });

  // Track all sections that have an `id` applied
  document.querySelectorAll("h2[id], h3[id]").forEach((section) => {
    observer.observe(section);
  });
});
