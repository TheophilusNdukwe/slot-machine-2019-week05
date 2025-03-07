document.querySelector('#button').addEventListener('click', spinSlotsMinBet)
document.querySelector('#button2').addEventListener('click', spinSlotsMaxBet)
//Starting Balance
let wallet = 1000 
//created an Object named slotSymbols
const slotSymbols = {
    cherry: "🍒",
    lemon: "🍋",
    watermelon: "🍉",
    star: "⭐",
    orange: "🍊",
    bell: "🔔"
}


//access the object and take only the values and store them inside a variable
//console log to check if values are there
const symbolsArray = Object.values(slotSymbols)
console.log(symbolsArray)
//console.log(slotSymbols)

//declare an object called player
//give the object 

//function to randomize the items in the array and returns a random results
function getRanSymbol() {

    return symbolsArray[Math.floor(Math.random() * symbolsArray.length)]
}
// function betWin() {
    
//     return wallet = wallet + 1000
    
// }
// function betLoss() {
//     return wallet = wallet - 1000
// }

// function maxBetWin() {
//     return wallet = wallet + 10000
// }

// function maxBetLoss() {
//     return wallet = wallet - 10000
// }
function spinSlotsMinBet() {
    
    let slot1 = getRanSymbol()
    let slot2 = getRanSymbol()
    let slot3 = getRanSymbol()


    document.querySelector('#slot1').textContent = slot1
    document.querySelector('#slot2').textContent = slot2
    document.querySelector('#slot3').textContent = slot3


    if (slot1 === slot2 && slot2 === slot3) {
        wallet = wallet + 1000
        document.getElementById('result').innerText = "YOU WIN"
        document.getElementById('freshWallet').innerText = wallet
            console.log(wallet)
    }
    else if (slot1 === slot2 || slot3 === slot1 || slot2 === slot3) {
        //if at least two symbols match then the wallet increases by 667$
        wallet = wallet + 667
        document.getElementById('result').textContent = "Partial WIN"
        document.getElementById('freshWallet').innerHTML = wallet
        console.log(wallet)
        
    }
    else {
        wallet = wallet - 1000
        document.getElementById('result').textContent = "YOU LOSE"
        document.getElementById('freshWallet').innerHTML = wallet
        console.log(wallet)
    }
    
}

function spinSlotsMaxBet() {
    let slot1 = getRanSymbol()
    let slot2 = getRanSymbol()
    let slot3 = getRanSymbol()
    
    document.getElementById('slot1').textContent = slot1
    document.getElementById('slot2').textContent = slot2
    document.getElementById('slot3').textContent = slot3

    if (slot1 === slot2 && slot2 === slot3) {
         wallet = wallet + 10000
        document.getElementById('result').textContent = "YOU WIN"
        document.getElementById('freshWallet').innerHTML = wallet
        console.log(wallet)

    }
    else if (slot1 === slot2 || slot3 === slot1 || slot2 === slot3) {
        wallet = wallet + 6667
        document.getElementById('result').textContent = "Partial WIN"
        document.getElementById('freshWallet').innerHTML = wallet
        console.log(wallet)
    }
    else {
        wallet = wallet - 10000
        document.getElementById('result').textContent = "YOU LOSE"
        document.getElementById('freshWallet').innerHTML = wallet
        console.log(wallet)
    }
}



