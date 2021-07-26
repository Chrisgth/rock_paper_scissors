function computerPlay(){
    let compChoice = Math.floor(Math.random()*3);
    if(compChoice == 0){
      compChoice = 'rock';
    } else if(compChoice == 1){
      compChoice = 'paper';
    } else {
      compChoice = 'scissors';
    }
    return compChoice;
  }
  function game(){
    let playerScore = 0;
    let computerScore = 0;
        function playGame(playerSelection, computerSelection){
        const playerSelectlc = playerSelection.toLowerCase();
        console.log('you chose: ',playerSelectlc)
        console.log('computer chose: ',computerSelection)
        if(playerSelectlc == computerSelection){
            console.log('draw');
            return 'draw';
        }else if (playerSelectlc == 'rock' && computerSelection == 'paper'){
            console.log('you lose');
            return 'loss';
        }else if (playerSelectlc == 'paper' && computerSelection == 'scissors'){
            console.log('you lose');
            return 'loss';
        }else if (playerSelectlc == 'scissors' && computerSelection == 'rock'){
            console.log('you lose');
            return 'loss';
        }else if (playerSelectlc !='rock'&&playerSelectlc !='scissors'&&playerSelectlc !='paper'){
            console.log('invalid argument')
            return 'invalid argument';
        }else{
            console.log('you win');
            return 'win';
        }
        }
        function playRound(){
        for(i=0;i<5;i++){
            let playerSelectRound = prompt("enter your choice");
            let computerSelectionRound = computerPlay();
            let repeatableGame = playGame(playerSelectRound, computerSelectionRound);
            if (repeatableGame == 'loss'){
                ++computerScore;
                console.log('You lose! The score is ' + computerScore + '-' + playerScore);
                console.log('-')
            } else if(repeatableGame == 'win'){
                ++playerScore;
                console.log('You win! The score is ' + computerScore + '-' + playerScore);
                console.log('-')
            } else if(repeatableGame == 'invalid argument'){
                i--;
                alert('please make a valid choice');
                console.log('-')
            } else{
            console.log('Draw! The score is ' + computerScore + '-' + playerScore);
            console.log('-')
            }
        }
    }
    playRound();
    if(playerScore < computerScore){
        alert('You lose!')
    } else if (playerScore > computerScore){
        alert('You win!')
    } else{
        alert('Draw!')
    }
}
