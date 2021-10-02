import "./App.css";

var a = parseInt(prompt("Digite um numero"));
function x() {
  return a + 1;
}
function sus() {
  return (
    <div className="sus">
      <p>O sucessor de {{a}} é :{x()}</p>
    </div>
  );
}
export default sus;
