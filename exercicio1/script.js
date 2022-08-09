const num = Number(prompt("Digite um número aqui"));

/*1.*/ if(num %2 === 0) {
    if(num %3 === 0) 
    console.log("numero é divisível por 2 ou 3")
} else {
    console.log("numero não é divisível por 2 ou 3")
}

/*2.*/ if(num %2 === 0 || num %3 === 0) {
    console.log(" numer é divisível por 2 ou 3")
} else {
    console.log("numero não é divisível por 2 ou 3")
}

