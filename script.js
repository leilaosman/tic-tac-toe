var letter = false;
var x = "X";
var o = "O";
var winner;
var player1_score = 0;
var player2_score = 0;
let score_span1 = document.createElement('span');
score_span1.id = 'player1-score';
let score_span2 = document.createElement('span');
score_span2.id = 'player2-score';
let myDiv = document.createElement('div');
let p1_player1 = document.createElement('p');
let p2_player2 = document.createElement('p');
myDiv.id = "score_card";
p1_player1.id = "p1_score";
p2_player2.id = "p2_score";
var player1;
var player2;
let Reset_Button = document.createElement('button');
Reset_Button.id = 'reset_button';
var moves = 0;

$(document).ready(function() {

    $('form').on('submit', function(e) {

        e.preventDefault();
        $('form').hide();
        player1 = document.getElementById('fname1').value;
        player2 = document.getElementById('fname2').value;


        document.body.appendChild(myDiv);
        myDiv.appendChild(p1_player1);
        p1_player1.innerHTML = "Player X : " + player1 + " " + "------------" + " ";

        myDiv.appendChild(p2_player2);
        p2_player2.innerHTML = "Player O: " + player2 + " " + "------------" + " ";

        myDiv.appendChild(Reset_Button);
        Reset_Button.innerHTML = "Play Again";



    });
});


$(document).on('click', '#reset_button', function() {

    var btn1 = document.getElementById('button1');
    var btn2 = document.getElementById('button2');
    var btn3 = document.getElementById('button3');
    var btn4 = document.getElementById('button4');
    var btn5 = document.getElementById('button5');
    var btn6 = document.getElementById('button6');
    var btn7 = document.getElementById('button7');
    var btn8 = document.getElementById('button8');
    var btn9 = document.getElementById('button9');

    var btn_arr = [btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9];

    for (var i = 0; i < btn_arr.length; i++) {
        btn_arr[i].innerHTML = "<br>";
        btn_arr[i].disabled = false;


    }
    letterTurn();

});


function onClick(id) {
    if (letter == false) {
        id.innerHTML = x;
        letter = true;
        id.disabled = true;
        moves++;

    } else if (letter == true) {
        id.innerHTML = o;
        letter = false;
        id.disabled = true;
        moves++;

    }
    toCheck();

}

function toCheck() {
    var btn1 = document.getElementById('button1');
    var btn2 = document.getElementById('button2');
    var btn3 = document.getElementById('button3');
    var btn4 = document.getElementById('button4');
    var btn5 = document.getElementById('button5');
    var btn6 = document.getElementById('button6');
    var btn7 = document.getElementById('button7');
    var btn8 = document.getElementById('button8');
    var btn9 = document.getElementById('button9');

    var btn_arr = [btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9];

    for (var i = 0; i < btn_arr.length; i++) {

        if (btn1.innerHTML == x && btn2.innerHTML == x && btn3.innerHTML == x) {
            btn_arr[i].disabled = true;
            winner = x;

        } else if (btn4.innerHTML == x && btn5.innerHTML == x && btn6.innerHTML == x) {
            btn_arr[i].disabled = true;
            winner = x;
        } else if (btn7.innerHTML == x && btn8.innerHTML == x && btn9.innerHTML == x) {
            btn_arr[i].disabled = true;
            winner = x;
        } else if (btn1.innerHTML == x && btn4.innerHTML == x && btn7.innerHTML == x) {
            btn_arr[i].disabled = true;
            winner = x;
        } else if (btn2.innerHTML == x && btn5.innerHTML == x && btn8.innerHTML == x) {
            btn_arr[i].disabled = true;
            winner = x;
        } else if (btn3.innerHTML == x && btn6.innerHTML == x && btn9.innerHTML == x) {
            btn_arr[i].disabled = true;
            winner = x;
        } else if (btn1.innerHTML == x && btn5.innerHTML == x && btn9.innerHTML == x) {
            btn_arr[i].disabled = true;
            winner = x;
        } else if (btn3.innerHTML == x && btn5.innerHTML == x && btn7.innerHTML == x) {
            btn_arr[i].disabled = true;
            winner = x;
        }

        //circle outcomes
        else if (btn1.innerHTML == o && btn2.innerHTML == o && btn3.innerHTML == o) {
            btn_arr[i].disabled = true;
            winner = o;
        } else if (btn4.innerHTML == o && btn5.innerHTML == o && btn6.innerHTML == o) {
            btn_arr[i].disabled = true;
            winner = o;
        } else if (btn7.innerHTML == o && btn8.innerHTML == o && btn9.innerHTML == o) {
            btn_arr[i].disabled = true;
            winner = o;
        } else if (btn1.innerHTML == o && btn4.innerHTML == o && btn7.innerHTML == o) {
            btn_arr[i].disabled = true;
            winner = o;
        } else if (btn2.innerHTML == o && btn5.innerHTML == o && btn8.innerHTML == o) {
            btn_arr[i].disabled = true;
            winner = o;
        } else if (btn3.innerHTML == o && btn6.innerHTML == o && btn9.innerHTML == o) {
            btn_arr[i].disabled = true;
            winner = o;
        } else if (btn1.innerHTML == o && btn5.innerHTML == o && btn9.innerHTML == o) {
            btn_arr[i].disabled = true;
            winner = o;
        } else if (btn3.innerHTML == o && btn5.innerHTML == o && btn7.innerHTML == o) {
            btn_arr[i].disabled = true;
            winner = o;
        }

    }

    displayWinner();
}

function displayWinner() {

    if (winner == x) {
        alert(player1 + " is the glorious winner!! Press the play again button for another round!")
        winner = null;
        player1_score++;
        $("#p1_score").append(score_span1);
        score_span1.innerHTML = player1_score;
        moves = 0;
    } else if (winner == o) {
        winner = null;
        alert(player2 + " is the glorious winner!! Press the play again button for another round!")
        player2_score++;
        $("#p2_score").append(score_span2);
        score_span2.innerHTML = player2_score;
        moves = 0;

    } else if (moves == 9) {
        moves = 0;
        alert("CATS! Play another round, better luck next time!");

    }
}

function letterTurn() {
    if (letter == false) {
        alert(x + " will be going first");
    } else if (letter == true) {
        alert(o + " will be going first");

    }
}
