// By NexFord
console.log("By NexFord ");

let formatError = "Wrong format";

function toAscii(ascii) {
  var full="";
  for (var i = 0; i < ascii.length; i++) {
    full+=ascii.charCodeAt(i).toString();
  }
  return full;
}

function convert(ascii) {
  document.getElementById('result').style.fontSize = "10em";
  document.getElementById('result').innerHTML="Wait ...";
  ascii = document.getElementById('convi').value.toString();

  if (ascii.length == 0) {
    document.getElementById('result').innerHTML="Empty field";
    console.error("Empty field !");
    return;
  }
  var number=toAscii(ascii);

  if (number < 100) {
    document.getElementById('result').innerHTML="Wrong input";
    console.error("The number is too small !");
    return;
  }

  if (number.length%3 == 2) {
    document.getElementById('result').innerHTML=formatError;
    console.error("Not the right length !");
    return;
  }

  if (number.length%3 == 1 && (number[0] == "8" || number[0] == "9")) {
    document.getElementById('result').innerHTML=formatError;
    console.error("The operator must be between 0 and 7, not " + number[0]);
    return;
  }

  var convertNumber;
  var operator = 0;
  if (number.length%3 == 1) {
    operator = number[0];
    number = number.replace(/^./, "");
  }

  if (number.length%3 == 0) {
    var numberSize = number.length/3;
    convertNumber = ((Math.trunc(operator/4)*-2+1)*Math.pow(number.substring(0, numberSize), 3) + (Math.trunc(operator%4/2)*-2+1)*Math.pow(number.substring(numberSize, 2*numberSize), 3) + (Math.trunc(operator%2)*-2+1)*Math.pow(number.substring(2*numberSize, 3*numberSize), 3));
    var calc = (Math.trunc(operator/4)*-2+1)+"*"+number.substring(0, numberSize)+"³" +"+"+ (Math.trunc(operator%4/2)*-2+1)+"*"+number.substring(numberSize, 2*numberSize)+"³" +"+"+ (Math.trunc(operator%2)*-2+1)+"*"+number.substring(2*numberSize, 3*numberSize)+"³";
    var convertNumberFormat = new Intl.NumberFormat().format(convertNumber);
    console.log(convertNumberFormat+" = "+calc);
  }

  if (convertNumberFormat.length > 26) {
    document.getElementById('result').style.fontSize = "6em";
  }
  if (convertNumberFormat.length > 42) {
    document.getElementById('result').style.fontSize = "5em";
  }
  if (convertNumberFormat.length > 50) {
    document.getElementById('result').style.fontSize = "4em";
  }
  if (convertNumberFormat.length > 62) {
    document.getElementById('result').style.fontSize = "3em";
  }
  if (convertNumberFormat.length > 86) {
    document.getElementById('result').style.fontSize = "2em";
  }
  if (convertNumberFormat.length > 130) {
    document.getElementById('result').style.fontSize = "1em";
  }
  if (convertNumberFormat.length > 261) {
    document.getElementById('result').style.fontSize = "0.75em";
  }
  if (convertNumberFormat.length > 350) {
    document.getElementById('result').style.fontSize = "0.7em";
  }
  if (convertNumberFormat.length > 374) {
    document.getElementById('result').style.fontSize = "0.65em";
  }
  if (convertNumberFormat.length > 404) {
    document.getElementById('result').style.fontSize = "0.64em";
  }
  if (convertNumberFormat.length > 410) {
    document.getElementById('result').style.fontSize = "0.6em";
  }
  document.getElementById('result').innerHTML=convertNumberFormat;
}
