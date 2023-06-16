function openNav(){
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("menu-id").style.visibility = "hidden";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav(){
    document.getElementById("mySidenav").style.width = "0px";
    document.getElementById("menu-id").style.visibility = "visible";
    document.body.style.backgroundColor = "hsl(36, 100%, 99%)";
}