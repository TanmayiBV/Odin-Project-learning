humanScore=0;
compScore=0;

function playGame() {
    function getCompChoice() {
        choice = Math.floor(Math.random() * 3);
        if (choice == 0) {
            return "stone"
        }
        else if (choice == 1) {
            return "paper"
        }
        else {
            return "scissor"
        }
    }

    function getUserChoice() {
        input = prompt("Enter 0 for 'stone', 1 for 'paper', or 2 for 'scissor'")
        if (input == '0') {
            return 'stone'
        }
        else if (input == '1') {
            return 'paper'
        }
        else {
            return 'scissor'
        }
    }

    human = getUserChoice();
    comp = getCompChoice();


    function score(humanChoice, compChoice) {
        if (human == 'stone' && comp == 'paper') {
            console.log('U LOSE! paper beats stone')
            compScore++;
        }
        else if (human == 'stone' && comp == 'scissor') {
            console.log('U WIN! stone beats scissor')
            humanScore++;
        }
        else if (human == 'paper' && comp == 'stone') {
            console.log('U WIN! paper beats stone')
            humanScore++;
        }
        else if (human == 'paper' && comp == 'scissor') {
            console.log('U LOSE! scissor beats paper')
            compScore++;
        }
        else if (human == 'scissor' && comp == 'stone') {
            console.log('U LOSE! stone beats scissor')
            compScore++;
        }
        else if (human == 'scissor' && comp == 'paper') {
            console.log('U WIN! scissor beats paper')
            humanScore++;
        }
        else {
            console.log("DRAW")
        }
    }
    score(human, comp);
}

playGame();
playGame();
playGame();
playGame();
playGame();
console.log('You won ',humanScore,' times!')
console.log('And Computer won ',compScore,' times!')
if (humanScore>compScore){
    console.log("YOU ARE THE WINNER")
}
else{
    console.log("COMPUTER IS THE WINNER")
}


