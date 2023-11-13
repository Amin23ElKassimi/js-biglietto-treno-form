

const clalcolElement = document.querySelector('#calcol');

clalcolElement.addEventListener('click',function() {
    const km = document.getElementById("in-km").value;
    const price = km * 0.1976;
    const age = document.getElementById("in-age").value;
    let result;

    // Full Price
    if (age => 18 && age <= 65) {
        document.getElementById("price").innerHTML = `Il prezzo totale del biglietto di viaggio è di ${price.toFixed(2)} €`;
        }
        // va applicato uno sconto del 20% per i minorenni
    if(age < 18) {
            const priceUnder18 = (price * 0.82);
            document.getElementById("price").innerHTML = `Il prezzo totale del biglietto di viaggio è di ${priceUnder18.toFixed(2)} €`;
        }
    if(age > 65) {
        const priceOverver65 = (price * 0.53);
        document.getElementById("price").innerHTML = `Il prezzo totale del biglietto di viaggio è di ${priceOverver65.toFixed(2)} €`;
    }
}
);





