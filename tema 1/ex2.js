/*Carolina vrea să aibă un calculator de tips pentru că atunci când iese la
restaurant vrea să știe cât trebuie să plătească în funcție de totalul de pe bon. În
localurile în care merge ea, valoarea tips este de 15%, dacă nota este între 50 și
800 lei, și de 20% dacă nota este peste 800 lei.
Cerințe:
1. Calculați valoarea pentru tips în funcție de totalul notei.
2. Afișați în consolă cât este valoarea notei, cea pentru tips și totalul de plătit.*/

let valoareaNotei = 800;
let tips = 0;

if(valoareaNotei >= 50 && valoareaNotei <= 800) {
    tips = valoareaNotei * 0.15;
} else if (valoareaNotei > 800) {
    tips = valoareaNotei * 0.2;
}

console.log("Valoarea notei: " + valoareaNotei);
console.log("Tips: " + tips);
console.log("Total: ", valoareaNotei + tips);