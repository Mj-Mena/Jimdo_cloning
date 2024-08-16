const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  centeredSlides: true,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: "True",
  },
  zoom: {
    maxRatio: 3, // Maximum zoom ratio
    minRatio: 1, // Minimum zoom ratio
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    scale: 0.2,
  },
  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  navigationNext: {
    wew: "next",
  },
});
const next = document.querySelector(".swiper-button-next");
var slides = Array.from(document.querySelectorAll(".slides"));
next.addEventListener("click", () => {
  slides[swiper.activeIndex].classList.add("activeslide");
  console.log(slides[swiper.activeIndex]);
});
const opbtn = document.getElementsByClassName("ol_bt");
const ins = document.getElementsByClassName("ins_info");

Array.from(opbtn).forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.nextSibling.nextSibling.classList.contains("hauto")
      ? btn.nextSibling.nextSibling.classList.remove("hauto")
      : btn.nextSibling.nextSibling.classList.add("hauto");

    btn.childNodes[3].childNodes[0].classList.contains("rot")
      ? (btn.childNodes[3].childNodes[0].classList.remove("rot"),
        btn.childNodes[3].childNodes[0].classList.add("cross"))
      : btn.childNodes[3].childNodes[0].classList.add("rot");
  });
});
