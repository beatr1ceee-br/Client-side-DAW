/* =====================================================
   EXERCIȚIUL 1 - FUNCȚIE DE CALCUL
===================================================== */


/*
    Funcția primește doi parametri:
    a și b.

    Returnează suma lor.
*/

function calculateSum(a, b) {

    return a + b;

}


/*
    Luăm elementele din HTML.
*/

const numberA =
    document.getElementById("numberA");

const numberB =
    document.getElementById("numberB");

const sumButton =
    document.getElementById("sumButton");

const sumResult =
    document.getElementById("sumResult");


/*
    Când apăsăm butonul,
    citim numerele introduse.
*/

sumButton.addEventListener("click", function () {

    const a = Number(numberA.value);

    const b = Number(numberB.value);


    /*
        Verificăm dacă au fost introduse
        ambele numere.
    */

    if (numberA.value === "" || numberB.value === "") {

        sumResult.textContent =
            "Te rog să introduci ambele numere.";

        return;

    }


    /*
        Apelăm funcția calculateSum().
    */

    const result =
        calculateSum(a, b);


    /*
        Afișăm rezultatul pe pagină.
    */

    sumResult.textContent =
        "Suma este: " + result;


    /*
        Afișăm rezultatul și în consolă.
    */

    console.log(
        "calculateSum(" + a + ", " + b + ") = " + result
    );

});


/*
    Două apeluri pentru testarea funcției
    cu valori diferite.
*/

console.log(
    "Test 1:",
    calculateSum(12, 8)
);

console.log(
    "Test 2:",
    calculateSum(25, 7)
);



/* =====================================================
   EXERCIȚIUL 2 - OBIECTUL STUDENT
===================================================== */


/*
    Creăm obiectul student.

    Proprietăți:
    - name
    - age
    - grade

    Metodă:
    - introduce()
*/

const student = {

    name: "",

    age: 0,

    grade: 0,


    introduce: function () {

        return "Sunt " +
            this.name +
            " și am " +
            this.age +
            " ani.";

    }

};


/*
    Luăm elementele din HTML.
*/

const studentName =
    document.getElementById("studentName");

const studentAge =
    document.getElementById("studentAge");

const studentGrade =
    document.getElementById("studentGrade");

const studentButton =
    document.getElementById("studentButton");

const studentResult =
    document.getElementById("studentResult");


/*
    Butonul pentru introducerea studentului.
*/

studentButton.addEventListener("click", function () {


    /*
        Verificăm dacă toate câmpurile
        au fost completate.
    */

    if (
        studentName.value === "" ||
        studentAge.value === "" ||
        studentGrade.value === ""
    ) {

        studentResult.textContent =
            "Completează toate câmpurile.";

        return;

    }


    /*
        Salvăm datele introduse
        în obiectul student.
    */

    student.name =
        studentName.value;

    student.age =
        Number(studentAge.value);

    student.grade =
        Number(studentGrade.value);


    /*
        Apelăm metoda introduce().
    */

    const message =
        student.introduce();


    /*
        Afișăm mesajul.
    */

    studentResult.textContent =
        message;


    /*
        Afișăm și în consolă.
    */

    console.log(message);

    console.log(
        "Nota studentului:",
        student.grade
    );

});


/*
    MODIFICAREA NOTEI
*/

const newGrade =
    document.getElementById("newGrade");

const gradeButton =
    document.getElementById("gradeButton");

const gradeResult =
    document.getElementById("gradeResult");


gradeButton.addEventListener("click", function () {


    /*
        Verificăm dacă datele studentului
        au fost introduse.
    */

    if (student.name === "") {

        gradeResult.textContent =
            "Introdu mai întâi datele studentului.";

        return;

    }


    /*
        Verificăm dacă a fost introdusă
        noua notă.
    */

    if (newGrade.value === "") {

        gradeResult.textContent =
            "Introdu noua notă.";

        return;

    }


    /*
        Modificăm proprietatea grade.
    */

    student.grade =
        Number(newGrade.value);


    /*
        Afișăm noua valoare.
    */

    gradeResult.textContent =
        "Noua valoare a notei este: " +
        student.grade;


    /*
        Afișăm noua valoare în consolă.
    */

    console.log(
        "Noua valoare grade:",
        student.grade
    );

});



/* =====================================================
   EXERCIȚIUL 3 - PIATRA, HÂRTIA, FOARFECA
===================================================== */


/*
    Array-ul cu cele trei variante.
*/

const choices = [
    "piatra",
    "hartia",
    "foarfeca"
];



/* =====================================================
   OBIECTUL gameScore
===================================================== */

const gameScore = {

    player: 0,

    computer: 0,

    draws: 0,


    /*
        Metoda displayScore()
        afișează scorul.
    */

    displayScore: function () {

        alert(
            "Scor actual:\n" +
            "Tu: " + this.player + "\n" +
            "Calculator: " + this.computer + "\n" +
            "Egalități: " + this.draws
        );

    }

};



/* =====================================================
   ELEMENTELE JOCULUI
===================================================== */

const playerChoiceElement =
    document.getElementById("playerChoice");

const computerChoiceElement =
    document.getElementById("computerChoice");

const roundResultElement =
    document.getElementById("roundResult");

