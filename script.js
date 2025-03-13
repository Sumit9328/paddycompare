const searchBox = document.getElementById("searchBox");
const searchInput = document.getElementById("searchInput");

searchBox.addEventListener("click", () => {
  searchBox.classList.add("expanded");
  searchInput.focus();
});

document.addEventListener("click", (e) => {
  if (!searchBox.contains(e.target)) {
    searchBox.classList.remove("expanded");
    searchInput.value = "";
  }
});

searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    searchBox.classList.remove("expanded");
    searchInput.value = "";
  }
});

let testimonials = document.querySelectorAll(".testimonial");
let dots = document.querySelectorAll(".dot");

function changeSlide(index) {
  testimonials.forEach((testimonial, i) => {
    if (i === index) {
      testimonial.classList.add("active");
      dots[i].classList.add("active");
    } else {
      testimonial.classList.remove("active");
      dots[i].classList.remove("active");
    }
  });
}


function toggleMenu() {
  document.querySelector(".navbar-container").classList.toggle("active");
}
