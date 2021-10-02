import "./App.css";
var car = parseFloat(prompt("Insira o custo de fabricação"));
var imp = car * 45/100
var gan = car * 20/100

function ff() {
  return (car + imp + gan);
}

function cf() {
  return (
    <div className="cf">
      <p>O custo final é R$:{ff()}</p>
    </div>
  );
}
export default cf;
