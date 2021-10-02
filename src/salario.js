import "./App.css";
var sa = parseFloat(prompt("Insira o salario atual: "));
var re = parseFloat(prompt("Insira o reajuste: "));

function sf() {
  return (sa * re) / 100 + sa;
}

function ss() {
    return(
  <div className="ss">
    <p>O salario é R$: {sf()}</p>
  </div>);
}

export default ss;
