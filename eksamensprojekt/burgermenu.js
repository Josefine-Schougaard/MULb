function burgerMenuToggle () {
    var menu = document.getElementsByClassName("mobile_nav")[0];
    console.log("click");
    console.log(menu);
    if (menu.style.display === "block") { 
        menu.style.display = "none";
    }
    else {
        menu.style.display = "block";
    }
}

//funktion der skjuler eller viser navigationen når der tykkes på burgermenu ikonet