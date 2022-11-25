const game = document.querySelectorAll('.game')
const exitGamebtn = document.getElementById('exit-game')
const result = document.getElementById('result')
// computer turn -random 
function computerTurn() {
    const computer = Math.floor(Math.random() * 3)
    if (computer == 0) {
        return 'Rock'
    }
    else if (computer == 1) {
        return 'Paper'
    }
    else {
        return 'Scissor'
    }
}
// Get Result with computer value and human value 
function getResult(cmpValue, humValue){
    if (cmpValue == humValue) {

        showResult('TIE🤝,Play Again', cmpValue, humValue)
    }
    else {
        if ((cmpValue == 'Rock' && humValue == 'Paper') ||
            (cmpValue == 'Paper' && humValue == 'Scissor') ||
            (cmpValue == 'Scissor' && humValue == 'Rock')
        )
            showResult('WON🏆🏆', cmpValue, humValue)
        else {
            showResult('LOSS🤦‍♂️', cmpValue, humValue)
        }
    }
}
// show result on screen 
function showResult(gameResult, cmpValue, humValue) {
    result.innerHTML = `${gameResult}<br> 🤖Choose - ${cmpValue},<br> 👨‍🦱 Choose - ${humValue}`
}
// clear or restart game 
function clearScores() {
    result.innerText = ''
}
// main 
game.forEach(turn => {
    turn.onclick = () => {
        cmpTurn = computerTurn()
        getResult(cmpTurn, turn.value)
    }
})
exitGamebtn.onclick = () => clearScores()
