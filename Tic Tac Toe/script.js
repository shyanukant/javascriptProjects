let tmusic = new Audio("beep.wav")
let winMusic = new Audio("winner.wav")
let turn = "X"
let gameOver = false;
let boxItem = document.getElementsByClassName('boxItem');
let info = document.getElementById('info')
let winImg = document.getElementById('gif')
let line = document.getElementById('line')
const resetBtn = document.getElementById('reset')
if(document.width < '800px'){
    console.log('small hieght')
}

// function to change the turn 
const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}

// function to check for Win
const checkWin = () => {

    let win = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135]
    ]
    win.forEach(e => {
        if ((boxItem[e[0]].innerText === boxItem[e[1]].innerText) && (boxItem[e[1]].innerText === boxItem[e[2]].innerText) && (boxItem[e[0]].innerHTML !== "")) {
            info.innerText = boxItem[e[0]].innerText + ' WON';
            gameOver = true
            winImg.style.width = '200px'
            line.style.width = '20vw'
            line.style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
            winMusic.play()
        }
    })
}

// Main logic 
let boxs = document.getElementsByClassName("box");
Array.from(boxs).forEach(element => {
    let boxItem = element.querySelector(".boxItem");
    element.addEventListener('click', () => {
        if (boxItem.innerText === '') {
            boxItem.innerText = turn;
            turn = changeTurn();
            tmusic.play();
            checkWin();
            if (!gameOver) {
                info.innerHTML = "Your turn: " + turn;
            }
        }
    })
})

resetBtn.onclick = () => {
    Array.from(boxItem).forEach(e => {
        e.innerText = ""
    })
    gameOver = false
    turn = 'X'
    info.innerHTML = "Your turn: " + turn;
    winImg.style.width = 0
    line.style.width = 0

}