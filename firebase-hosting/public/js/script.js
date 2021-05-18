const counterBtn = (btn) =>{
    let counter = parseFloat(counterTxt.textContent);

    // Increase and Decrease Counter
    if (btn === "-") {
        counter -= 1;
    }
    else if (btn === "+") {
        counter += 1;
    }
    else{
        counter = 0;
    }

    counterTxt.textContent = counter;

    // Change Counter Background
    if (counter < 0) {
        counterTxt.style.backgroundColor = '#f05454';    
    }
    else if (counter === 0) {
        counterTxt.style.backgroundColor = '#00848f';
    }
    else{
        counterTxt.style.backgroundColor = '#5a952a';
    }
}