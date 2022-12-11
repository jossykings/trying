const showMoreImage = document.getElementById("showmore");
const buttonOne = document.getElementById("openOne");
const viewmoreOne = document.getElementById("viewmore1");
const viewmoreTwo = document.getElementById("viewmore2");
const viewmoreThree = document.getElementById("viewmore3");
const viewmoreFour = document.getElementById("viewmore4");
const viewmoreFive = document.getElementById("viewmore5");
const viewmoreSix = document.getElementById("viewmore6");
const closeOne = document.getElementById("closebtn1");
const closetwo = document.getElementById("closebtn2");
const closethree = document.getElementById("closebtn3");
const closefour = document.getElementById("closebtn4");
const closefive = document.getElementById("closebtn5");
const closesix = document.getElementById("closebtn6");
viewmoreOne.addEventListener("click", () => {
  document.getElementById("modalone").showModal();
});
viewmoreTwo.addEventListener("click", () => {
  document.getElementById("modaltwo").showModal();
});
viewmoreThree.addEventListener("click", () => {
  document.getElementById("modalthree").showModal();
});
viewmoreFour.addEventListener("click", () => {
  document.getElementById("modalfour").showModal();
});
viewmoreFive.addEventListener("click", () => {
  document.getElementById("modalfive").showModal();
});
viewmoreSix.addEventListener("click", () => {
  document.getElementById("modalsix").showModal();
});
closeOne.addEventListener("click", () => {
  document.getElementById("modalone").close();
});
closetwo.addEventListener("click", () => {
  document.getElementById("modaltwo").close();
});
closethree.addEventListener("click", () => {
  document.getElementById("modalthree").close();
});
closefour.addEventListener("click", () => {
  document.getElementById("modalfour").close();
});
closefive.addEventListener("click", () => {
  document.getElementById("modalfive").close();
});
closesix.addEventListener("click", () => {
  document.getElementById("modalsix").close();
});
buttonOne.addEventListener("click", () => {
  showMoreImage.classList.toggle("open");
  if (showMoreImage.classList.contains("open")) {
    buttonOne.innerText = "show less Images";
  } else {
    buttonOne.innerHTML = "show more images";
  }
});