const playerScoreElement =
    document.getElementById("playerScore");

const computerScoreElement =
    document.getElementById("computerScore");

const drawScoreElement =
    document.getElementById("drawScore");

const roundsPlayedElement =
    document.getElementById("roundsPlayed");

const leaderMessageElement =
    document.getElementById("leaderMessage");

const finalMessageElement =
    document.getElementById("finalMessage");


/*
    Numărul de runde jucate.
*/

let roundsPlayed = 0;



/* =====================================================
   ALEGEREA CALCULATORULUI
===================================================== */

function getComputerChoice() {

    const randomIndex =
        Math.floor(
            Math.random() * choices.length
        );

    return choices[randomIndex];

}



/* =====================================================
   STABILIREA CÂȘTIGĂTORULUI
===================================================== */

function determineWinner(player, computer) {


    /*
        Dacă amândoi aleg aceeași variantă,
        avem egalitate.
    */

    if (player === computer) {

        return "draw";

    }


    /*
        Regulile jocului.
    */

    if (
        (player === "piatra" &&
            computer === "foarfeca") ||

        (player === "foarfeca" &&
            computer === "hartia") ||

        (player === "hartia" &&
            computer === "piatra")
    ) {

        return "player";

    }


    /*
        Dacă nu este egalitate și
        jucătorul nu a câștigat,
        câștigă calculatorul.
    */

    return "computer";

}



/* =====================================================
   ACTUALIZAREA SCORULUI
===================================================== */

function updateScore() {

    playerScoreElement.textContent =
        gameScore.player;

    computerScoreElement.textContent =
        gameScore.computer;

    drawScoreElement.textContent =
        gameScore.draws;

    roundsPlayedElement.textContent =
        roundsPlayed;


    /*
        Verificăm cine conduce.
    */

    if (
        gameScore.player >
        gameScore.computer
    ) {

        leaderMessageElement.textContent =
            "Tu conduci scorul!";

    }

    else if (
        gameScore.computer >
        gameScore.player
    ) {

        leaderMessageElement.textContent =
            "Calculatorul conduce scorul!";

    }

    else {

        leaderMessageElement.textContent =
            "Scorul este egal.";

    }

}



/* =====================================================
   VERIFICAREA CELOR 5 VICTORII
===================================================== */

function checkFiveWins() {

    if (gameScore.player === 5) {

        finalMessageElement.textContent =
            "🎉 Ai ajuns la 5 victorii! Ai câștigat jocul!";

        return true;

    }


    if (gameScore.computer === 5) {

        finalMessageElement.textContent =
            "🤖 Calculatorul a ajuns la 5 victorii și a câștigat!";

        return true;

    }


    return false;

}



/* =====================================================
   DESFĂȘURAREA UNEI RUNDE
===================================================== */

function playRound(playerChoice) {


    /*
        Calculatorul alege aleatoriu.
    */

    const computerChoice =
        getComputerChoice();


    /*
        Stabilim câștigătorul.
    */

    const winner =
        determineWinner(
            playerChoice,
            computerChoice
        );


    /*
        Creștem numărul de runde.
    */

    roundsPlayed++;


    /*
        Afișăm alegerile.
    */

    playerChoiceElement.textContent =
        playerChoice;

    computerChoiceElement.textContent =
        computerChoice;


    /*
        Actualizăm scorul.
    */

    if (winner === "player") {

        gameScore.player++;

        roundResultElement.textContent =
            "Ai câștigat! 🎉";

    }

    else if (winner === "computer") {

        gameScore.computer++;

        roundResultElement.textContent =
            "Calculatorul a câștigat! 🤖";

    }

    else {

        gameScore.draws++;

        roundResultElement.textContent =
            "Egalitate! 🤝";

    }


    /*
        Actualizăm scorul afișat.
    */

    updateScore();


    /*
        Verificăm dacă cineva a ajuns
        la 5 victorii.
    */

    checkFiveWins();


    /*
        Afișăm scorul într-un alert.
    */

    gameScore.displayScore();

}



/* =====================================================
   BUTOANELE JOCULUI
===================================================== */

const choiceButtons =
    document.querySelectorAll(
        ".choice-button"
    );


choiceButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                /*
                    Luăm alegerea
                    jucătorului.
                */

                const playerChoice =
                    button.dataset.choice;


                /*
                    Pornim runda.
                */

                playRound(
                    playerChoice
                );

            }
        );

    }
);



/* =====================================================
   BUTONUL JOC NOU
===================================================== */

const newGameButton =
    document.getElementById(
        "newGameButton"
    );


newGameButton.addEventListener(
    "click",
    function () {


        /*
            Resetăm scorurile.
        */

        gameScore.player = 0;

        gameScore.computer = 0;

        gameScore.draws = 0;

        roundsPlayed = 0;


        /*
            Resetăm rezultatele afișate.
        */

        playerChoiceElement.textContent =
            "-";

        computerChoiceElement.textContent =
            "-";

        roundResultElement.textContent =
            "Alege Piatra, Hârtia sau Foarfeca.";

        finalMessageElement.textContent =
            "";

        leaderMessageElement.textContent =
            "Scorul este egal.";


        /*
            Actualizăm scorul.
        */

        updateScore();

    }
);