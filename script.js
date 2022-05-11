//// Login Page
var loginUserNameData = 'abcd'
let loginPasswordData = '1234'

function loginFunc() { //Login Button + check Log and Pass if its true
    let checkLoginName = document.getElementById("inptName").value; // User name input
    let checkLoginPass = document.getElementById("inptPass").value; // Password input
    if (checkLoginName == loginUserNameData && checkLoginPass == loginPasswordData) {
        alert('wellcome ' + checkLoginName + '');
        //If all Conditions are true > open next page 
        location.href = "Difficulty page.html";
    } else { // if not > inner to HTML an  Error 
        if (checkLoginName != loginUserNameData || checkLoginPass != loginPasswordData) {
            document.getElementById("errName").innerHTML = 'cant found this usre name';
            document.getElementById("errPass").innerHTML = 'try again ';
        }
    }
}
// Sudoku array eazy difficulty
let sudokuArry_eazy = [
    ['4', '3', '5', '2', '6', '9', '7', '8', '1'],
    ['6', '8', '2', '5', '7', '1', '4', '9', '3'],
    ['1', '9', '7', '8', '3', '4', '5', '6', '2'],

    ['8', '2', '6', '1', '9', '5', '3', '4', '7'],
    ['3', '7', '4', '6', '8', '2', '9', '1', '5'],
    ['9', '5', '1', '7', '4', '3', '6', '2', '8'],

    ['5', '1', '9', '3', '2', '6', '8', '7', '4'],
    ['2', '4', '8', '9', '5', '7', '1', '3', '6'],
    ['7', '6', '3', '4', '1', '8', '2', '5', '9']
];

// Sudoku array eazy difficulty for cheack
const sudokuArry_eazyCheck = [
    ['4', '3', '5', '2', '6', '9', '7', '8', '1'],
    ['6', '8', '2', '5', '7', '1', '4', '9', '3'],
    ['1', '9', '7', '8', '3', '4', '5', '6', '2'],

    ['8', '2', '6', '1', '9', '5', '3', '4', '7'],
    ['3', '7', '4', '6', '8', '2', '9', '1', '5'],
    ['9', '5', '1', '7', '4', '3', '6', '2', '8'],

    ['5', '1', '9', '3', '2', '6', '8', '7', '4'],
    ['2', '4', '8', '9', '5', '7', '1', '3', '6'],
    ['7', '6', '3', '4', '1', '8', '2', '5', '9']
];

// Sudoku array medium difficulty
let sudokuArry_medium = [
    ['1', '2', '3', '6', '7', '8', '9', '4', '5'],
    ['5', '8', '4', '2', '3', '9', '7', '6', '1'],
    ['9', '6', '7', '1', '4', '5', '3', '2', '8'],

    ['3', '7', '2', '4', '6', '1', '5', '8', '9'],
    ['6', '9', '1', '5', '8', '3', '2', '7', '4'],
    ['4', '5', '8', '7', '9', '2', '6', '1', '3'],

    ['8', '3', '6', '9', '2', '4', '1', '5', '7'],
    ['2', '1', '9', '8', '5', '7', '4', '3', '6'],
    ['7', '4', '5', '3', '1', '6', '8', '9', '2']
];

// Sudoku array medium difficulty for cheack
const sudokuArry_mediumCheck = [
    ['1', '2', '3', '6', '7', '8', '9', '4', '5'],
    ['5', '8', '4', '2', '3', '9', '7', '6', '1'],
    ['9', '6', '7', '1', '4', '5', '3', '2', '8'],

    ['3', '7', '2', '4', '6', '1', '5', '8', '9'],
    ['6', '9', '1', '5', '8', '3', '2', '7', '4'],
    ['4', '5', '8', '7', '9', '2', '6', '1', '3'],

    ['8', '3', '6', '9', '2', '4', '1', '5', '7'],
    ['2', '1', '9', '8', '5', '7', '4', '3', '6'],
    ['7', '4', '5', '3', '1', '6', '8', '9', '2']
];

