document.querySelector('.calculeaza_dobanda')?.addEventListener('click', function () {
    const sumaDepozit = document.querySelector('.sumaDepozit').value;
    const perioadaDepozit = document.querySelector('.perioadaDepozit').value;
    const dobandaDepozit = document.querySelector('.dobandaDepozit').value; 

    document.querySelector('.rezultatDepozit').textContent = (`Dobanda este: ${calculareDepozit(sumaDepozit, perioadaDepozit, dobandaDepozit).toFixed(2)} lei.`);
});

function calculareDepozit(sumaDepozit, perioadaDepozit, rataDepozit) {
    return calculare(sumaDepozit, perioadaDepozit, rataDepozit);
}