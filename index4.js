
let cards=[]//cards array (ordered list of items)
let sum=0
let hasblackjack=false
let isalive=false
let message=""
//return random number between 1 and 13
function getRandomCard(){
    //ace is worth 11
    //K Q J is workth 10
    let model= Math.floor(Math.random()*13)+1
    if(model===1){
        return 11
    }
    else if(model>10){
        return 10
    }
    else{
        return model 
    }
}

let messageEl=document.getElementById("message-el")
console.log(messageEl)
let sumEl=document.getElementById("sum-el")
//let sumEl=document.querySelector("#sum-el")
let cardsEl=document.getElementById("cards-el")
let playerName="Per"
let playerchips=125

let playerEl=document.getElementById("player-el")
playerEl.textContent=playerName+" :$"+playerchips

function startGame(){
    isalive=true
    let firstcard=getRandomCard()
    let secondcard=getRandomCard()
    cards=[firstcard,secondcard]
    sum=firstcard+secondcard
    renderGame()
}
function renderGame(){
    //render the cards in the format Cards: 10 4
    cardsEl.textContent="Cards: "
    for(let i=0;i<cards.length;i+=1){
        cardsEl.textContent+=cards[i]+" "
    }
    //render out all the cards we have 
    sumEl.textContent="Sum: "+ sum
if(sum<=20){
    message="Do you want to draw new card"
}
else if(sum===21){
    message="you have got blackjack"
    hasblackjack=true
}
else{
    message="you have lost"
    isalive=false
}
messageEl.textContent=message
}
function newCard(){
    if(isalive===true && hasblackjack===false){
    console.log("Drawing a new card from Deck!")
    let card=getRandomCard()
    cards.push(card)
    sum+=card
    renderGame()}
}
