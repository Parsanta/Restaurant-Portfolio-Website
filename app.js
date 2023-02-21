function class_change(num) {
    var a = document.getElementById("menu");
    for (let li = 0; li < a.childElementCount - 1; li++) {
        if (a.children[li].hasAttribute('class')) {
            a.children[li].toggleAttribute('class');
        }
        a.children[num].toggleAttribute('class');
        a.children[num].classList.toggle("active");
    }
    var b = document.getElementById("menu-bg");
    for (let child = 1; child < b.childElementCount; child++) {
        if (b.children[child].classList[1] == "activet") {
            b.children[child].classList.toggle("activet");
        }
    }
    var cNum = num + 1;
    b.children[cNum].classList.toggle("activet");
}

function menu_on() {
    var nav = document.getElementById("nav");
    nav.classList.toggle("respon");
}

  
function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}
  
function fadeOut(){
  setInterval(loader, 3000);
}
window.onload = fadeOut();

