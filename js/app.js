$(document).ready(function() {
    var display = ""
    var operator = ""
        // button C (clear)
    $('#clear').on('click', function() {
      display = ""
      $('#screen').text("")
      console.log('it cleard');

    })

    // button divide
    $('.buttons').find('span:nth-of-type(2)').on('click', function() {
      display += "÷"
      $('#screen').text(display)
      operator = "÷"
    })

    // button multiply
    $('.buttons').find('span:nth-of-type(3)').on('click', function() {
      display += "*"
      $('#screen').text(display)
      operator = "*"

    })

    // button 7
    $('.buttons').find('span:nth-of-type(4)').on('click', function() {
      display += "7"
      $('#screen').text(display)


    })
        // button 8
    $('.buttons').find('span:nth-of-type(5)').on('click', function() {
      display += "8"
      $('#screen').text(display)

    })
        // button 9
    $('.buttons').find('span:nth-of-type(6)').on('click', function() {

      display += "9"
      $('#screen').text(display)
    })
        // button -
    $('.buttons').find('span:nth-of-type(7)').on('click', function() {

      display += "-"
      $('#screen').text(display)
      operator = "-"
    })

    // button 4
    $('.buttons').find('span:nth-of-type(8)').on('click', function() {
      display += "4"
      $('#screen').text(display)

    })
        // button 5
    $('.buttons').find('span:nth-of-type(9)').on('click', function() {
      display += "5"
      $('#screen').text(display)

    })
        // button 6
    $('.buttons').find('span:nth-of-type(10)').on('click', function() {
      display += "6"
      $('#screen').text(display)

    })
        // button +
    $('.buttons').find('span:nth-of-type(11)').on('click', function() {
      display += "+"
      $('#screen').text(display)
      operator = "+"

    })
        // button 1
    $('.buttons').find('span:nth-of-type(12)').on('click', function() {
      display += "1"
      $('#screen').text(display)

    })
        // button 2
    $('.buttons').find('span:nth-of-type(13)').on('click', function() {
      display += "2"
      $('#screen').text(display)

    })
        // button 3
    $('.buttons').find('span:nth-of-type(14)').on('click', function() {
      display += "3"
      $('#screen').text(display)

    })
        // button =
    $('.buttons').find('span:nth-of-type(15)').on('click', function() {
      display = awnser(display,operator)
      $('#screen').text(display)

    })
        // button 0
    $('#zero').on('click', function() {
      console.log(display);
      console.log(this);
      display += "0"
      $('#screen').text(display)
      console.log(display);
    })

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

      } else {
          return;
      }
      return displayAwnser
    }
  })
