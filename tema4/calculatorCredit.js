document.querySelector('.calculeaza_credit')?.addEventListener('click', function () {
    const imprumut = document.querySelector('.imprumut').value;
    const perioadaPlata = document.querySelector('.perioadaPlata').value;
    const rataDobanzii = document.querySelector('.rataDobanzii').value;

    document.querySelector('.rezultatDobanda').textContent = (`Dobanda este: ${calculareCredit(imprumut, perioadaPlata, rataDobanzii).toFixed(2)} lei.`);
});

function calculareCredit(imprumut, perioadaPlata, rataDobanzii) {
    return calculare(imprumut, perioadaPlata, rataDobanzii);
}