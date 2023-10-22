document.addEventListener("DOMContentLoaded", function() {
  let operand1 = "";
  let operator1 = "";
  let display = document.getElementById("display-port");
  let operatorClicked = false;

  // Add click event listeners for digits
  document.getElementById("one").addEventListener('click', function() {
    digitClicks('1');
  });
  document.getElementById("two").addEventListener('click', function() {
    digitClicks('2');
  });
  document.getElementById("three").addEventListener('click', function() {
    digitClicks('3');
  });
  document.getElementById("four").addEventListener('click', function() {
    digitClicks('4');
  });
  document.getElementById("five").addEventListener('click', function() {
    digitClicks('5');
  });
  document.getElementById("six").addEventListener('click', function() {
    digitClicks('6');
  });
  document.getElementById("seven").addEventListener('click', function() {
    digitClicks('7');
  });
  document.getElementById("eight").addEventListener('click', function() {
    digitClicks('8');
  });
  document.getElementById("nine").addEventListener('click', function() {
    digitClicks('9');
  });
  document.getElementById("zero").addEventListener('click', function() {
    digitClicks('0');
  });

  // Add click event listeners for operators
  document.getElementById("plus").addEventListener('click', function() {
    operatorClick('+');
  });
  document.getElementById("minus").addEventListener('click', function() {
    operatorClick('-');
  });
  document.getElementById("times").addEventListener('click', function() {
    operatorClick('*');
  });
  document.getElementById("divide").addEventListener('click', function() {
    operatorClick('/');
  });

  // Handle digit clicks and update the display
  function digitClicks(digit) {
    if (!operatorClicked) {
      operand1 += digit;
      display.innerText = operand1;
    }
  }

  // Handle operator clicks
  function operatorClick(operator) {
    if (operand1 !== "") {
      operator1 = operand1 + operator;
      display.innerText = operator1;
      operatorClicked = true;
  
    }
  }
});









