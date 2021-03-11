let _inputNum01, _inputNum02, _result, _operator;

function setScr(num) {
  if (document.getElementById("toScr").value != 0) {
    document.getElementById("toScr").value += num;
  } else {
    document.getElementById("toScr").value = num;
  }
  console.log(num);
}

function reset() {
  document.getElementById("toScr").value = "0";
}

function setOperator(opr) {
  _inputNum01 = document.getElementById("toScr").value;
  document.getElementById("toScr").value = "0";
  console.log("_inputNum01 : " + _inputNum01);
  console.log("_operator : " + opr);

  _operator = opr;
}

function getResult() {
  _inputNum02 = document.getElementById("toScr").value;
  console.log("_inputNum02 : " + _inputNum02);
  if (_operator == "+") {
    _result = Number(_inputNum01) + Number(_inputNum02);
  } else if (_operator == "-") {
    _result = Number(_inputNum01) - Number(_inputNum02);
  } else if (_operator == "*") {
    _result = Number(_inputNum01) * Number(_inputNum02);
  } else if (_operator == "/") {
    _result = Number(_inputNum01) / Number(_inputNum02);
  }
  document.getElementById("toScr").value = _result;
  console.log("Result: " + _result);
}
