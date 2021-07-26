function computerPlay(){
    let compChoice = Math.floor(Math.random()*3);
    if(compChoice == 0){
      compChoice = 'rock';
    } else if(compChoice == 1){
      compChoice = 'paper';
    } else {
      compChoice = 'scissors';
    }
    console.log(compChoice);
    return compChoice;
  }
  function playGame(playerSelection, computerSelection){
  const playerSelectlc = playerSelection.toLowerCase();
  console.log('you chose: ',playerSelectlc)
  console.log('computer chose: ',computerSelection)
  if(playerSelectlc == computerSelection){
    console.log('draw');
  }else if (playerSelectlc == 'rock' && computerSelection == 'paper'){
    console.log('you lose');
  }else if (playerSelectlc == 'paper' && computerSelection == 'scissors'){
    console.log('you lose');
  }else if (playerSelectlc == 'scissors' && computerSelection == 'rock'){
    console.log('you lose');
  }else if (playerSelectlc !='rock'&&playerSelectlc !='scissors'&&playerSelectlc !='paper'){
    console.log('invalid argument')
  }else{
    console.log('you win');
  }
  }