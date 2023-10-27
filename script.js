
let dice1 = document.querySelector("#dice1")
let dice2 = document.querySelector("#dice2")
let button = document.querySelector("button")
let resultText = document.querySelector("h1")
let humanScore = document.querySelector("#h-score")
let machineScore = document.querySelector("#m-score")

let humanScoreNumber = 0
let machineScoreNumber = 0


function playTheGame(){
    let randomNumber1 = Math.floor(Math.random() * 6 + 1) 
    let randomNumber2 = Math.floor(Math.random() * 6 + 1) 
    let randomDiceimage = "dice" + randomNumber1 + ".png"
    let randomDiceimage2 = "dice" + randomNumber2 + ".png"
    
    dice1.setAttribute('src', 'assets/images/' + randomDiceimage)
    dice2.setAttribute('src', 'assets/images/' + randomDiceimage2)

    if(randomNumber1 === randomNumber2){
        resultText.innerHTML = "Empate"
    } else if(randomNumber1 < randomNumber2){
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        resultText.innerHTML = "Você perdeu"
    }else{
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        resultText.innerHTML = "Você ganhou"
    }
        
}

button.addEventListener("click", playTheGame)