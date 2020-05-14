window.addEventListener("load", function() {
    let load_screen = document.getElementById('load_screen');
    document.body.removeChild(load_screen);
}, 5000);

const links = document.querySelectorAll('.links');
const sections = document.querySelectorAll('section');


function changeLinkState() {
    let index = sections.length;

    while(--index && window.scrollY + 50 < sections[index].offsetTop) {}
  
    links.forEach((link) => link.classList.remove('active'));
    links[index].classList.add('active');
}

changeLinkState();
window.addEventListener('scroll', changeLinkState);