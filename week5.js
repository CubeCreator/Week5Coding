var myMenu = new Menu();

function myFunction() {
    document.getElementById("myMenu").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.menubtn')) {
        var dropdowns = document.getElementsByClassName("menu-content")
        var x;
        for (x = 0; x < dropdowns.length; x++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}