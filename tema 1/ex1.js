/*Exercițiul 1 - Calculator BMI (Body Mass Index)
Luiza și Dima vor să își măsoare Body Mass Index (BMI), care se calculează după
formula: BMI = greutate / înălțime * înălțime. Greutatea se va măsura în kg, iar
înălțimea în metri.
Cerințe:
1. Atribuiți valorile greutății și înălțimii în variabile.
2. Calculați BMI cu formula de mai sus.
3. Creați o variabilă boolean care să determine dacă BMI-ul lui Dima este mai
mare decât al Luizei.
4. Afișați în consolă cine are un BMI mai mare și care sunt valorile.*/

let greutateLuiza = 52;
let inaltimeLuiza = 1.65;
let greutateDima = 75;
let inaltimeDima = 1.80;

let BMILuiza = greutateLuiza / (inaltimeLuiza * inaltimeLuiza);
console.log("Luiza are BMI: " + BMILuiza);
let BMIDima = greutateDima / (inaltimeDima * inaltimeDima);
console.log("Dima are BMI: " + BMIDima);

let compar = BMIDima > BMILuiza;
console.log(compar);

if(compar){
    console.log('Dima are BMI mai mare decat Luiza');
} else {
    console.log('Luiza are BMI mai mare decat Dima');
}