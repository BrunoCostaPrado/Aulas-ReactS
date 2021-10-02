import "./App.css";
var n1= parseInt(prompt("insira a nota"))
var n2= parseInt(prompt("insira a nota"))
var n3= parseInt(prompt("insira a nota"))
function n(){
    return (n1*2+n2*3+n3*5)/10
}
function nn(){
    return(
        <div classNamen='nn'>
            <p>a nota final é: {n()}</p>
        </div>
    )
}

export default nn;
