//     ROCK PAPER SCISSORS

//Let's play! You have to return which player won! In case of a draw return Draw!

const rps2 = (p1, p2) => {
    if(p1 === p2){
        return "Draw!"
    }
    if(p1 === 'scissors' && p2 === 'paper') return 'Player 1 won!'
    if(p1 === 'paper' && p2 === 'rock') return 'player 1 won!'
    if(p1 === 'rock' && p2 === 'scissors') return 'player 1 won'
    else
    return 'Player 2 won'
}

//My rock paper scissors function has two parameter (p1,p2)
//The rule of rps is scissors beats paper, paper beats rock and rock beats scissors
//first we return draw if p1 and p2 have the same choice
//then the following conditions check if player 1's choice beats player 2's choice and if any of the conditions are true it returns "player 1 won!"
//the else statement is a default that will run if non of the above conditions are met i.e no draws or player 1 wins. It returns "player 2 won!"