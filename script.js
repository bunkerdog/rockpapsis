let userScore = 0
let ComputerScore = 0
//following are dom variables:caching the dom
const userScore_span = document.getElementById("user-score");
const ComputerScore_span =document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const randomNumber = (Math.floor(Math.random() * 3));
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Stick-side";
    if (letter === "p") return "Body";
    return "Glove-side";
}



function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    ComputerScore_span.innerHTML = ComputerScore;
    
    result_p.innerHTML = convertToWord(userChoice) + " meets " + convertToWord(computerChoice) + ". You made the save!";
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function( ){ document.getElementById(userChoice).classList.remove('green-glow')}, 2500);
}

function lose(userChoice, computerChoice) {
    ComputerScore++;
    ComputerScore_span.innerHTML = ComputerScore;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML =  convertToWord(computerChoice) + " got by " + convertToWord(userChoice) + ". Shooter scored.";
    document.getElementById(computerChoice).classList.add('red-glow');
    setTimeout(function(){ document.getElementById(computerChoice).classList.remove('red-glow')}, 2000);
}
function draw(userChoice, computerChoice) {
    computerChoice==userChoice;
    result_p.innerHTML = convertToWord(userChoice) + " and " + convertToWord(computerChoice) + " are the same. It's a save!";
    document.getElementById(computerChoice, userChoice).classList.add('grey-glow');
    setTimeout(function(){document.getElementById(computerChoice, userChoice).classList.remove('grey-glow')}, 2000)
}


function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rr":
        case "pp":
        case "ss":
            win(userChoice, computerChoice);
            break
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
          

    }    
}


function main(){

    rock_div.addEventListener('click', function() {
        game("r");
    })

    paper_div.addEventListener('click', function() {
        game("p");
        
    })

    scissors_div.addEventListener('click', function(){
        game("s");
    })
}

main();




















