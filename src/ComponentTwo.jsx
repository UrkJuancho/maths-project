import React, { useState } from 'react';
import './ComponentTwo.css';

const ComponentTwo = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState(null);
  const [result, setResult] = useState(null);
  const [procedure, setProcedure] = useState('');

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
  };

  const calculate = (op) => {
    let res;
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (isNaN(number1) || isNaN(number2)) {
      res = 'Por favor ingresa números válidos';
      setProcedure('');
    } else {
      res = performCalculation(number1, number2, op);
      setProcedure(`${number1} ${op} ${number2}`);
    }

    setResult(res);
    setOperation(op);
  };

  const performCalculation = (number1, number2, operation) => {
    switch (operation) {
      case '+':
        return number1 + number2;
      case '-':
        return number1 - number2;
      case '*':
        return number1 * number2;
      case '/':
        return number2 !== 0 ? number1 / number2 : 'No se puede dividir por cero';
      case '^':
        return Math.pow(number1, number2);
      case '%':
        return number1 % number2;
      default:
        return 'Operación no válida';
    }
  };

  return (
    <div className="calculator-container">
      <h2 className="calculator-title">Calculadora</h2>
      <div className="calculator-inputs">
        <input
          type="text"
          value={num1}
          onChange={handleInputChange(setNum1)}
          placeholder="Primer número"
          className="input-field"
        />
        <input
          type="text"
          value={num2}
          onChange={handleInputChange(setNum2)}
          placeholder="Segundo número"
          className="input-field"
        />
      </div>
      <div className="calculator-buttons">
        <button onClick={() => calculate('+')} className="operation-button">+</button>
        <button onClick={() => calculate('-')} className="operation-button">-</button>
        <button onClick={() => calculate('*')} className="operation-button">*</button>
        <button onClick={() => calculate('/')} className="operation-button">/</button>
        <button onClick={() => calculate('^')} className="operation-button">^</button>
        <button onClick={() => calculate('%')} className="operation-button">%</button>
      </div>
      {procedure && (
        <div className="procedure-display">
          <h3>{procedure}</h3>
        </div>
      )}
      {result !== null && (
        <div className="result-display">
          <h3>Resultado: {result}</h3>
        </div>
      )}
    </div>
  );
};

export default ComponentTwo;
