//Event listener for each button that will begin the perspective functions
document.querySelector('#button').addEventListener('click', spinSlotsMinBet)
document.querySelector('#button2').addEventListener('click', spinSlotsMaxBet)
//Starting Balance of wallet
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




//function to get random number, then multiply that by length of array 
// then round the value down and return the amount inside symbolsArray
function getRanSymbol() {

    return symbolsArray[Math.floor(Math.random() * symbolsArray.length)]
}
// this function that begins after clicking "bet min"
function spinSlotsMinBet() {
    //randomize function stored inside each variable
    let slot1 = getRanSymbol()
    let slot2 = getRanSymbol()
    let slot3 = getRanSymbol()


    //setting the contents of the element for each id and randomizing it
    document.querySelector('#slot1').textContent = slot1
    document.querySelector('#slot2').textContent = slot2
    document.querySelector('#slot3').textContent = slot3

    //conditional checking to see if content in the variables are equal in value and type
    //and if so adding 1000 to the wallet variable
    if (slot1 === slot2 && slot2 === slot3) {

        wallet = wallet + 1000
        document.getElementById('result').innerText = "YOU WIN"
        document.getElementById('freshWallet').innerText = wallet
            
    }//if at least 2 items match adding 667 to the wallet variable
    else if (slot1 === slot2 || slot3 === slot1 || slot2 === slot3) {
  
        wallet = wallet + 667
        document.getElementById('result').textContent = "Partial WIN"
        document.getElementById('freshWallet').innerHTML = wallet
        
        
    }
    else {//if none match then subtract 1000 from the wallet

        wallet = wallet - 1000
        document.getElementById('result').textContent = "YOU LOSE"
        document.getElementById('freshWallet').innerHTML = wallet
       
    }
    
}
//This function does the exact same thing just betting more 
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



