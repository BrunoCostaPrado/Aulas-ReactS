import "./App.css";

var a = parseInt(prompt("Digite um valor"));
var b = parseInt(prompt("Digite um valor"));

function t1() {
  return a + b;
}
function t2() {
  return a - b;
}
function t3() {
  return a * b;
}
function t4() {
  return a / b;
}
function app01() {
  return (
    <div className="App01">
      <p>A soma é: {t1()}</p>
      <p>A subtração é: {t2()}</p>
      <p>A multiplicação é: {t3()}</p>
      <p>A divisão é: {t4()}</p>
    </div>
  );
}

export default app01;