// Sudoku array hard difficulty
let sudokuArry_hard = [
    ['5', '3', '4', '6', '7', '8', '9', '1', '2'],
    ['6', '7', '2', '1', '9', '5', '3', '4', '8'],
    ['1', '9', '8', '3', '4', '2', '5', '6', '7'],

    ['8', '5', '9', '7', '6', '1', '4', '2', '3'],
    ['4', '2', '6', '8', '5', '3', '7', '9', '1'],
    ['7', '1', '3', '9', '2', '4', '8', '5', '6'],

    ['9', '6', '1', '5', '3', '7', '2', '8', '4'],
    ['2', '8', '7', '4', '1', '9', '6', '3', '5'],
    ['3', '4', '5', '2', '8', '6', '1', '7', '9']
];

// Sudoku array hard difficulty for cheack
const sudokuArry_hardCheck = [
    ['5', '3', '4', '6', '7', '8', '9', '1', '2'],
    ['6', '7', '2', '1', '9', '5', '3', '4', '8'],
    ['1', '9', '8', '3', '4', '2', '5', '6', '7'],

    ['8', '5', '9', '7', '6', '1', '4', '2', '3'],
    ['4', '2', '6', '8', '5', '3', '7', '9', '1'],
    ['7', '1', '3', '9', '2', '4', '8', '5', '6'],

    ['9', '6', '1', '5', '3', '7', '2', '8', '4'],
    ['2', '8', '7', '4', '1', '9', '6', '3', '5'],
    ['3', '4', '5', '2', '8', '6', '1', '7', '9']
];

let selectedNum; // let for select numbers to place on board
let selectedCell; // let for select cell on board
let disableSelect; // let for check if already selected
let saveId; //let for all ID of "p" on board
let pelesValue; //let for save a value of "numbers" of leveler
let x_index; // var x index on board
let y_index; // var y index on board
let newSudukoBoard; // let for sudoku boeard after delete random numbers
let newCheckSudouBoard; // new sudoku borad for check 
let lifeCounter = 0; // lives counter
document.getElementById("welcome").innerHTML += ' ' + loginUserNameData; // add a "value of user name after "Welcome"




// function that builds the game board
function sudokuBoard() {
    let counterCell = 0; // counting cells on the board
    for (let i = 0; i < 81; i++) {
        let cell = document.createElement('p'); // add "p" element to all cells

        counterCell++;
        cell.id = counterCell; // every number of cell get self ID

        cell.classList.add("cell"); // add class to every cell
        if ((cell.id > 18 && cell.id < 28) || (cell.id > 45 && cell.id < 55)) {
            cell.classList.add("bottomBorder"); // adds bottom board to specific cell
        }
        if ((cell.id) % 9 == 3 || (cell.id) % 9 == 6) {
            cell.classList.add("rightBorder"); // add right border to specific cell
        }
        document.getElementById("board").appendChild(cell); //add cells to the board
        //make a bottons that start a function on specifec cell
        cell.addEventListener("click", function() {
            saveId = cell.id; // save ID of every cell
            x_index = (saveId - 1) % 9; // find a x and y index of a cell
            y_index = Math.floor((saveId - 1) / 9);

            //disabled all selected cells
            if (!disableSelect) {
                for (let i = 0; i < 81; i++) {
                    qsa(".cell")[i].classList.remove("selected");
                }
                cell.classList.add("selected");
                selectedCell = cell; // select specifed cell

                // eazy difficulty
                if (document.getElementById("btn easy").checked != false) {
                    newCheckSudouBoard = sudokuArry_eazyCheck
                    updateMove();
                    newCheckSudouBoard = '';
                }

                // medium difficulty
                if (document.getElementById("btn medium").checked != false) {
                    newCheckSudouBoard = sudokuArry_mediumCheck
                    updateMove();
                    newCheckSudouBoard = '';
                }

                // hard difficulty  
                if (document.getElementById("btn hard").checked != false) {

                    newCheckSudouBoard = sudokuArry_hardCheck
                    updateMove();
                    newCheckSudouBoard = '';
                }

                // if eazy choosen on radio input => load the easy arrey
                if (document.getElementById("btn easy").checked != false) {
                    BoardFullEndGameEazy()
                }

                // if medium choosen on radio input => load the easy arrey
                if (document.getElementById("btn medium").checked != false) {
                    BoardFullEndGameMedium()
                }

                // if hard choosen on radio input => load the easy arrey
                if (document.getElementById("btn hard").checked != false) {
                    BoardFullEndGameHard()
                }
            }
        });
    }
}
sudokuBoard()

