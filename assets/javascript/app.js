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
        $(".card-body").html("<h3 class='card-title'>"+questionsArray[trivia.currentQuestion].question+"</h3>"); //questions[trivia.currentQuestion].question
        var answersToDisplay = questionsArray[trivia.currentQuestion].answers
        answersToDisplay.forEach(function(elem){
            $(".card-body").append("<button class='btn btn-primary'>"+elem+"</button>")
        })
    }

}
$(document).ready(function(){

    $("#start").on("click", function(){
        $(".card-body").empty();
        trivia.questionTrigger();
    })

})