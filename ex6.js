/*Exercițiul 3 - Rudy
Carolina trebuie să îl ducă pe Rudy la veterinar și nu vrea să îi mai explice
doctorului tot istoricul lui. Ea vrea să creeze o evidență electronică pe care să o
poată accesa ușor.
Cerințe:
1. Creați un obiect care să conțină informații despre Rudy: rasă, culoarea
părului, anul nașterii, vaccinuri și dacă are pașaport sau nu. Creați o funcție
care afișează toate aceste informații într-un format care să fie citit ușor de
către doctor.
2. Creați o funcție în obiect care calculează vârsta lui Rudy și afișați-o în
mesaj.
3. Rudy a primit recent un vaccin pentru hepatită canină. Adăugați acest
vaccin în istoricul medical.
4. Afișați un mesaj corespunzător dacă Rudy are voie sau nu să iasă din
Moldova (dacă are pașaport).
5. Carolina a uitat când i-a făcut celelalte vaccinuri lui Rudy și acum știe că
trebuie să pună în istoric data fiecărui vaccin. Actualizați obiectul pentru a
conține această informație și creați o funcție care afișează istoricul
vaccinării. Dacă nu există niciun vaccin, să se afișeze “Rudy nu a făcut
niciun vaccin până acum”.*/

let datePersonaleRudy = {
  nume: "Rudy",
  rasa: "pudel",
  culoareaParului: "argintiu",
  anulNasterii: 2018,
  vaccine: [],
  arePasaport: false,
 varstaLuiRudy: function() {
      this.varsta = 2022 - this.anulNasterii;
      return 2022 - this.anulNasterii;
  },
  afiseaza: function() {
      console.log(`${this.nume} ${this.arePasaport?"":'nu'} are pasaport si ${this.arePasaport?"":'nu'} poate iesi din Moldova.`);
  },
  afiseazaIstoricVaccinare: function () {
      if(this.vaccine.length == 0){ 
          console.log("Rudy nu a facut niciun vaccin pana acum");
      } else {
          for(let i = 0; i < this.vaccine.length; i++) {
              console.log(`Vaccina: ${this.vaccine[i].numeleVaccinei} la data: ${this.vaccine[i].data}`);
          }
      }
  }
}


console.log(datePersonaleRudy);
datePersonaleRudy.varstaLuiRudy();
console.log(datePersonaleRudy.varsta);
datePersonaleRudy.afiseaza();
datePersonaleRudy.afiseazaIstoricVaccinare();
datePersonaleRudy.vaccine.push({numeleVaccinei: "hepatita canina", data: "05.07.2022"});
datePersonaleRudy.afiseazaIstoricVaccinare();