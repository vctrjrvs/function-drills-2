
const playerPicks = playerPick =>{
    playerPick = playerPick.toLowerCase();
    if (playerPick === 'rock' || playerPick==='paper' || playerPick ==='scissors') {
      return playerPick;
    } else throw new Error ('Invalid choice!');
};
  
  function computerPicks() {
    switch(Math.floor(Math.random() * 3) + 1) {
        case 0:
            return 'rock';
        break;
        case 1:
            return 'scissors';
        break;
        case 2:
            return 'paper';
        break;
        };
  }
  
  function pickWinner(playerPick, computerPick) {
    if (playerPick === computerPick) {
        return 'Tie!';
    } else if (playerPick === 'rock') {
    if (computerPick === 'paper') {
        return 'Computer wins!';
        } else return 'You win!';
    } else if (playerPick === 'paper'){
    if (computerPick === 'scissors') {
        return 'Computer wins!';
        } else return 'You win!';
    } else if (playerPick === 'scissors') {
    if (computerPick === 'rock') {
        return 'Computer wins!';
        } else return 'You win!';
    }
    };
  
function rockPaperScissors() {
    let playerPick = playerPicks('scissors');
    let computerPick = computerPicks()
    console.log(`You picked ${playerPick}`);
    console.log(`Computer picked ${computerPick}`);
    console.log(pickWinner(playerPick,computerPick));
};

rockPaperScissors();
  