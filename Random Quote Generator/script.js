
let btn = document.getElementById("btn");
let output = document.getElementById("output");
let quotes = [
"Believe you can and you're halfway there. - Theodore Roosevelt",
"The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
"It does not matter how slowly you go as long as you do not stop. - Confucius",
"Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
"Don't watch the clock; do what it does. Keep going. - Sam Levenson",
"You miss 100% of the shots you don't take. - Wayne Gretzky",
"Keep your eyes on the stars, and your feet on the ground. - Theodore Roosevelt",
"You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
"The only way to do great work is to love what you do. - Steve Jobs",
"Happiness can be found even in the darkest of times if one only remembers to turn on the light. - Albus Dumbledore (J.K. Rowling)"
];

btn.addEventListener('click', function(){
var randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
output.innerHTML = randomQuote;
})
