import { useEffect, useState } from "react";
import "./Calculator.css";

function Calculator(props) {
  const [getResult, setResult] = useState(0);
  const [wasFirst, setwasFirst] = useState(true);
  const [expression, setExpression] = useState("0");
  const [a, setFirst] = useState(0);
  const [b, setSecond] = useState(0);
  const [c, setOperator] = useState("");
  const [lastButton, setLastButton] = useState(false);
  const [firstButton, setFirstButton] = useState(true);

  useEffect(() => {
    props.display(expression);
  }, [props, expression]);

  function handleOperands(val) {
    if (firstButton === true) {
      setFirst(val);
      setExpression("");
      setFirstButton(false);
    }
    if (lastButton === true) {
      setExpression("");
      setLastButton(false);
    }
    if (wasFirst === true) {
      setFirst(a * 10 + val);
      setExpression((prevExpression) => prevExpression + String(val));
    } else {
      setSecond(b * 10 + val);
      setExpression((prevExpression) => prevExpression + String(val));
    }
  }
  function makeDefault() {
    setExpression("0");
    setFirstButton(true);
    setOperator("");
    setFirst(0);
    setSecond(0);
    setResult(0);
    setwasFirst(true);
  }
  function handleOperators(val) {
    setOperator(val);
    setExpression(String(val));
    setwasFirst(false);
    setLastButton(true);
  }
  function handleResult() {
    let res;
    let operator = c;
    switch (operator) {
      case "+":
        res = a + b;
        break;
      case "-":
        res = a - b;
        break;
      case "x":
        res = a * b;
        break;
      case "/":
        res = a / b;
        break;
      case "%":
        res = a % b;
        break;
      default:
        break;
    }
    setResult(res);
    setwasFirst(true);
    setExpression(res);
  }
  return (
    <div className="calculator_wrapper">
      <div className="flex_item" id="top" onClick={makeDefault}>
        AC
      </div>
      <div className="flex_item" id="top" onClick={() => handleOperators("+")}>
        +
      </div>
      <div className="flex_item" id="top" onClick={() => handleOperators("/")}>
        /
      </div>
      <div
        className="flex_item"
        id="right"
        onClick={() => handleOperators("%")}
      >
        %
      </div>
      <div className="flex_item" onClick={() => handleOperands(7)}>
        7
      </div>
      <div className="flex_item" onClick={() => handleOperands(8)}>
        8
      </div>
      <div className="flex_item" onClick={() => handleOperands(9)}>
        9
      </div>
      <div
        className="flex_item"
        id="right"
        onClick={() => handleOperators("x")}
      >
        x
      </div>
      <div className="flex_item" onClick={() => handleOperands(4)}>
        4
      </div>
      <div className="flex_item" onClick={() => handleOperands(5)}>
        5
      </div>
      <div className="flex_item" onClick={() => handleOperands(6)}>
        6
      </div>
      <div
        className="flex_item"
        id="right"
        onClick={() => handleOperators("-")}
      >
        -
      </div>
      <div className="flex_item" onClick={() => handleOperands(1)}>
        1
      </div>
      <div className="flex_item" onClick={() => handleOperands(2)}>
        2
      </div>
      <div className="flex_item" onClick={() => handleOperands(3)}>
        3
      </div>
      <div
        className="flex_item"
        id="right"
        onClick={() => handleOperators("+")}
      >
        +
      </div>
      <div className="flex_item" id="zero" onClick={() => handleOperands(0)}>
        0
      </div>
      <div className="flex_item" id="right" onClick={handleResult}>
        =
      </div>
    </div>
  );
}

export default Calculator;