// start game button start that function
function GameBuild() {
    document.getElementById("hidden").style.display = "none"; // hide  level radio inputs
    document.getElementById("board").style.display = "block"; // show the sudoku board div
    document.getElementById("board").style.display = " inline-flex"; // flex the sudoku board div 
    document.getElementById("numbers").style.display = "block"; // show the numbers that enter in sudoku board
    document.getElementById("lives").style.display = "flex"; // show the lives of the game
    document.getElementById("timer").style.display = "block"; // show the timer of the game
    document.getElementById("reload").style.display = "block"; //show the reload button at the buttom of the board
    document.getElementById("welcome").style.display = "none"; // hide the "Welcome" pharagraph
    document.getElementById("page_level").style.height = "160px"; // let div with "welcome" get smaller

    // Prepering the easy level game
    if (document.getElementById("btn easy").checked != false) {
        newSudukoBoard = preperGameEasy();
        placeBoardNum();

        // Timer for a eazy level
        const startingMinutes = 10; // timer starts at 10 minutes
        let time = startingMinutes * 60;
        const counterUp = document.getElementById("timer");
        setInterval(Timer, 1000);

        function Timer() {
            const minuets = Math.floor(time / 60);
            let seconds = time % 60;

            counterUp.innerHTML = `${minuets}:${seconds}`;
            time--
            if (time === -1) loseGame(); // if timer eqwal to 0 then start function "loseGame"
        }
    }


    // Prepering the medium level game
    if (document.getElementById("btn medium").checked != false) {
        newSudukoBoard = preperGameMedium();
        placeBoardNum();

        // Timer for a medium level
        const startingMinutes = 7; // timer starts at 7 minutes
        let time = startingMinutes * 60;
        const counterUp = document.getElementById("timer");
        setInterval(Timer, 1000);

        function Timer() {
            const minuets = Math.floor(time / 60);
            let seconds = time % 60;

            counterUp.innerHTML = `${minuets}:${seconds}`;
            time--
            if (time === -1) loseGame(); // if timer eqwal to 0 then start function "loseGame"
        }
    }

    // Prepering the hard level game
    if (document.getElementById("btn hard").checked != false) {
        newSudukoBoard = preperGameHard();
        placeBoardNum();

        // Timer for a hard level
        const startingMinutes = 5; // timer starts at 5 minutes
        let time = startingMinutes * 60;
        const counterUp = document.getElementById("timer");
        setInterval(Timer, 1000);

        function Timer() {
            const minuets = Math.floor(time / 60);
            let seconds = time % 60;

            counterUp.innerHTML = `${minuets}:${seconds}`;
            time--
            if (time === -1) loseGame(); // if timer eqwal to 0 then start function "loseGame"
        }
    }
}

// function that delete 25% of numbers from the board
function preperGameEasy() {
    for (let i = 0; i < sudokuArry_eazy.length; i++) {
        for (let y = 0; y <= 2; y++) {
            sudokuArry_eazy[i][Math.floor(Math.random() * 9)] = ''; // rumdom numbers
        }
    }
    return sudokuArry_eazy
}

// function that delete 50% of numbers from the board
function preperGameMedium() {
    for (let i = 0; i < sudokuArry_medium.length; i++) {
        for (let y = 0; y <= 4; y++) {
            sudokuArry_medium[i][Math.floor(Math.random() * 9)] = ''; // rumdom numbers
        }
    }
    return sudokuArry_medium
}

// function that delete 75% of numbers from the board
function preperGameHard() {
    for (let i = 0; i < sudokuArry_hard.length; i++) {
        for (let y = 0; y <= 7; y++) {
            sudokuArry_hard[i][Math.floor(Math.random() * 9)] = ''; // rumdom numbers
        }
    }
    return sudokuArry_hard
}



// function that place the numbers on the board
function placeBoardNum() {
    let idCell = 1; // ID of the cells on the board
    for (let i = 0; i < newSudukoBoard.length; i++) {
        for (let j = 0; j < newSudukoBoard[i].length; j++) {
            document.getElementById(idCell).innerText = newSudukoBoard[i][j]; // place a cell from matrix to the board
            idCell++;
        }
    }
}


// function that save the numbers from the "levelers numbers"
function startgame(clicked_id) {
    selectedNum = clicked_id;
}

