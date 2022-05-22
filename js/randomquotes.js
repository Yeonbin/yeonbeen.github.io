quotes = [
    {
        quote: "Fear cannot be without hope nor hope without fear.",
        author: "Baruch Spinoza",
    },
    {
        quote: "If little else, the brain is an educational toy.",
        author: "Tom Robbins",
    },
    {
        quote: "A pound of pluck is worth a ton of luck.",
        author: "James A. Garfield",
    },
    {
        quote: "Rarely do great beauty and great virtue dwell together.",
        author: "Petrarch",
    },
    {
        quote: "Everyone has his day and some days last longer than others.",
        author: "Sir Winston Churchill", 
    },
    {
        quote: "Try not to become a man of success but rather to become a man of value.",
        author: "Albert Einstein",
    },
    {
        quote: "We must not say every mistake is a foolish one.",
        author: "Cicero",
    },
    {
        quote: "No great man ever complains of want of opportunity.",
        author: "Ralph Waldo Emerson",
    },
    {
        quote: "Life is a risk.",
        author: "Diane Frolov",
    },
    {
        quote: "I think the prime reason for existence, for living in this world, is discovery.",
        author: "James Dean",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
