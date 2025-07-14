let num1=parseInt(document.getElementById("num1").value)
let num2=parseInt(document.getElementById("num2").value);
let operation=document.getElementById("operation").value
let result;
function calculation(){
    if (isNaN(num1) || isNaN(num2)){
         result = "enter a valid number "
    }
    else
    {
        switch(operation){
            case "add":
                result = num1 + num2;
                break;
            case "subract":
                result = num1 - num2;
                break;

        }
    }
    document.getElementById("result").innerText = "result is " + result 
}