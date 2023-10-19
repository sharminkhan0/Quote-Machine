const quotes = [
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        text: "Life is what happens when you're busy making other plans.",
        author: "John Lennon"
    },
    {
        text: "In three words I can sum up everything I've learned about life: it goes on.",
        author: "Robert Frost"
    }
];

function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

function setRandomQuote() {
    const quote = getRandomQuote();
    document.getElementById("text").textContent = quote.text;
    document.getElementById("author").textContent = `- ${quote.author}`;
}

document.getElementById("new-quote").addEventListener("click", setRandomQuote);

setRandomQuote(); // Initial quote on page load

