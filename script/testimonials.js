const cardOne = document.getElementById("cardOne");
const cardTwo = document.querySelector("#cardTwo");
const cardThree = document.querySelector("#cardThree");

const removeActive = () => {
  cardTwo.classList.remove("active");
}

const addActive = () => {
  cardTwo.classList.add("active");
}

cardOne.addEventListener('mouseover', removeActive);
cardOne.addEventListener('mouseleave', addActive);
cardThree.addEventListener('mouseover', removeActive);
cardThree.addEventListener('mouseleave', addActive);


