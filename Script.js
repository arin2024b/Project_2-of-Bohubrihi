let check_btn = document.getElementById('btn');
let showText = document.getElementById('p1');
let showAttemptCount = document.getElementById('attempts');

let randNum = Math.ceil(Math.random() * 10);

showAttemptCount.textContent="You Get Your 1st Chance--:";

check_btn.addEventListener('click', () => {
    showAttemptCount.textContent="";

    let countAttempt = parseInt(document.getElementById('attemptCount').value, 10); // for updating in decimal val
    countAttempt+=1;
    document.getElementById('attemptCount').value = countAttempt;

    // console.log(countAttempt);
    
    if(countAttempt==1){
        showAttemptCount.textContent="You Get Your 2nd Chance--:";
    }
    else if(countAttempt==2){
        showAttemptCount.textContent="You Get Your last Chance--:";
    }
    else if (countAttempt == 3) {
        showAttemptCount.textContent = "Your Chances Are Over..!";
    }
    else {
        showText.textContent="";
        showAttemptCount.textContent = "Your Chances Are Over..!";
    }
    
    // console.log(randNum);

    if(countAttempt <= 3) {
        let user_input = document.getElementById('num_input');
        
        
        if(user_input.value>=1 && user_input.value<=10){
            if (user_input.value == randNum) {
                showText.textContent = `You got a correct guess and it's  ${randNum}`
                setTimeout(()=>{
                    showText.textContent='';
                },4000);
            } else{
                if (user_input.value < randNum) {
                    showText.textContent = `You're guessing a lower number , please choose higher`;
                    setTimeout(()=>{
                        showText.textContent='';
                    },4000);
                } else if (user_input.value > randNum) {
                    showText.textContent = `You're guessing a higher number , please choose lower`;
                    setTimeout(()=>{
                        showText.textContent='';
                    },4000);
                }
            }
            
        }
        else {
            showText.textContent=`Your Input Number is out of range, please give an integer number between 1 to 10` 
            setTimeout(()=>{
                showText.textContent='';
            },4000);
        }

        if(countAttempt == 3) {
            document.getElementById('userInputdiv').style.display = "none";
        }
    }
    else {
        document.getElementById('userInputdiv').style.display = "none";
    }

});

