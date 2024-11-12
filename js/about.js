const menuIcon = document.getElementById("imglist");
const menuList = document.getElementById("ulnav");
menuIcon.addEventListener("click", () => {
  menuList.classList.toggle("hidden");
});
