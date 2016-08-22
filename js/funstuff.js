var display = "10÷5"
var operator = "÷"

function firstNum(display, operator) {
    if ((operator) == "+") {
        var plusIndex = display.indexOf("+")
        var result1 = display.substring(0, plusIndex)
        return result1
    } else if (operator == "-") {
        var minusIndex = display.indexOf("-")
        var result1 = display.substring(0, minusIndex)
        return result1
    } else if (operator == "*") {
        var multiIndex = display.indexOf("*")
        var result1 = display.substring(0, multiIndex)
        return result1
    } else if (operator == "÷") {
        var divideIndex = display.indexOf("÷")
        var result1 = display.substring(0, divideIndex)
        return result1
    } else {
        return;
    }
}

function secondNum(display, operator) {
    if (operator == "+") {
        var plusIndex = display.indexOf("+")
        var result2 = display.substring(plusIndex+1, (display.length))
        return result2
    } else if (operator == "-") {
        var minusIndex = display.indexOf("-")
        var result2 = display.substring(minusIndex+1, (display.length))
        return result2
    } else if (operator == "*") {
        var multiIndex = display.indexOf("*")
        var result2 = display.substring(multiIndex+1, (display.length))
        return result2
    } else if (operator == "÷") {
        var divideIndex = display.indexOf("÷")
        var result2 = display.substring(divideIndex+1, (display.length))
        return result2
    } else {
        return;
    }
}


function awnser(display, operator){

  var displayAwnser;

  if (operator == "+") {
    displayAwnser =  (parseFloat(firstNum(display,operator)))+(parseFloat(secondNum(display,operator)))
  } else if (operator == "-") {
    displayAwnser =  (parseFloat(firstNum(display,operator)))-(parseFloat(secondNum(display,operator)))
  } else if (operator == "*") {
    displayAwnser =  (parseFloat(firstNum(display,operator)))*(parseFloat(secondNum(display,operator)))

  } else if (operator == "÷") {
    displayAwnser =  ((parseFloat(firstNum(display,operator)))/(parseFloat(secondNum(display,operator))))
    console.log(displayAwnser);

  } else {
      return;
  }
  return Math.floor(displayAwnser)
}
console.log(awnser(display, operator));
// console.log(displayAwnser);
console.log(firstNum(display,operator));
console.log(secondNum(display,operator));