// function that enter a selected number to selected cell
function updateMove() {
    if (selectedCell && selectedNum) {
        // if that make imposible to change a printed number
        if (selectedCell.innerText == "") {
            selectedCell.innerText = selectedNum;
        }

        pelesValue = selectedCell.innerText;
        newSudukoBoard[y_index][x_index] = pelesValue; // enter numbers from board to the matrix
        if (newSudukoBoard[y_index][x_index] == newCheckSudouBoard[y_index][x_index]) {
            selectedCell.classList.remove("selected");
            selectedNum = null;
        } else {
            selectedCell.classList.add("incorect"); // if the answer incorect make cell "red"
            if (lifeCounter == 0) {
                document.getElementById("heart1").style.display = "none"; // disable first live
                lifeCounter++;
            } else if (lifeCounter == 1) {
                document.getElementById("heart2").style.display = "none"; // disable second live
                lifeCounter++;
            } else if (lifeCounter == 2) {
                document.getElementById("heart3").style.display = "none"; // disable last live
                loseGame(); // function start when you lose
            }
            // function that colored the number incorect for 800 m.second
            setTimeout(function() {
                selectedCell.classList.remove("incorect"); // return defult color
                selectedCell.classList.remove("selected"); // remove "selected" from the cell
                selectedCell.innerText = ""; // make the cell value "nothing"
                selectedNum = null; // make the selected number null value
            }, 800);
        }
    }
}

function BoardFullEndGameEazy() { /// function that check if the array eqwal to array easy game

    let counterCheck = 0;
    for (i = 0; i < sudokuArry_eazyCheck.length; i++) {
        for (y = 0; y < sudokuArry_eazyCheck[i].length; y++) {

            if (sudokuArry_eazyCheck[i][y] == sudokuArry_eazy[i][y]) { /// check if the array corect
                counterCheck++
            } else {
                counterCheck = 0;
                break
            }


        }
    }
    if (counterCheck == 81) { /// check if all cells are full 
        endGame() // if full start function end game
    }

}


function BoardFullEndGameMedium() { /// function that check if the array eqwal to array medium game


    let counterCheck = 0;
    for (i = 0; i < sudokuArry_mediumCheck.length; i++) {
        for (y = 0; y < sudokuArry_mediumCheck[i].length; y++) {

            if (sudokuArry_mediumCheck[i][y] == sudokuArry_medium[i][y]) { /// check if the array corect
                counterCheck++
            } else {
                counterCheck = 0;
                return
            }

        }

    }
    if (counterCheck == 81) { /// check if all cells are full 
        endGame() //if full start function end game
    }

}



function BoardFullEndGameHard() { /// function that check if the array eqwal to array hard game

    let counterCheck = 0;
    for (i = 0; i < sudokuArry_hardCheck.length; i++) {
        for (y = 0; y < sudokuArry_hardCheck[i].length; y++) {

            if (sudokuArry_hardCheck[i][y] == sudokuArry_hard[i][y]) { /// check if the array corect
                counterCheck++
            } else {
                counterCheck = 0;
                return
            }


        }
    }
    if (counterCheck == 81) { /// check if all cells are full 
        endGame() //if full start function end game
    }

}


function endGame() { //// win function
    id("end").innerHTML = "You Won. Congratulations !"; /// note for winning
    document.getElementById("board").style.display = "none"; /// hide the boarde
    document.getElementById("numbers").style.display = "none"; //// hide the leveler
    document.getElementById("btnagain").style.display = "block"; /// show the button
    document.getElementById("lives").style.display = "none"; /// hide lives (hearts)
    document.getElementById("reload").style.display = "none"; //// hide the button
    document.getElementById("timer").style.display = "none"; /// hide timer


}

function loseGame() { /// lose function
    id("end").innerHTML = "You Lose. Try better next time."; /// note for lose
    document.getElementById("board").style.display = "none"; ///hide the board
    document.getElementById("numbers").style.display = "none"; /// hide the leveler
    document.getElementById("btnagain").style.display = "block"; /// show button
    document.getElementById("reload").style.display = "none"; /// hide button
    document.getElementById("timer").style.display = "none"; ///// hide timer
    document.getElementById("lives").style.display = "none"; /// hide lives (hearts)


}

function agian() { //// click event on play again button
    location.href = "Difficulty page.html";
}


//// get the id of elements
function id(id) {
    return document.getElementById(id);
}
/// function that remove all selected cell on the board 
function qsa(selector) {
    return document.querySelectorAll(selector);
}