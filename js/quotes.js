const quotes = [
 {quote : "The frog in the well knows nothing of the great ocean.",},
 {quote : "Reading makes a full man.",},
 {quote : "The old forget; the young don’t know."},
 {quote : "Luck comes to those who look after it."},
 {quote : "The last drop makes the cup run over."}, 
 {quote : "Life admits not of delays."}, 
 {quote : "A bad attempt is a half of success."}, 
 {quote : "Knowledge in youth is wisdom in age."}, 
 {quote : "Behind the clouds is the sun still shining."}, 
 {quote : "All that glitters is not gold."},    
]

const quote = document.querySelector("#quote span:first-child");

const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuotes.quote;