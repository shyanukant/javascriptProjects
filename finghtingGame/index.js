let player1 = document.getElementById('player1')
let player2 = document.getElementById('player2')
let p1Health = document.getElementById('p1Health')
let p2Health = document.getElementById('p2Health')
let result = document.getElementById('result')
let winImg = document.getElementById('winImg')
let simulateBtn = document.getElementById('simulate')
let resetBtn = document.getElementById('reset')

// aciton's sounds
let p1Punch = new Audio('punch1.wav')
let p2Punch = new Audio('punch2.wav')
let p1Heal = new Audio('heal1.mp3')
let p2Heal = new Audio('heal2.mp3')
let winner = new Audio('winner.wav')

// update every action on the fly 
const updateGame = (p1, p2) =>{
    player1.innerText = p1.name
    player2.innerText = p2.name
    p1Health.innerText = p1.health
    p2Health.innerText = p2.health
    if(p1.health <= 0 || p2.health <= 0){
        game.isOver = true
        gameState = game.isOver
        result.innerText = game.declareWinner(game.isOver, p1, p2)
        return gameState
    }
}
// game class 
class Game{
    constructor(){
        this.isOver = false
    }
    // simulate- automatic fight  
    play(){
        while(!this.isOver){
            if( p1.health > 0 ){
                p1.strike(p1, p2)
            }
            if (p2.health > 0){
                p2.strike(p2, p1)
            }
            if(p1.health < 100 && p1.health > 0){
                p1.heal(p1)
            }
            if(p2.health < 100 && p2.health > 0){
                p2.heal(p2)
            }
            
        }
        winner.play()
        // return this.declareWinner(this.isOver, p1, p2)
    }
 // declare the winner 
    declareWinner(isOver,p1, p2){
        let winMsg 
        if(p1.health <= 0 && isOver == true){
            winMsg = `${p2.name} WON🏆🎉!!`
        }
        else if (p2.health <= 0 && isOver == true){
            winMsg = `${p1.name} WON🏆🎉!!`
        }

        winner.play()
        winImg.style.width = '250px'
        return winMsg
    }
    // reset game 
    reset(p1, p2){
        p1.health = 100
        p2.health = 100
        this.isOver = false
        result.innerText = ''
        winImg.style.width = 0
        updateGame(p1,p2)
    }
}

// player class 
class Player{
    constructor(name){
        this.name = name
        this.health = 100
        // this.attackDmg = attackDmg
    }
    // player strike and reduce health of second player
    strike(player, enemy){
        let damageAmount = Math.ceil(Math.random()*10)
        enemy.health -= damageAmount
        
        result.innerText = `${player.name} attacks ${enemy.name} for ${damageAmount} HP!`
        updateGame(p1,p2)
    }
    // Heal player's health  
    heal(player){
        let hpAmount = Math.ceil(Math.random()*5)
        player.health += hpAmount
        result.innerText = `${player.name} heals for ${hpAmount} HP !`
        updateGame(p1, p2)
    }
}
// plyers instance
let first = prompt('Enter the Name of First Player');
let second = prompt('Enter the Name of Second Player')
let p1 = new Player(first)
let p2 = new Player(second)

// game instance
game = new Game() 
// action on press keys
document.addEventListener('keydown', function(e){
    if(e.key == 'f' && game.isOver == false && p1.health > 0 ){
        p1.strike(p1, p2)
        p1Punch.play()
    }
    else if (e.key == 'a' && game.isOver == false && p2.health >0){
        p2.strike(p2, p1)
        p2Punch.play()
    }
    else if(e.key == 'h' && game.isOver == false && p1.health < 100 && p1.health > 0){
        p1.heal(p1)
        p1Heal.play()
    }
    else if(e.key == 'p' && game.isOver == false && p2.health < 100 && p2.health > 0){
        p2.heal(p2)
        p2Heal.play()
    }
})
updateGame(p1, p2)
simulateBtn.onclick = () => game.play()
resetBtn.onclick =() => game.reset(p1, p2)