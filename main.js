function computerPlay(){
    let getRandomValue = Math.random();

    if(getRandomValue <= 0.33){
        return 'rock';
    }else if(getRandomValue <= 0.66){
        return 'paper';
    }else{
       return 'scissors';
    }
}


function playRound(playerSelection, computerSelection) {
    if(playerSelection.toLowerCase() === 'rock'){
        if(computerSelection === "rock" ){
            return 'Tie';
        }else if(computerSelection === "paper" ){
           computerScore++;
           return 'Computer Wins!';
        }else{
            playerScore++;
            return 'Player wins!';
        }
    }

    if(playerSelection.toLowerCase() === 'paper'){
        if(computerSelection === "rock" ){
            playerScore++;
            return 'Player Wins';
        }else if(computerSelection === "scissors" ){
           computerScore++;
           return 'Computer Wins!';
        }else{
            return 'Tie';
        }
    }

    if(playerSelection === 'scissors'){
        if(computerSelection === 'rock'){
            computerScore++;
            return 'Computer Wins';
        }else if(computerSelection === 'paper'){
            playerScore++;
            return 'Player Wins';
        }else{
            return 'Tie';
        }
    }
  }
  

  playerScore = parseInt(0);
  computerScore = parseInt(0);


  function game(){
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('make your move , rock, paper or scissor');
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        console.log('Player score =' + playerScore);
        console.log('Computer score =' + computerScore);
    }

  }

  game();