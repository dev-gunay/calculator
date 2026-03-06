
let display = document.querySelector(".display");
let buttons = document.querySelectorAll("button");

buttons.forEach(function(button){

    button.onclick = function(){

        let value = button.textContent;

        if(value === "C"){
            display.textContent = "";
        }

        else if(value === "="){

            try{
                display.textContent = eval(display.textContent);
            }
            catch{
                display.textContent = "Error";
            }

        }

        else{
            display.textContent = display.textContent + value;
        }

    };

});
