
var elements = document.getElementsByClassName("column");

// Declare a loop variable
var c;

// Four images side by side
function four() {
    for (c = 0; c < elements.length; c++) {
        elements[c].style.width = "25%";
    }
}

// Two images side by side
function two() {
    for (c = 0; c < elements.length; c++) {
        elements[c].style.width = "50%";
    }
}



// Add active class to the current button (highlight it)
var header = document.getElementById("myHeader");
var btns = header.getElementsByClassName("btn");
for (var i = 0; c < btns.length; c++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}



function openNav() {
    document.getElementById("mySidenav").style.width = "200px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}