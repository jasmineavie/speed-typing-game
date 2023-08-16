const randomQuote = "http://api.quotable.io/random"
const quoteDisplay = document.getElementById('quote')
const quoteInputty = document.getElementById("userInput")

quoteInputty.addEventListener("input", () => {
console.log("changed")
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
}

getNextQuote()
