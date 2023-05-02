// ?========== Change Nav Style on Scroll =========

window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window_scrolled", window.scrollY > 0);
});

// ? CONTACT BUTTONS (Circular text buttons)
const textButtons = document.querySelectorAll(".contact_btn");
textButtons.forEach((textButton) => {
  let text = textButton.querySelector("p");
  text.innerHTML = text.innerHTML
    .split("")
    .map(
      (character, index) =>
        `<span style="transform: rotate(${index * 12}deg)">${character}</span>`
    )
    .join("");
});

// * ======================== SWIPER JS (Gallery Section) ========================
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

const nav = document.querySelector(".nav_links");
const openNavBtn = document.querySelector("#nav_toggle_open");
const closeNavBtn = document.querySelector("#nav_toggle_close");
const openNav = () => {
  nav.style.display = "flex";
  openNavBtn.style.display = "none";
  closeNavBtn.style.display = "inline-block";
};
openNavBtn.addEventListener("click", openNav);
const closeNav = () => {
  nav.style.display = "none";
  openNavBtn.style.display = "inline-block";
  closeNavBtn.style.display = "none";
};

if (document.body.clientWidth < 1024) {
  closeNavBtn.addEventListener("click", closeNav);
  nav.querySelectorAll("li a").forEach((navLink) => {
    navLink.addEventListener("click", closeNav);
  });
}
