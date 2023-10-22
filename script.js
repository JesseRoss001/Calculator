document.addEventListener("DOMContentLoaded", function() {

let one = document.getElementById ("one")
let two = document.getElementById ("two");
let three = document.getElementById ("three");
let four = document.getElementById ("four");
let five = document.getElementById ("five");
let six = document.getElementById ("six");
let seven = document.getElementById ("seven");
let eight = document.getElementById ("eight");
let nine = document.getElementById ("nine");
let zero = document.getElementById ("zero");

let one1 =one.addEventListener('click',digitClicks(event));
let two1= two.addEventListener('click',digitClicks(event));
let three1 = three.addEventListener('click',digitClicks(event));
let four1 =four.addEventListener('click',digitClicks(event));
let five1= five.addEventListener('click',digitClicks(event));
let six1 =six.addEventListener('click',digitClicks(event));
let seven1 =seven.addEventListener('click',digitClicks(event));
let eight1 =eight.addEventListener('click',digitClicks(event));
let nine1 = nine.addEventListener('click',digitClicks(event));
let zero1 = zero.addEventListener('click',digitClicks(event));

operand1 ="";

function digitClicks(event) { 
// When i click a button i want to display it in a string .
if (one1 == true ) {
  operand1 += "1";
}
else if (two1 == true ) {
  operand1 += "2";
}

else if (three1 == true ) {
  operand1 += "3";
}

else if (four1 == true ) {
  operand1 += "4";
}

else if (five1 == true ) {
  operand1 += "5";
}

else if (six1 == true ) {
  operand1 += "6";
}

else if (seven1 == true ) {
  operand1 += "7";
}

else if (eight1 == true ) {
  operand1 += "8";
}
  
else if (nine1 == true ) {
  operand1 += "9";
}

else if (zero1 == true ) {
  operand1 += "0";
}

console.log(operand1) ;


}
});









