var letter = false;
var x = "X";
var o = "O";

function onClick (id) {
if (letter == false) {
  id.innerHTML = x;  
  letter = true;
  id.disabled = true;

}
else if (letter == true) {
  id.innerHTML = o;
    letter = false;
  id.disabled = true;
  
}
  toCheck();
  
}



function toCheck () {
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
  
  for (var i = 1; i < btn_arr.length; i++) {
    
 if(btn1.innerHTML == x && btn2.innerHTML == x && btn3.innerHTML == x) {
    btn_arr[i].disabled = true;
 
 }
  
}
}

 
  

