/*Exercițiul 1 - Cuvinte
Avem un array care conține mai multe cuvinte. Pentru fiecare cuvânt, să se afișeze
numărul total de litere, numărul vocalelor și cel al consoanelor.*/


let arr = ["natura", "floare", "petala", "fluture"];
let nrDeVocaleArr = [];

 for(let i = 0; i < arr.length; i++) {// sa accesam fiecare element din array
    let nrDeVocale = calcualeazaNrDeVocale(arr[i]);
    nrDeVocaleArr.push(nrDeVocale);

    console.log(`Numarul de litere este ${arr[i].length}.`);
    console.log(`Numarul de vocale este egal cu: ${nrDeVocale}.`);
    console.log(`Numarul de consoane este: ${arr[i].length - nrDeVocale}.`);
}

console.log(nrDeVocaleArr);

function calcualeazaNrDeVocale(cuvant) {
    let nrDeVocale = 0;
    for(let j = 0; j < cuvant.length; j++){//accesam fiecare litera
        let litera = cuvant[j];//i este pozitia cuvantului in array, si j este pozitia literei in cuvant
        switch(litera) {
            case "a": 
            case "e": 
            case "i": 
            case "o": 
            case "u": 
                nrDeVocale++;
                break;
            
        }
    }

    return nrDeVocale;
}