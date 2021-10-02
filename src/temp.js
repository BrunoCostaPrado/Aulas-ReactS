import "./App.css";
var f = parseInt(prompt("insira a temperatura"));
function cc(){
    return ((f-32)/9)*5
}

function Cf(){
    return(
        <div className='cf'>
            <p>A temperatura em graus Celcius é {cc()}ºC</p>
        </div>
    )
}


export default Cf;