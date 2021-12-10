const showmenu = document.querySelector(".fa-bars"); // prendo l'elemento (icona hamburger)

    showmenu.addEventListener('click', function(){ // dico all icona hamburger che al click deve compiere un azione

    const element = document.querySelector ('.hamburger-menu');
    element.classList.add("active") // al click aggiunge la classe active dell css che ha display block all elemento con classe hamburger menu 
});



const closemenu = document.querySelector(".fa-times"); // prendo l'elemento (icona chiusura menu)

    closemenu.addEventListener('click', function(){ // dico all icona chisura menu che al click deve compiere un azione

    const element = document.querySelector ('.hamburger-menu');
    element.classList.remove("active") // al click rimuove  la classe active (che gli abbiamo dato nella funzione di prima) dell css che ha display block all elemento con classe hamburger menu 
});
