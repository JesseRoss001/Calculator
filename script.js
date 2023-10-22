document.addEventListener("DOMContentLoaded", function() {
  
  let operand1 = "";
  let operator1 = "";
  let operand2 = "";
  let display = document.getElementById("display-port");
  let operatorClicked = false;
  let answer = "";
  let ansClicked = false; // Flag for the "ans" button

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

  document.getElementById("equal").addEventListener('click', function() {
    equalClick('=');
  });
  document.getElementById("clear").addEventListener('click', function() {
    clearAll();
  });

  document.getElementById("delete").addEventListener('click',function() {
    deleteLast();
  }); 
  document.getElementById("ans").addEventListener('click', function() {
    operand1 = answer.toString();
    operator1 = "";
    operand2 = "";
    display.innerText = operand1;
    operatorClicked = false;
    ansClicked = true;
});

function clearAll () {
  operand1 ="";
  operand2 ="";
  operator1 ="";
  display.innerText="You wiped my memory How Dare YOU ?";
  operatorClicked =false ;
  ansClicked =false ; 
}

function digitClicks(digit) {

  
    if (ansClicked) {
        operand1 = "";
        ansClicked = false;
    }

    if (!operatorClicked) {
        operand1 += digit;
        display.innerText = operand1;
    } else {
        operand2 += digit;
        display.innerText = operand1 + operator1 + operand2;
    }
}

function operatorClick(operator) {
  if (operand1 !== "") {
      if (!operatorClicked) {
          operator1 = operator;
          display.innerText = operand1 + operator1;
          operatorClicked = true;
      } else {
          equalClick();
          operator1 = operator;
          operand1 = answer.toString();
          operand2 = "";
          display.innerText = operand1 + operator1;
      }
  }
  ansClicked = false;  // Reset the flag here
}


function equalClick() {
    if (operand1 && operand2) {
        let calculatedResult;
        switch (operator1) {
            case '+':
                calculatedResult = parseFloat(operand1) + parseFloat(operand2);
                break;
            case '-':
                calculatedResult = parseFloat(operand1) - parseFloat(operand2);
                break;
            case '*':
                calculatedResult = parseFloat(operand1) * parseFloat(operand2);
                break;
            case '/':
                calculatedResult = parseFloat(operand1) / parseFloat(operand2);
                break;
        }

        answer = calculatedResult;
        display.innerText = answer;

        // Reset the variables for next calculation
        operand1 = answer.toString();
        operator1 = "";
        operand2 = "";
        operatorClicked = false;
    }
}
});