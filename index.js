
let sum=0
let hasBlackJack=false
let asAlive=false
let message=""
let cards=[]
let player={
    pName:"Murat",
    chips:100
}

let messageEl=document.getElementById("message-el")
let sumEL=document.getElementById("sum-el")
let cardEl=document.querySelector("#cards-el")
let playerEl=document.getElementById("player-el")

playerEl.textContent=player.pName+": $"+player.chips

function startGame(){
    asAlive=true
    let firstCard=getRandomCard()
    let secondCard=getRandomCard()
    cards=[firstCard, secondCard]
    sum=firstCard+secondCard

    renderGame()
}

function getRandomCard(){
    let randomCard= Math.floor(Math.random()*13)+1
    if(randomCard===1){
        return 11
    }else if(randomCard>10){
        return 10
    }else{
        return randomCard
    }
}


function renderGame(){
    if(sum<=20){
        message="Do you wat to draw a new card"
    }else if(sum===21){
        message="Wohooo! You've got BlackJack"
        hasBlackJack=true
    }else{
        message="You're out of the game"
        asAlive=false
    }
    messageEl.textContent=message
    sumEL.textContent="Sum: "+sum
    cardEl.textContent="Cards: "
    for(let i=0; i<cards.length; i++){
        cardEl.textContent+=cards[i]+" "
    }

}

function drawCard(){
    if(asAlive && hasBlackJack==false){
        let newCard=getRandomCard()
        cards.push(newCard)
        sum+=newCard
        renderGame()
    }
}