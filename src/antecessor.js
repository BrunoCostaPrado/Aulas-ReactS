import "./App.css";

var a = parseInt(prompt("Digite um numero"));
function x() {
  return a - 1;
}
function ant() {
  return (
    <div className="ant">
      <p>O antecessor de {a} é :{x()}</p>
    </div>
  );
}
export default ant;
