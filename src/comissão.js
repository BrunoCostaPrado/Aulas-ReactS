import "./App.css";
var sal = parseFloat(prompt("Insira o salario"));
var com = parseFloat(prompt("Insira os carros vendidos"));
let cm = sal * 5/100

function ff(){
    return sal + cm + (com *100)
}

function fd(){
    return(
    <div className='fd'>
        <p> O salario é R$:{ff()}</p>
    </div>);
}


export default fd;