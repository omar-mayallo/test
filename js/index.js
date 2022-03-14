"use strict";
/*___ HEADER & NAVBAR ___*/
const navbar = document.querySelector(".nav-box"),
  navItem = document.querySelectorAll(".nav-item"),
  toggleIcon = document.querySelector(".menu-icon"),
  closeIcon = document.querySelector(".close-icon"),
  menuWindow = document.querySelector(".menu-sm");

//((((((((active class Handling {Common Way}))))))))
// navItem.forEach((el) => {
//   el.addEventListener("click", () => {
//     if (!el.classList.contains("active")) {
//       navItem.forEach((otherEl) => otherEl.classList.remove("active"));
//     }
//     el.classList.add("active");
//   });
// });
//((((((((((active class Handling {Bubbling way}))))))))))
navbar.addEventListener("click", (e) => {
  const clicked = e.target.closest(".nav-item");
  //Guard Clause => used for if clicked in any place not navItem (for ex: empty places btw naves) dont return null
  if (!clicked) return;
  navItem.forEach((el) => el.classList.remove("active"));
  clicked.classList.add("active");
});
//((((((((((Handling Toggle icon for RESPONSIVE))))))))))
toggleIcon.addEventListener("click", (e) => {
  menuWindow.classList.remove("hide-menu");
  menuWindow.classList.add("show-menu");
});
closeIcon.addEventListener("click", (e) => {
  menuWindow.classList.add("hide-menu");
  menuWindow.classList.remove("show-menu");
});
