const quotes = [
    {
        quote: "He that can have patience can have what he will.",
        author: "Benjamin Franklin"
    },
    {
        quote: "You can't deny laughter; when it comes, it plops down in your favorite chair and stays as long as it wants.",
        author: "Stephen King"
    },
    {
        quote: "For myself I am an optimist - it does not seem to be much use being anything else.",
        author: "Sir Winston Churchill"
    },
    {
        quote: "A good plan, violently executed now, is better than a perfect plan next week.",
        author: "George S. Patton"
    },
    {
        quote: "Self-confidence is the first requisite to great undertakings.",
        author: "Samuel Johnson"
    },
    {
        quote: "Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy",
        author: "Norman Vincent Peale"
    }

]

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");


const randomQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = randomQuotes.quote;
author.innerText = randomQuotes.author;
