function openTab(evt, tabName) {
    var i, tabscontents, tabslinks;

    tabscontents = document.getElementsByClassName("terminal__content");
    tabslinks = document.getElementsByClassName("terminal__tablink")

    for(i = 0; i < tabscontents.length; i++) {
        tabscontents[i].style.display = "none";
    }

    for(i = 0; i < tabslinks.length; i++) {
        tabslinks[i].className = tabslinks[i].className.replace("active", "");
    }

    tab = document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
    document.getElementById("terminal__prompt--text").innerHTML = "cat " + tabName.toLowerCase() + ".txt"
}

$(document).ready(function (){
    document.getElementById("default__tablink").click();
});