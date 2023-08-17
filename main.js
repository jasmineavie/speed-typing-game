const randomQuote = "http://api.quotable.io/random"
const quoteDisplay = document.getElementById('quote')
const quoteInputty = document.getElementById("userInput")
const timerElement = document.getElementById("timer")

quoteInputty.addEventListener("input", () => {
const arrayQuote = arrayquoteDisplayElement.querySelectorAll("span")
const arrayValue = quoteInputElement.value.split('')


let correct = true

arrayQuote.forEach((characterSpan, index ) => {
    const character = arrayValue[index]
    if (character == null) {
        characterSpan.classList.remove('correct')
        characterSpan.classList.remove('incorrect')
        correct = false
    }
    else if (character === characterSpan.innerText) {
        characterSpan.classList.add('correct')
        characterSpan.classList.remove('incorrect')
    } else {
        characterSpan.classList.remove('correct')
        characterSpan.classList.add('incorrect')
        correct = false
    }
})
if(correct) getNextQuote()
})



function getQuote() {
    return fetch(randomQuote)
    .then(response => response.json())
    .then(data => data.content)
}


async function getNextQuote() {
    const quote = await getQuote()

    quoteDisplay.innerHTML = ''
    quote.split("").forEach(character => {
        const characterSpan = document.createElement("span")
       // characterSpan.classList.add("incorrect")
        characterSpan.innerText = character
        quoteDisplay.appendChild(characterSpan)
    })
    quoteInputty.value = null
    startTimer()
}
let startTime
function startTimer() {
    timerElement.innerText = 0
    startTime = new Date()
    setInterval(() => {
       timerElement.innerText = getTimerTime()


    }, 1000)
}

function getTimerTime() {
    return Math.floor((new Date() - startTime) / 1000)
}

getNextQuote()
