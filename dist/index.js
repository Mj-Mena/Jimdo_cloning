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
  breakpoints: {
    400: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    1090: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
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

const burg = document.querySelector(".burger");
const cross = document.querySelector(".cross");
const navig = document.querySelector(".nav_container");
const mbnav = document.querySelector(".mb-nav-cont");
const blackbg = document.querySelector(".bgdrop");
const websitebtn = document.querySelectorAll(".sec1mob");
const wrap2 = document.querySelector(".wrapall2");
const wrap = document.querySelector(".warpall");
const sign_log = document.querySelector(".sign_log");
const dropweb = document.querySelector(".wbcont");
const wbcontent = document.querySelector(".wbcont_content");
const wbcontent2 = document.querySelector(".wbcont_content2");
const wbcontent3 = document.querySelector(".wbcont_content3");
const wbcontent4 = document.querySelector(".wbcont_content4");
const wbcontent5 = document.querySelector(".wbcont_content5");
const ftbtns = document.getElementsByClassName("ft_btn");
const l1 = document.querySelector(".list_footer1");
const l22 = document.querySelector(".list_footer2");
const l3 = document.querySelector(".list_footer3");

burg.addEventListener("click", () => {
  navig.style.display = "none";
  mbnav.style.display = "block";
  blackbg.style.display = "block";
});
cross.addEventListener("click", () => {
  mbnav.style.display = "none";
  navig.style.display = "flex";
  blackbg.style.display = "none";
});
Array.from(websitebtn).forEach((elem) => {
  elem.addEventListener("click", () => {
    if (elem.children[0].children[0].innerHTML == "Website") {
      dropweb.style.display = "flex";
      wbcontent.style.display = "flex";
      wrap.style.display = "none";
      wrap2.style.display = "none";
      sign_log.style.display = "none";
    }
    if (elem.children[0].children[0].innerHTML == "Online Store") {
      dropweb.style.display = "flex";
      wbcontent2.style.display = "flex";
      wrap.style.display = "none";
      wrap2.style.display = "none";
      sign_log.style.display = "none";
    }
    if (elem.children[0].children[0].innerHTML == "Business-Tools") {
      dropweb.style.display = "flex";
      wbcontent3.style.display = "flex";
      wrap.style.display = "none";
      wrap2.style.display = "none";
      sign_log.style.display = "none";
    }
    if (elem.children[0].children[0].innerHTML == "Knowledge Guide") {
      dropweb.style.display = "flex";
      wbcontent4.style.display = "flex";
      wrap.style.display = "none";
      wrap2.style.display = "none";
      sign_log.style.display = "none";
    }
    if (elem.children[0].children[0].innerHTML == "Help") {
      dropweb.style.display = "flex";
      wbcontent5.style.display = "flex";
      wrap.style.display = "none";
      wrap2.style.display = "none";
      sign_log.style.display = "none";
    }
  });
  dropweb.addEventListener("click", () => {
    dropweb.style.display = "none";
    wbcontent.style.display = "none";
    wbcontent2.style.display = "none";
    wbcontent3.style.display = "none";
    wbcontent4.style.display = "none";
    wbcontent5.style.display = "none";
    wrap.style.display = "block";
    wrap2.style.display = "block";
    sign_log.style.display = "flex";
  });
});

Array.from(ftbtns).forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.children[0].innerHTML == "Products" && l1.style.display == "none") {
      l1.style.display = "block";
    } else {
      l1.style.display = "none";
    }

    if (
      btn.children[0].innerHTML == "About us" &&
      l22.style.display == "none"
    ) {
      l22.style.display = "block";
    } else {
      l22.style.display = "none";
    }

    if (btn.children[0].innerHTML == "Services" && l3.style.display == "none") {
      l3.style.display = "block";
    } else {
      l3.style.display = "none";
    }
  });
});
