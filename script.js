
// Mobile Menu Toggle
const toggleButton = document.getElementById("toggle-button");
const naviList = document.getElementById("navigation-list");
const telephone = document.getElementById("tel");
const menu = document.getElementById("toggle-button");
toggleButton.addEventListener('click', () =>{
  naviList.classList.toggle('active-nav');
});
toggleButton.addEventListener('click', () =>{
  menu.classList.toggle('active-menu');
});



