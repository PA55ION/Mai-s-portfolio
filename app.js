window.addEventListener("load", function () {
  setTimeout(() => {
    let load_screen = document.getElementById("load_screen");
    document.body.removeChild(load_screen);
  });
});

const links = document.querySelectorAll(".links");
const sections = document.querySelectorAll("section");

function changeLinkState() {
  let index = sections.length;

  while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

  links.forEach((link) => link.classList.remove("active"));
  links[index].classList.add("active");
}

changeLinkState();
window.addEventListener("scroll", changeLinkState);

function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  document.getElementsByClassName("toggle-btn")[0].classList.toggle("active");
}
