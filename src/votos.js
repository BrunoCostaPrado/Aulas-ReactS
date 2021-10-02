import "./App.css";

var E = parseInt(prompt("Digite o total de eleitores"));
var VV = parseInt(prompt("Digite o total de votos validos"));
var VB = parseInt(prompt("Digite o total de votos em brancos"));
var VN = parseInt(prompt("Digite o total de votos nulos"));

function x() {
  return (VV * 100) / E;
}
function y() {
  return (VB * 100) / E;
}
function z() {
  return (VN * 100) / E;
}
function go() {
  return (
    <div className="go">
      <p>
        A porcentagem de votos validos é: {x()+"%"} com um total de {VV} votos
      </p>
      <p>
        A porcentagem de votos em branco é: {y()+"%"}, com um total de {VB} votos
      </p>
      <p>
        A porcentagem de votos nulos é: {z()+"%"}, com um total de {VN} votos
      </p>
    </div>
  );
}
export default go;
