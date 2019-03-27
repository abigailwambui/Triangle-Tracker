function triangle(){
var number1 = parseFloat(document.getElementById("firstNumber").value);
var number2 = parseFloat(document.getElementById("secondNumber").value);
var number3 = parseFloat(document.getElementById("thirdNumber").value);
var triType = document.getElementById("triType");

var correct = function(number1, number2, number3) {
	return number1 + number2> number3 && number2 + number3> number1 && number1 + number3> number2
  }
  if (correct(number1, number2, number3) && number1===number2 && number2===number3) {
		triType.textContent = "Equilateral Triangle";
  }
  else if (correct(number1, number2, number3) && number1===number2 || number2===number3 || number3===number1) {
  	triType.textContent = "Isosceles Triangle";
  }
  else if (correct(number1, number2, number3) &&
  number1!==number3 && number2!==number3 && number1!==number2) {
  	triType.textContent = "Scalene Triangle";
  }
  else {
  triType.textContent = "Not a triangle, try again!"
};
}
