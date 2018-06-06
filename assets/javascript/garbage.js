var correct = 0;
var incorrect = 0;
var unanswered = 0;

var questions = [
    
    question1 = {
        quesText: "<h1 id = questions>What Golfer Has Won The Most Major Titles</h1>",
        options: ["<h3 id = right class = 0>Jack Nicklaus</h3>", "<h3 id = wrong1>Tiger Woods</h3>", "<h3 id = wrong1>Tiger Woods</h3>", "<h3 id = wrong3>Phil Mickelson</h3>"],
        answer: "<h1 id = answer>Jack Nicklaus Has Won 18 Major Titles, Tiger Woods 14, Arnold Palmer 7 And Phil Mickelson 5<h1>",
        image: '<img src="assets/images/Jack.jpg">',
    },

    // question2 = {
    //     quesText: "<h1 id = questions>What Golfer Has The Most All TIme PGA Tour Event Wins</h1>",
    //     options: ["<h3 id = wrong1>Tiger Woods</h3>", "<h3 id = right class = 1>Sam Snead</h3>", "<h3 id = wrong2>Arnold Palmer</h3>", "<h3 id = wrong3>Jack Nicklaus</h3>"],
    //     answer: "<h1 id = answer>Sam Snead has won 82 events, Tiger woods, 79, Jack Nicklaus 73, and Arnold Palmer 62<h1>",
    //     image: '<img src="assets/images/sam-snead.jpg">',
    // }
]

for (i = 0; i < questions.length; i++){
    $("#count").show();
    console.log(questions[i]);
    $("#count").html("Seconds Remaining: 20");
    $("#box").html(questions[i].quesText);
    $("#box").append(questions[i].options[1]);
    $("#box").append(questions[i].options[0]);
    $("#box").append(questions[i].options[2]);
    $("#box").append(questions[i].options[3]);
    $("#right").click(function(e) {
        console.log(questions[i]);
        console.log(e);
        console.log(e.target.className);
        $("#count").hide();
        correct++;
        $("<audio></audio>").attr({
            'src':'assets/clapping2.wav',
            'volume':0.4,
            'autoplay':'autoplay'
        }).appendTo("body");
        $("#box").html("<h1 id = correct>Right!!!<h1>");
        console.log(i);
        console.log(questions[e.target.className].answer);
        $("#box").append(questions[e.target.className].answer);
        $('#box').append(questions[i].image);
        setTimeout(4000);
    });
    $("#wrong1").add("#wrong2").add("#wrong3").click(function() {
        $("#count").hide();
        incorrect++;
        $("<audio></audio>").attr({
            'src':'assets/sadtrombone.wav',
            'volume':0.4,
            'autoplay':'autoplay'
        }).appendTo("body");
        $("#box").html("<h1 id = incorrect>Wrong!!!<h1>")
        $("#box").append(questions[i].answer);
        $('#box').append(questions[i].image);
        setTimeout(4000);
    });
}

