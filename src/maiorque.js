import "./App.css";
var n = parseInt(prompt("insira um numero"));
function i() {
  if (10 < n) {
    return (
      <div className="i">
        <p>O numero {n} é maior que 10 </p>
      </div>
    );
  } else if (n<10) {
    return (
      <div className="i">
        <p>O numero {n} é menor que 10 </p>
      </div>
    );
  }
  else{
    return (
      <div className="i">
        <p>O numero {n} é igual que 10 </p>
      </div>);
  }
}
export default i;
