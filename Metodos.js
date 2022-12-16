var num;

function saludar(){
    console.log("Hola mundo")
}
function CalcularDoble(num){
    let res1=num*2;
    return res1;
}
function Triplicar(num){
    let res2=num*3;
    return res2;
}
console.log("Llamada a la funcion saludar")
saludar()
let x=prompt(`Ingrese un valor para x`)

console.log("Llamada a la funcion Calcular doble")
console.log("El doble de",x,"es:",CalcularDoble(x))
console.log("Llamada a la funcion Triplicar")
console.log("El nuevo valor de",x,"es:",Triplicar(x))