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
        menuBar.classList.add('cross');
    }else{
        menuBar.classList.remove('cross');
    }
}

menuLink.forEach(element => {
    element.addEventListener('click', toogleMenu);
    element.addEventListener('click', toogleIcon);
});

