let lista=[]
for (let i=1;i<=10;i++){
    let random = Math.random();
    random = random*100+1;
    random = Math.trunc(random);
    lista[i]=random;
}

console.log("La lista de numeros es: ")
for (let i=1;i<=10;i++){
    console.log("Lista[",i,"] : ", lista[i])
}

console.log("La inversa de la lista de numeros es: ")
for (let j=10;1<=j;j--){
    console.log("Lista[",j,"] : ", lista[j])
}