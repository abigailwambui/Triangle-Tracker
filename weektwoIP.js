function triangle(){
var number1 = parseFloat(prompt("firstNumber"))
var number2 = parseFloat(prompt("secondNumber"))
var number3 = parseFloat(prompt("thirdNumber"))

var correct = function(number1, number2, number3) {
	return number1 + number2> number3 && number2 + number3> number1 && number1 + number3> number2
  }
  if (correct(number1, number2, number3) && number1===number2 && number2===number3) {
  alert ('Equilateral Triangle');
  }
  else if (correct(number1, number2, number3) && number1===number2 || number2===number3 || number3===number1) {
  alert ('Isoceles Triangle');
  }
  else if (correct(number1, number2, number3) &&
  number1!==number3 && number2!==number3 && number1!==number2) {
  alert ('Scalene Triangle');
  }
  else {
  alert("Not a triangle, try again!")
};
}
