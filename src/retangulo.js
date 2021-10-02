import "./App.css";

var a = parseInt(prompt("Insira a base"));
var b = parseInt(prompt("Insira a altura"));
function c() {
  return a * b;
}
function area() {
  return (
    <div className="area">
      <p>A area do retangulo é : {c()}cm² </p>
    </div>
  );
}
export default area;
