
reset();

function reset() {
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    start();

    function start() {
        $("#count").hide();
        $("#box").html("<h1 id = press>Welcome to PGA Trivia</h1>");
        $("#box").append("<h1 id = press>Press Start to Begin</h1>");
        $("#box").append("<h1 id = start>START</h1>");
        $("#start").hover(function(){
            $(this).css("background-color", "green");
            }, function(){
            $(this).css("background-color", "orange");
        });
        $("#start").click(function() {
            $("<audio></audio>").attr({
                'src':'assets/swing2.wav',
                'volume':0.4,
                'autoplay':'autoplay'
            }).appendTo("body");
            setTimeout(question1, 1500);
        });
    }
    start();

    function question1() {
        var timeLeft = 19;
        var timerId = setInterval(countdown, 1000);

        function countdown() {
            if (timeLeft == -1) {
                clearTimeout(timerId);
                unanswered++;
                $("<audio></audio>").attr({
                    'src':'assets/sadtrombone.wav',
                    'volume':0.4,
                    'autoplay':'autoplay'
                }).appendTo("body");
                $("#box").html("<h1 id = timer>Times Up!!!<h1>");
                $('#box').append("<img src = http://cdn1.alloy.com/wp-content/uploads/2018/01/justin-timberlake-1.gif>");
                $("#count").hide();
                setTimeout(question2, 8000);
            } else {
                $("#count").html("Seconds Remaining: " + timeLeft);
                timeLeft--;
            }
        }
        $("#count").show();
        $("#count").html("Seconds Remaining: 20");
        $("#box").html("<h1 id = questions>What Golfer Has Won The Most Major Titles</h1>");
        $("#box").append("<h3 id = right>Jack Nicklaus</h3>");
        $("#box").append("<h3 id = wrong1>Tiger Woods</h3>");
        $("#box").append("<h3 id = wrong2>Arnold Palmer</h3>");
        $("#box").append("<h3 id = wrong3>Phil Mickelson</h3>");
        $("#right").click(function() {
            $("#count").hide(); 
            correct++;
            $("<audio></audio>").attr({
                'src':'assets/clapping2.wav',
                'volume':0.4,
                'autoplay':'autoplay'
            }).appendTo("body");
            $("#box").html("<h1 id = correct>Right!!!<h1>")
            $("#box").append("<h1 id = answer>Jack Nicklaus Has Won 18 Major Titles, Tiger Woods 14, Arnold Palmer 7 And Phil Mickelson 5<h1>");
            $('#box').append('<img src="assets/images/Jack.jpg">');
            clearTimeout(timerId);
            $("#count").hide();
            setTimeout(question2, 4000);
        });
        $("#wrong1").add("#wrong2").add("#wrong3").click(function() {
            $("#count").hide();
            incorrect++;
            $("<audio></audio>").attr({
                'src':'assets/sadtrombone.wav',
                'volume':0.4,
                'autoplay':'autoplay'
            }).appendTo("body");
            $("#box").html("<h1 id = incorrect>Wrong!!!<h1>");
            $("#box").append("<h1 id = answer>Jack Nicklaus Has Won 18 Major Titles, Tiger Woods 14, Arnold Palmer 7 And Phil Mickelson 5<h1>");
            $('#box').append('<img src="assets/images/Jack.jpg">');
            clearTimeout(timerId);4
            $("#count").hide();
            setTimeout(question2, 4000);
        });
    } 


    function question2() {
        var timeLeft = 19;
        var timerId = setInterval(countdown, 1000);
        function countdown() {
            if (timeLeft == -1) {
                clearTimeout(timerId);
                unanswered++;
                $("<audio></audio>").attr({
                    'src':'assets/sadtrombone.wav',
                    'volume':0.4,
                    'autoplay':'autoplay'
                }).appendTo("body");
                $("#box").html("<h1 id = timer>Times Up!!!<h1>");
                $('#box').append("<img src = http://cdn1.alloy.com/wp-content/uploads/2018/01/justin-timberlake-1.gif>");
                $("#count").hide();
                setTimeout(question3, 8000);
            } else {
                $("#count").html("Seconds Remaining: " + timeLeft);
                timeLeft--;
            }
        }
        $("#count").show();
        $("#count").html("Seconds Remaining: 20");
        $("#box").html("<h1 id = questions>What Golfer Has The Most All TIme PGA Tour Event Wins</h1>");
        $("#box").append("<h3 id = wrong1>Tiger Woods</h3>");
        $("#box").append("<h3 id = right>Sam Snead</h3>");
        $("#box").append("<h3 id = wrong2>Arnold Palmer</h3>");
        $("#box").append("<h3 id = wrong3>Jack Nicklaus</h3>");
        $("#right").click(function() {
            $("#count").hide();
            correct++;
            $("<audio></audio>").attr({
                'src':'assets/clapping2.wav',
                'volume':0.4,
                'autoplay':'autoplay'
            }).appendTo("body");
            $("#box").html("<h1 id = correct>Right!!!<h1>")
            $("#box").append("<h1 id = answer>Sam Snead has won 82 events, Tiger woods, 79, Jack Nicklaus 73, and Arnold Palmer 62<h1>");
            $('#box').append('<img src="assets/images/sam-snead.jpg">');
            clearTimeout(timerId);
            $("#count").hide();
            setTimeout(question3, 4000);
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
            $("#box").append("<h1 id = answer>Sam Snead has won 82 events, Tiger woods, 79, Jack Nicklaus 73, and Arnold Palmer 62<h1>");
            $('#box').append('<img src="assets/images/sam-snead.jpg">');
            clearTimeout(timerId);
            $("#count").hide();
            setTimeout(question3, 4000);
        });
    }

    function question3() {
        var timeLeft = 19;
        var timerId = setInterval(countdown, 1000);
        function countdown() {
            if (timeLeft == -1) {
                clearTimeout(timerId);
                unanswered++;
                $("<audio></audio>").attr({
                    'src':'assets/sadtrombone.wav',
                    'volume':0.4,
                    'autoplay':'autoplay'
                }).appendTo("body");
                $("#box").html("<h1 id = timer>Times Up!!!<h1>");
                $('#box').append("<img src = http://cdn1.alloy.com/wp-content/uploads/2018/01/justin-timberlake-1.gif>");
                $("#count").hide();
                setTimeout(question4, 8000);
            } else {
                $("#count").html("Seconds Remaining: " + timeLeft);
                timeLeft--;
            }
        }
        $("#count").show();
        $("#count").html("Seconds Remaining: 20");
        $("#box").html("<h1 id = questions>Who Was The First Golfer To Win More Than One Million Dollars In A Year?</h1>");
        $("#box").append("<h3 id = wrong1>Tiger Woods</h3>");
        $("#box").append("<h3 id = right>Curtis Strange</h3>");
        $("#box").append("<h3 id = wrong2>Bobby Jones</h3>");
        $("#box").append("<h3 id = wrong3>Jack Nicklaus</h3>");
        $("#right").click(function() {
            $("#count").hide();
            correct++;
            $("<audio></audio>").attr({
                'src':'assets/clapping2.wav',
                'volume':0.4,
                'autoplay':'autoplay'
            }).appendTo("body");
            $("#box").html("<h1 id = correct>Right!!!<h1>")
            $("#box").append("<h1 id = answer>Curtis Strange Won $1 Million in 1988, Winning Four Times On Tour, Including The US Open<h1>");
            $('#box').append('<img src="assets/images/strange.jpg">');
            clearTimeout(timerId);
            $("#count").hide();
            setTimeout(question4, 4000);
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
            $("#box").append("<h1 id = answer>Curtis Strange Won $1 Million in 1988, Winning Four Times On Tour, Including The US Open<h1>");
            $('#box').append('<img src="assets/images/strange.jpg">');
            clearTimeout(timerId);
            $("#count").hide();
            setTimeout(question4, 4000);
        });
    }

    function question4() {
        var timeLeft = 19;
        var timerId = setInterval(countdown, 1000);
        function countdown() {
            if (timeLeft == -1) {
                clearTimeout(timerId);
                unanswered++;
                $("<audio></audio>").attr({
                    'src':'assets/sadtrombone.wav',
                    'volume':0.4,
                    'autoplay':'autoplay'
                }).appendTo("body");
                $("#box").html("<h1 id = timer>Times Up!!!<h1>");
                $('#box').append("<img src = http://cdn1.alloy.com/wp-content/uploads/2018/01/justin-timberlake-1.gif>");
                $("#count").hide();
                setTimeout(question5, 8000);
            } else {
                $("#count").html("Seconds Remaining: " + timeLeft);
                timeLeft--;
            }
        }
        $("#count").show();
        $("#count").html("Seconds Remaining: 20");
        $("#box").html("<h1 id = questions>John Daly Was the First PGA Tour Player To Average 190+ Yards Off The Tee For A Full Season. What Year Did This Happen? </h1>");
        $("#box").append("<h3 id = wrong1>1994</h3>");
        $("#box").append("<h3 id = wrong2>1996</h3>");
        $("#box").append("<h3 id = right>1997</h3>");
        $("#box").append("<h3 id = wrong3>1999</h3>");
        $("#right").click(function() {
            $("#count").hide();
            correct++;
            $("<audio></audio>").attr({
                'src':'assets/clapping2.wav',
                'volume':0.4,
                'autoplay':'autoplay'
            }).appendTo("body");
            $("#box").html("<h1 id = correct>Right!!!<h1>")
            $("#box").append("<h1 id = answer>In 1997 Daly Averaged 192.0 Yards Of The Tee Becoming The first Golfer To Do So For An Entire Season. In The 2016-2017 Wrap Around Season, 43 Golfers exceeded That Mark.</h1>");
            $('#box').append('<img src="assets/images/Daly.jpg">');
            clearTimeout(timerId);
            $("#count").hide();
            setTimeout(question5, 6000);
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
            $("#box").append("<h1 id = answer>In 1997 Daly Averaged 192.0 Yards Of The Tee Becoming The first Golfer To Do So For An Entire Season. In The 2016-2017 Wrap Around Season, 43 Golfers exceeded That Mark.</h1>");
            $('#box').append('<img src="assets/images/Daly.jpg">');
            clearTimeout(timerId);
            $("#count").hide();
            setTimeout(question5, 6000);
        });
    }

    function question5() {
        var timeLeft = 19;
        var timerId = setInterval(countdown, 1000);
        function countdown() {
            if (timeLeft == -1) {
                clearTimeout(timerId);
                unanswered++;
                $("<audio></audio>").attr({
                    'src':'assets/sadtrombone.wav',
                    'volume':0.4,
                    'autoplay':'autoplay'
                }).appendTo("body");
                $("#box").html("<h1 id = timer>Times Up!!!<h1>");
                $('#box').append("<img src = http://cdn1.alloy.com/wp-content/uploads/2018/01/justin-timberlake-1.gif>");
                $("#count").hide();
                setTimeout(question6, 8000);
            } else {
                $("#count").html("Seconds Remaining: " + timeLeft);
                timeLeft--;
            }
        }
        $("#count").show();
        $("#count").html("Seconds Remaining: 20");
        $("#box").html("<h1 id = questions>What Golfer Has Won The Most Tour Events In A Single Season?</h1>");
        $("#box").append("<h3 id = wrong1>Tiger Woods</h3>");
        $("#box").append("<h3 id = wrong3>Rory McIlroy</h3>");
        $("#box").append("<h3 id = wrong2>Bobby Jones</h3>");
        $("#box").append("<h3 id = right>Byron Nelson</h3>");
        $("#right").click(function() {
            $("#count").hide();
            correct++;
            $("<audio></audio>").attr({
                'src':'assets/clapping2.wav',
                'volume':0.4,
                'autoplay':'autoplay'
            }).appendTo("body");
            $("#box").html("<h1 id = correct>Right!!!<h1>")
            $("#box").append("<h1 id = answer>In 1945 Byron Nelson Won 18 Times On Tour, Including A Stretch Of 11 Straight.</h1>");
            $('#box').append('<img src="assets/images/Byron.jpg">');
            clearTimeout(timerId);
            $("#count").hide();
            setTimeout(question6, 5000);
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
            $("#box").append("<h1 id = answer>In 1945 Byron Nelson Won 18 Times On Tour, Including A Stretch Of 11 Straight.</h1>");
            $('#box').append('<img src="assets/images/Byron.jpg">');
            clearTimeout(timerId);
            $("#count").hide();
            setTimeout(question6, 5000);
        });
    }

    function question6() {
        var timeLeft = 19;
        var timerId = setInterval(countdown, 1000);
        function countdown() {
            if (timeLeft == -1) {
                clearTimeout(timerId);
                unanswered++;
                $("<audio></audio>").attr({
                    'src':'assets/sadtrombone.wav',
                    'volume':0.4,
                    'autoplay':'autoplay'
                }).appendTo("body");
                $("#box").html("<h1 id = timer>Times Up!!!<h1>");
                $('#box').append("<img src = http://cdn1.alloy.com/wp-content/uploads/2018/01/justin-timberlake-1.gif>");
                $("#count").hide();
                setTimeout(question7, 8000);
            } else {
                $("#count").html("Seconds Remaining: " + timeLeft);
                timeLeft--;
            }
        }
        $("#count").show();
        $("#count").html("Seconds Remaining: 20");
        $("#box").html("<h1 id = questions>The Players Championship Is Held At The Same Course Every Season. What Course Is It?</h1>");
        $("#box").append("<h3 id = right>TPC Sawgrass</h3>");
        $("#box").append("<h3 id = wrong1>Bay Hill</h3>");
        $("#box").append("<h3 id = wrong2>Augusta National</h3>");
        $("#box").append("<h3 id = wrong3>TPC Las Colinas</h3>");
        $("#right").click(function() {
            $("#count").hide();
            correct++;
            $("<audio></audio>").attr({
                'src':'assets/clapping2.wav',
                'volume':0.4,
                'autoplay':'autoplay'
            }).appendTo("body");
            $("#box").html("<h1 id = correct>Right!!!<h1>")
            $("#box").append("<h1 id = answer>The Players is Held Every Season At TPC Sawgrass Stadium Course In Ponte Vedra Beach Florida. It Is Also Home To The PGA Tour Headquarters.</h1>");
            $('#box').append('<img src="assets/images/sawgrass.jpg">');
            clearTimeout(timerId);
            $("#count").hide();
            setTimeout(question7, 6000);
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
            $("#box").append("<h1 id = answer>The Players is Held Every Season At TPC Sawgrass Stadium Course In Ponte Vedra Beach Florida. It Is Also Home To The PGA Tour Headquarters.</h1>");
            $('#box').append('<img src="assets/images/sawgrass.jpg">');
            clearTimeout(timerId);
            $("#count").hide();
            setTimeout(question7, 6000);
        });
    }

    function question7() {
        var timeLeft = 19;
        var timerId = setInterval(countdown, 1000);
        function countdown() {
            if (timeLeft == -1) {
                clearTimeout(timerId);
                unanswered++;
                $("<audio></audio>").attr({
                    'src':'assets/sadtrombone.wav',
                    'volume':0.4,
                    'autoplay':'autoplay'
                }).appendTo("body");
                $("#box").html("<h1 id = timer>Times Up!!!<h1>");
                $('#box').append("<img src = http://cdn1.alloy.com/wp-content/uploads/2018/01/justin-timberlake-1.gif>");
                $("#count").hide();
                setTimeout(question8, 8000);
            } else {
                $("#count").html("Seconds Remaining: " + timeLeft);
                timeLeft--;
            }
        }
        $("#count").show();
        $("#count").html("Seconds Remaining: 20");
        $("#box").html("<h1 id = questions>Who Was The First Player To Shoot a 59 In A PGA Tour Event?</h1>");
        $("#box").append("<h3 id = right>Al Geiberger</h3>");
        $("#box").append("<h3 id = wrong1>Jim Furyk</h3>");
        $("#box").append("<h3 id = wrong2>David Duval</h3>");
        $("#box").append("<h3 id = wrong3>Stuart Appelby</h3>");
        $("#right").click(function() {
            $("#count").hide();
            correct++;
            $("<audio></audio>").attr({
                'src':'assets/clapping2.wav',
                'volume':0.4,
                'autoplay':'autoplay'
            }).appendTo("body");
            $("#box").html("<h1 id = correct>Right!!!<h1>")
            $("#box").append("<h1 id = answer>While All Of These Players Have Shot A 59, Al Geiberger Shot The First In 1977 At The Memphis Open. He Had 11 Birdies And An Eagle To Card A 59 On The Par 72 Course.</h1>");
            $('#box').append('<img src="assets/images/59.jpg">');
            clearTimeout(timerId);
            $("#count").hide();
            setTimeout(question8, 6000);
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
            $("#box").append("<h1 id = answer>While All Of These Players Have Shot A 59, Al Geiberger Shot The First In 1977 At The Memphis Open. He Had 11 Birdies And An Eagle To Card A 59 On The Par 72 Course.</h1>");
            $('#box').append('<img src="assets/images/59.jpg">');
            clearTimeout(timerId);
            $("#count").hide();
            setTimeout(question8, 6000);
        });
    }

    function question8() {
        var timeLeft = 19;
        var timerId = setInterval(countdown, 1000);
        function countdown() {
            if (timeLeft == -1) {
                clearTimeout(timerId);
                unanswered++;
                $("<audio></audio>").attr({
                    'src':'assets/sadtrombone.wav',
                    'volume':0.4,
                    'autoplay':'autoplay'
                }).appendTo("body");
                $("#box").html("<h1 id = timer>Times Up!!!<h1>");
                $('#box').append("<img src = http://cdn1.alloy.com/wp-content/uploads/2018/01/justin-timberlake-1.gif>");
                $("#count").hide();
                setTimeout(totals, 8000);
            } else {
                $("#count").html("Seconds Remaining: " + timeLeft);
                timeLeft--;
            }
        }
        $("#count").show();
        $("#count").html("Seconds Remaining: 20");
        $("#box").html("<h1 id = questions>A Man Has Won A Title On The Ladies PGA Tour Once. Who Was He?</h1>");
        $("#box").append("<h3 id = wrong1>Arnold Palmer</h3>");
        $("#box").append("<h3 id = wrong3>Billy Casper</h3>");
        $("#box").append("<h3 id = wrong2>Gene Littler</h3>");
        $("#box").append("<h3 id = right>Sam Snead</h3>");
        $("#right").click(function() {
            $("#count").hide();
            correct++;
            $("<audio></audio>").attr({
                'src':'assets/clapping2.wav',
                'volume':0.4,
                'autoplay':'autoplay'
            }).appendTo("body");
            $("#box").html("<h1 id = correct>Right!!!<h1>")
            $("#box").append("<h1 id = answer>Sam Snead Beat A Field Of 14 Women To Win The 1962 Royal Poinciana Plaza Invitational Held at The Palm Beach Par-3 Course. His 5 Under 211, Beat Mickey Wright By 5 Strokes.</h1>");
            $('#box').append('<img src="assets/images/snead.jpg">');
            clearTimeout(timerId);
            $("#count").hide();
            setTimeout(totals, 6000);
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
            $("#box").append("<h1 id = answer>Sam Snead Beat A Field Of 14 Women To Win The 1962 Royal Poinciana Plaza Invitational Held at The Palm Beach Par-3 Course. His 5 Under 211, Beat Mickey Wright By 5 Strokes.</h1>");
            $('#box').append('<img src="assets/images/snead.jpg">');
            clearTimeout(timerId);
            $("#count").hide();
            setTimeout(totals, 6000);
        });
    }

    function totals() {
        $("#count").hide();
        $("#box").html("<h1 id = gameover>Game Over</h1>")
        $("#box").append("<h1 class = correct>Number Correct: " + correct + "</h1>");
        $("#box").append("<h1 class = correct>Number Incorrect: " + incorrect + "</h1>");
        $("#box").append("<h1 class = correct>Number Unanswered: " + unanswered + "</h1>");
        if (correct >= 4) {
            $("<audio></audio>").attr({
                'src':'assets/win.wav',
                'volume':0.4,
                'autoplay':'autoplay'
            }).appendTo("body");
        } else {
            $("<audio></audio>").attr({
                'src':'assets/lose.wav',
                'volume':0.4,
                'autoplay':'autoplay'
            }).appendTo("body");
        }
        setTimeout(reset, 10000);
    }

}
