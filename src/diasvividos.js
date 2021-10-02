import "./App.css";

var a = parseInt(prompt("Digite sua idade"));
var b = parseInt(prompt("Digite os meses "));
var c = parseInt(prompt("Digite os dias"));
function x() {
  return a * 365;
}
function y() {
  return b * 30;
}
function z() {
  return c;
}
function me() {
  return (
    <div className="me">
      <p>Seus dias vividos são :{x() + y() + z()}</p>
    </div>
  );
}
export default me;
