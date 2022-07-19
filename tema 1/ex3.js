/*Lui Olea îi plac numerele palindrom. Un număr este considerat palindrom dacă
răsturnatul său (citit de la dreapta la stânga) este egal cu originalul (Exemplu:
numărul 12321 este palindrom).
Cerințe:
1. Să se determine dacă o variabilă conține o valoare palindrom.
2. Afișați în consolă numărul și un mesaj dacă acesta este sau nu palindrom.*/

let n = 212;
let nOriginal = n;
let nInvers = "";

while(n != 0) {
    nInvers = nInvers + (n % 10);
    n = (n - (n % 10)) / 10;
}
console.log(nOriginal);
console.log(nInvers);

if(nOriginal == nInvers) {
    console.log("Da, este palindrom");
} else {
    console.log("Nu, nu este palindrom");
}