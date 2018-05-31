guesses1 = ["<h3 id = right>Jack Nicklaus</h3>", "<h3 id = wrong1>Tiger Woods</h3>", "<h3 id = wrong2>Arnold Palmer</h3>", "<h3 id = wrong3>Phil Mickelson</h3>"];

function question (questText, guesses) {
    $("#box").html(questText);
    $("#box").append(guesses[0]);
    $("#box").append(guesses[1]);
    $("#box").append(guesses[2]);
    $("#box").append(guesses[3]); 
}

question("<h1 id = questions>What Golfer Has Won The Most Major Titles</h1>", guesses1);