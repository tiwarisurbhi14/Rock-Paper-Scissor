function getComputerChoice(){
    const rpschoices =['Rock','Paper','Scissor']
    let ComputerChoice = rpschoices[Math.floor(Math.random()*3)]
    return ComputerChoice
}
function getResult(PlayerChoice,ComputerChoice){
    let score;
    if(PlayerChoice == ComputerChoice){
        score = 0
    }else if(PlayerChoice=='Rock' && ComputerChoice=='Scissor'){
        score = 1
    }else if(PlayerChoice=='Paper' && ComputerChoice=='Rock'){
        score = 1
    }else if(PlayerChoice=='Scissor' && ComputerChoice=='Paper'){
        score = 1
    }else{
        score = -1
    }
    return score  
}

function showResult(score,ComputerChoice,PlayerChoice){
    let result = document.getElementById('result')
    console.log(result)
    switch(score){
        case -1:
            result.innerText='You Lose!'
            break;
        case 1:
            result.innerText='You Won!'
            break;
        case 0:
            result.innerText="It's a draw"
            break;
    }
    let PlayerScore = document.getElementById('player-score')
    let hands = document.getElementById('hands')
    console.log(PlayerScore.innerText)
    PlayerScore.innerText = `${Number(PlayerScore.innerText)+score}`
    hands.innerText = `👱 ${PlayerChoice} vs 🤖 ${ComputerChoice}`
}
function onClickRPS(playerChoice) {
    const computerChoice = getComputerChoice()
    const score = getResult(playerChoice.value, computerChoice)
    showResult(score,computerChoice,playerChoice.value)
}

function playGame(){
    let rpsButtons = document.querySelectorAll('.rpsButton')
    rpsButtons.forEach(rpsButton =>{
        rpsButton.onclick =() => onClickRPS(rpsButton)
    })

    let endGameButton = document.getElementById('endGameButton')
    endGameButton.onclick =() => endGame()
}
function endGame() {
    let playerScore = document.getElementById('player-score')
    let hands = document.getElementById('hands')
    let result = document.getElementById('result')
    playerScore.innerText = ''
    hands.innerText = ''
    result.innerText = ''
}
  
playGame()