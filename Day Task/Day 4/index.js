    let target = Math.floor(Math.random()*10)+1;
    console.log(target);
    let count = 0;

function playgame(){
    let guess =parseInt(document.getElementById("guessednum").value);
    count++;
    if (guess < target){
        document.getElementById("feedback").innerText="Too low"
    }
    else if (guess > target){
        document.getElementById("feedback").innerText="Too High"
    }
    else{
        document.getElementById("feedback").innerText="Your guess is correct"
    }
    
}


