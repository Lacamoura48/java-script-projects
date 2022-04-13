const winCard = document.querySelector("#win")
const container = document.querySelector(".container")
function switchPlayers(){
    const player1 = document.querySelector(".player1");
    const player2 = document.querySelector(".player2");
    player1.classList.toggle("selected");
    player2.classList.toggle("selected");
}
function newGame(){
    const player1 = document.querySelector(".player1");
    const player2 = document.querySelector(".player2");
    player1.children[0].children[1].innerText = 0
    player2.children[0].children[1].innerText = 0
    player1.children[1].children[1].innerText = 0
    player2.children[1].children[1].innerText = 0
    if(winCard.style.top == "1%"){
        winCard.style.top = "-100%"
    }
    if(container.classList.contains("blur")) container.classList.remove("blur")
}

function rollTheDice(){
    const player = document.querySelector(".selected")
    const randomNum = Math.floor(Math.random()*5)+1
    const diceSpot = document.querySelector(".container")
    const diceImg = document.createElement("img");
    diceImg.setAttribute("src", `Alea_${randomNum}.png`);
    diceImg.setAttribute("id", "diceImg");
    diceSpot.appendChild(diceImg);
    let player1Score = parseInt(player.children[0].children[1].innerText)
    if(randomNum != 1){
        player1Score += randomNum;
        player.children[0].children[1].innerText = player1Score
    } else {
        player1Score = 0
        player.children[0].children[1].innerText = player1Score
        switchPlayers();
    }
}
function holdTheScore(){
    const player = document.querySelector(".selected")
    let player1Score = player.children[0].children[1]
    const currentScore = player.children[1].children[1]
    currentScore.innerText = parseInt(player1Score.innerText) + parseInt(currentScore.innerText)
     if(parseInt(currentScore.innerText)>=100){
        
        newGame()
        container.classList.add("blur")
        winCard.children[0].children[0].innerText = `${player.children[0].children[0].innerText} WINS ! 🎉`
        winCard.style.top = "1%"
        
        
        return null
     }
    player1Score.innerText = 0
    switchPlayers();

}