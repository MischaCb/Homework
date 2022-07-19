/*Exercițiul 2 - Tablouri palindrom
Olea s-a entuziasmat și mai tare cu numerele palindrom și vrea să țină o evidență
cu acestea. Ea s-a gândit să facă o listă cu toate numerele palindrom până la
10000 ca să îi fie mai ușor să le găsească mai târziu.
Cerințe:
1. Folosiți implementarea anterioară pentru palindrom și includeți-o într-o
funcție
2. Folosiți funcția pentru a verifica numerele care sunt palindrom
3. Creați un array care să conțină numerele palindrom.
4. Afișați numerele din array în consolă.*/

let palindrom = (n) => {//functia are scopul de a verifica daca n este palindrom
  let nOriginal = n;
  let nInvers = "";
  
  while(n != 0) {
      nInvers = nInvers + (n % 10);
      n = (n - (n % 10)) / 10;
  }
  if(nOriginal == nInvers) {
     return true;
  } else {
     return false;
  }
};

let m = [];//cream o variabila m de tip array care este gol
for(i = 0; i < 10000; i++) {//scopul for loop-ului este de a itera/repeta un bloc de cod
  if(palindrom(i) === true) {//conditie
      m.push(i);//adaugam in array elementele care respecta conditia 
  }
}
for(let i = 0; i < m.length; i++){
  console.log(m[i]);
}