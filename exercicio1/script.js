const num = Number(prompt("Digite um número aqui"));

if (num % 2 === 0) {
    if (num % 3 === 0) {
        console.log(`Esse numero ${num} e divisível por 2 ou por 3 `)
    } else if (!(num % 3 === 0)) {
        console.log(`Esse numero ${num} e divisível por 2 ou por 3 `)
    }
} else if (!(num % 2 === 0)) {
    if (num % 3 === 0) {
        console.log(`Esse numero ${num} e divisível por 2 ou por 3 `)
    } else {
        console.log(`Esse numero ${num} não e divisível por 2 ou por 3  `)
    }
}

/*2.*/ if(num %2 === 0 || num %3 === 0) {
    console.log("numero é divisível por 2 ou 3")
} else {
    console.log("numero não é divisível por 2 ou 3")
}

