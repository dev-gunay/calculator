// Select display
let display = document.getElementById("display");

// Numbers
document.getElementById("btn0").onclick = function() { display.textContent += "0"; }
document.getElementById("btn1").onclick = function() { display.textContent += "1"; }
document.getElementById("btn2").onclick = function() { display.textContent += "2"; }
document.getElementById("btn3").onclick = function() { display.textContent += "3"; }
document.getElementById("btn4").onclick = function() { display.textContent += "4"; }
document.getElementById("btn5").onclick = function() { display.textContent += "5"; }
document.getElementById("btn6").onclick = function() { display.textContent += "6"; }
document.getElementById("btn7").onclick = function() { display.textContent += "7"; }
document.getElementById("btn8").onclick = function() { display.textContent += "8"; }
document.getElementById("btn9").onclick = function() { display.textContent += "9"; }

// Operators
document.getElementById("add").onclick = function() { display.textContent += "+"; }
document.getElementById("subtract").onclick = function() { display.textContent += "-"; }
document.getElementById("multiply").onclick = function() { display.textContent += "*"; }
document.getElementById("divide").onclick = function() { display.textContent += "/"; }

// Decimal
document.getElementById("decimal").onclick = function() { display.textContent += "."; }

// Clear
document.getElementById("clear").onclick = function() {
    display.textContent = "0";
    let clearBtn = document.getElementById("clear");
    clearBtn.classList.add("activeClear");
    setTimeout(function(){ clearBtn.classList.remove("activeClear"); }, 300);
}

// Equals
document.getElementById("equals").onclick = function() {
    try {
        display.textContent = eval(display.textContent);
    } catch {
        display.textContent = "Error";
    }
}