var questionsArray = [{
    question: "What Nintendo character is one of the most iconic ones in the videogame world?",
    answers: ["Spyro", "Mario", "Ryu"],
    correctAnswer: "Mario",
    image: "https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2017/09/05/15045993109717.jpg"
}, {
    question: "What was the name given to the final enemy in Resident Evil 3?",
    answers: ["Lazarus", "Sinister", "Nemesis"],
    correctAnswer: "Nemesis",
    image: "https://as.com/meristation/imagenes/2019/07/14/noticias/1563093384_652058_1563093563_noticia_normal.jpg"
}, {
    question: "What's the name of the game in which the protagonists (a bear and a bird) play together to beat a witch?",
    answers: ["Banjo-Kazooie", "Banjo-Loonie", "Diddy Kong"],
    correctAnswer: "Banjo-Kazooie",
    image: "https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_7/SI_N64_BanjoKazooie_image1600w.jpg"
},{
    question: "In which horror videogame the protagonist uses a radio to detect the presence of nearby monsters?",
    answers: ["Alone in the Dark", "Fatal Frame", "Silent Hill"],
    correctAnswer: "Silent Hill",
    image: "https://vignette.wikia.nocookie.net/silent/images/f/fd/AirWindow.gif/revision/latest?cb=20150828165538"
}, {
    question: "What's the name of the game with a marsupial protagonist that smashes boxes to get rewards?",
    answers: ["Smash-Bros", "Crash Bandicoot", "Chrono Trigger"],
    correctAnswer: "Crash Bandicoot",
    image: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2016/12/crash-bandicoot.png?itok=dA6y4iIe"
}, {
    question: "Which pro skater had his own videogames?",
    answers: ["Bob Burnquist", "Bam Margera", "Tony Hawk"],
    correctAnswer: "Tony Hawk",
    image: "https://thebrag.com/wp-content/uploads/2017/05/Tony-Hawk%E2%80%99s-Pro-Skater-2-a.jpg"
}]

var trivia = {
    currentQuestion:0,
    correctAnswers:0,
    wrongAnswers:0,
    unansweredQuestions:0,
    seconds: 10,
    questionTrigger: function(){
        timer = setInterval(trivia.countdown,1000);
        $(".card-body").html("<h2>Tiempo restante <span id='secondsLeft'>10</span></h2>");
        $(".card-body").append("<h3 class='card-title'>"+questionsArray[trivia.currentQuestion].question+"</h3>"); //questions[trivia.currentQuestion].question
        var answersToDisplay = questionsArray[trivia.currentQuestion].answers
        answersToDisplay.forEach(function(elem){
            $(".card-body").append("<button class='btn btn-primary answer-button'>"+elem+"</button>")
        })
    },
    countdown: function(){
        trivia.seconds--;
        $("#secondsLeft").html(trivia.seconds);
        if(trivia.seconds<=0){
            console.log("Se acabó el tiempo");
            trivia.timeUp();
        }
    },
    timeUp: function(){
        clearInterval(timer);
        trivia.unansweredQuestions++;
        $(".card-body").html("<h2>Time's up</h2>");
        $(".card-body").append("<h3>The correct answer was "+questionsArray[trivia.currentQuestion].correctAnswer+"</h3>")
        $("#placeholderImage").attr("src",questionsArray[trivia.currentQuestion].image);
        if(trivia.currentQuestion==questionsArray.length-1){
            setTimeout(trivia.results,3*1000);
        } else {
            setTimeout(trivia.nextQuestion,3*1000);
        }
    },
    nextQuestion: function(){
        trivia.seconds = 10;
        $("#secondsLeft").html(trivia.seconds);
        trivia.currentQuestion++;
        $("#placeholderImage").attr("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSaLIHxcSmAn2yIApQK5x2gC9YzTVqtnTdk0QlvYhshbqSBHClU")
        trivia.questionTrigger();
    },
    correctGuess: function(){
        console.log("Great!");
        clearInterval(timer);
        trivia.correctAnswers++;
        $(".card-body").html("<h2>Correct Answer</h2>");
        $("#placeholderImage").attr("src",questionsArray[trivia.currentQuestion].image);
        if(trivia.currentQuestion==questionsArray.length-1){
            setTimeout(trivia.results,3*1000);
        } else {
            setTimeout(trivia.nextQuestion,3*1000);
        }

    },
    wrongGuess: function(){
        console.log("Bad");
        clearInterval(timer);
        trivia.wrongAnswers++;
        $(".card-body").html("<h2>Wrong Answer</h2>");
        $("#placeholderImage").attr("src",questionsArray[trivia.currentQuestion].image);
        $("card-body").append("<h3>The correct answer was "+questionsArray[trivia.currentQuestion].correctAnswer+"</h3>");
        if(trivia.currentQuestion==questionsArray.length-1){
            setTimeout(trivia.results,3*1000);
        } else {
            setTimeout(trivia.nextQuestion,3*1000);
        }

    },
    results: function(){
        $("#placeholderImage").attr("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSaLIHxcSmAn2yIApQK5x2gC9YzTVqtnTdk0QlvYhshbqSBHClU");
        $(".card-body").html("<h2>Done!</h2>");
        $(".card-body").append("<h3>Here are your results");
        $(".card-body").append("<h3>Correct Answers: "+trivia.correctAnswers+"</h3>");
        $(".card-body").append("<h3>Wrong Answers: "+trivia.wrongAnswers+"</h3>")
        $(".card-body").append("<h3>Unanswered questions: "+trivia.unansweredQuestions+"</h3>")
        $(".card-body").append("<button id='reset' class='btn btn-primary'>Try Again?</button>")
    },
    click: function(btnClick){
        clearInterval(timer);
        console.log(btnClick.target.innerText);
        if(btnClick.target.innerText===questionsArray[trivia.currentQuestion].correctAnswer){
            console.log("Correct answer!");
            console.log(trivia.correctAnswers);
            trivia.correctGuess();
        } else {
            console.log("Wrong answer");
            trivia.wrongGuess();
            console.log(trivia.wrongAnswers)
        }

    },
    reset: function(){
        trivia.currentQuestion=0;
        trivia.seconds=10;
        trivia.correctAnswers=0;
        trivia.wrongAnswers=0;
        trivia.unansweredQuestions=0;
        $(".card-body").empty();
        trivia.questionTrigger();
    }

}
$(document).ready(function(){

    $("#start").on("click", function(){
        $(".card-body").empty();
        trivia.questionTrigger();
    })

    $(document).on('click','.answer-button', function(btnClick){
        trivia.click(btnClick);
    })

    $(document).on('click', '#reset', function(){
        trivia.reset();
    })

})