// Descrizione:
// Scrivere un programma che chieda all’utente:
// Il numero di chilometri da percorrere
// Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// il prezzo del biglietto è definito in base ai km (0.1976 € al km)
// va applicato uno sconto del 17.65% per i minorenni
// va applicato uno sconto del 53.27% per gli over 65.






const clalcolElement = document.querySelector('#calcol');

clalcolElement.addEventListener('click',function() {
    
    // Il numero di chilometri da percorrere
    const km = document.getElementById("in-km").value;
    // Età del passeggero
    const age = document.getElementById("in-age").value;
    // il prezzo del biglietto è definito in base ai km (0.1976 € al km)
    const price = km * 0.1976;
    
       // Full Price
    if (age => 18 && age <= 65) {
        document.getElementById("price").innerHTML = `Il prezzo totale del biglietto di viaggio è di ${price.toFixed(2)} €`;
        }
    // va applicato uno sconto del 17.65% per i minorenni
    if(age < 18) {
            const priceUnder18 = (price * 0.8235);
            document.getElementById("price").innerHTML = `Il prezzo totale del biglietto di viaggio è di ${priceUnder18.toFixed(2)} €`;
        }
    // va applicato uno sconto del 53.27% per gli over 65.
    if(age > 65) {
        const priceOverver65 = (price * 0.4673);
        document.getElementById("price").innerHTML = `Il prezzo totale del biglietto di viaggio è di ${priceOverver65.toFixed(2)} €`;
    }

}
);


    //     // va applicato uno sconto del 17.65% per i minorenni
    // if(age = '1') {
    //         const priceUnder18 = (price * 0.8235);
    //         document.getElementById("price").innerHTML = `Il prezzo totale del biglietto di viaggio è di ${priceUnder18.toFixed(2)} €`;
    //     }
    // // Full Price
    // if (age = '2') {
    //     document.getElementById("price").innerHTML = `Il prezzo totale del biglietto di viaggio è di ${price.toFixed(2)} €`;
    //     }

    // // va applicato uno sconto del 53.27% per gli over 65.
    // if(age = '3') {
    //     const priceOverver65 = (price * 0.4673);
    //     document.getElementById("price").innerHTML = `Il prezzo totale del biglietto di viaggio è di ${priceOverver65.toFixed(2)} €`;
    // }



 