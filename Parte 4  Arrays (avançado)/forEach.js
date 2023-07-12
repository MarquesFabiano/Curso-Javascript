// uma forma de iterar sobre o array

const a1 = [1,2,3,4,5,6,7,8,9];

for(let valor of a1) {  //for of
    console.log(valor);
}

a1.forEach(function(valor, indice, array){
    console.log(valor,indice, array)
});

