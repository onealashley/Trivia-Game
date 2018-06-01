guesses = ["<h3 id = right>Jack Nicklaus</h3>", "<h3 id = wrong1>Tiger Woods</h3>", "<h3 id = wrong2>Arnold Palmer</h3>", "<h3 id = wrong3>Phil Mickelson</h3>"];

answer = $("#box").html("<h1 id = answer>Jack Nicklaus Has Won 18 Major Titles, Tiger Woods 14, Arnold Palmer 7 And Phil Mickelson 5<h1>");

img = $("#box").append('<img src="assets/images/Jack.jpg">');

questText = $("#box").html("<h1 id = questions>What Golfer Has Won The Most Major Titles</h1>");

question();

function question (questText) {
    $("#box").append(guesses[0]);
    $("#box").append(guesses[1]);
    $("#box").append(guesses[2]);
    $("#box").append(guesses[3]); 
    
}

