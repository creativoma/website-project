const recargar = () => {
    setTimeout(function() {
        window.location.reload(1);
    }, 5000);
}

const menuExpand = document.querySelector(".menu-expand");
const menuBar = document.querySelector(".menu-icon");
const menuLink = document.querySelectorAll('.menu-expand li')

function toogleMenu() {
    if (menuExpand.classList == 'menu-expand')  {
        menuExpand.classList.add('active');
    }else{
        menuExpand.classList.remove('active');
    }
}

function toogleIcon() {
    if (menuBar.classList == 'menu-icon')   {
        menuBar.getAttribute('style', 'opacity:0');
        menuBar.classList.add('cross');
    }else{
        menuBar.classList.remove('cross');
        menuBar.getAttribute('style', 'opacity:1');
    }
}

menuLink.forEach(element => {
    element.addEventListener('click', toogleMenu);
    element.addEventListener('click', toogleIcon);
});

