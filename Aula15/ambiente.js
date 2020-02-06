let num =[5, 8, 2, 9, 3]

//Sabendo a quantidade de vetores já existentes
num[5] = 6
//Quando não se sabe a quantidade de vetores existentes
num.push(7)

console.log(`Nosso vetor é o ${num}`)

/*Quantidade de chaves
//console.log(`O vetor tem ${num.length} posições`)

//primeira posição
//console.log(num[0]) 

//mostrar elementos em ordem crescente
//console.log(`Os elementos em ordem são ${num.sort()}`)

//Escrevendo vetores com variaveis de repetição
for( let pos = 0 ; pos < num.length; pos++ ){
    console.log(`A posição ${pos} tem o valor ${num[pos]}.`)
}

OU
*/
for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}.`)
}

let pos = num.indexOf(4)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}