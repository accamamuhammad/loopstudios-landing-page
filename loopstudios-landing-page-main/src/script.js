const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
const hero = document.getElementById("hero");
const links = document.getElementById("links");

closeIcon.style.display = "none";
menuIcon.addEventListener("click", () => {
  if ((menuIcon.style.display = "block")) {
    menuIcon.style.display = "none";
    closeIcon.style.display = "block";
    hero.style.backgroundColor = "black";
    hero.style.backgroundImage = "none";
    links.style.display = "block";
  } else {
    alert("error");
  }
});
closeIcon.addEventListener("click", () => {
  if ((closeIcon.style.display = "none")) {
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
    hero.style.backgroundColor = "white";
    hero.style.backgroundImage = "url(/images/desktop/image-hero.jpg)";
    links.style.display = "none";
  } else {
    alert("error");
  }
});
