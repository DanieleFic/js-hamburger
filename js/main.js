const showmenu = document.querySelector(".fa-bars");

    showmenu.addEventListener('click', function(){

    const element = document.querySelector ('.hamburger-menu');
    element.classList.add("active")
});



const closemenu = document.querySelector(".fa-times");

    closemenu.addEventListener('click', function(){

    const element = document.querySelector ('.hamburger-menu');
    element.classList.remove("active")
});
