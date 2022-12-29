// let arrOfSourceImg = [
//   "imgs/slide_img1.webp",
//   "imgs/slide_img2.jpg",
//   "imgs/slide_img3.jpg",
// ];
// let myImg = document.querySelector(".img-slider img");
// let i = 0;
// function changeSrc() {
//   myImg.setAttribute("src", arrOfSourceImg[i]);
//   if (i < arrOfSourceImg.length - 1) {
//     i++;
//   } else {
//     i = 0;
//   }
//   setTimeout(() => {
//     changeSrc();
//   }, 2000);
// }
// setInterval(() => {
//   changeSrc();
// }, 2000);

let myImg = document.querySelectorAll(".img-slider img");
let i = 0;
let liBullets = document.querySelectorAll(".bullets li");

//remove active class from all img
function removeActive() {
  myImg.forEach((ele) => {
    ele.classList.remove("active-slider");
  });
}
// add active class to next img
function addActive() {
  myImg[i].classList.add("active-slider");
  if (i < myImg.length - 1) {
    i++;
  } else {
    i = 0;
  }
}

// control bullets of imgs
let j = 0;
function imgBullets() {
  liBullets.forEach((ele) => {
    ele.classList.remove("active");
  });

  liBullets[j].classList.add("active");
  if (j < liBullets.length - 1) {
    j++;
  } else {
    j = 0;
  }
}

setInterval(() => {
  removeActive();
  addActive();
  imgBullets();
}, 2000);

//toggle menue

let myToggle = document.querySelector(".toggle-menue i");
let navBar = document.querySelector(".navbar");
myToggle.onclick = function () {
  navBar.classList.toggle("clicked");
};
