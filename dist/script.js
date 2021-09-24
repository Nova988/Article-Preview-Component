"use strict";

const shareBtn = document.getElementById("share-btn");
const shareMenu = document.querySelector(".share-menu");
const shareIcon = document.querySelector(".icon");

shareBtn.addEventListener("click", function () {
  shareMenu.classList.toggle("hide");
  shareBtn.classList.toggle("active");
  shareIcon.classList.toggle("active");
});
