// quando clicco il button Calculate mi deve calcolare il prezzo del burger in base agli ingredienti che gli aggiungo
// buttonCalculate -> salviamo nella variabile il button
var buttonCalculate = document.getElementById('calculate');
buttonCalculate.addEventListener('click', function() {

    // initialBurgerPrice -> Prezzo iniziale del burger, senza aggiunta di ingredienti
    var initialBurgerPrice = 50;

    // burgerIngredients -> prendere ogni input con la stessa classe
    var burgerIngredients = document.getElementsByClassName('burger-ingredient');

    for( var i = 0; i < burgerIngredients.length; i++) {
        
        var singleIngredients = burgerIngredients[i];

        if(singleIngredients.checked == true) {

            // priceSingleIngredient -> prendiamo il valore di ogni singolo ingrediente e lo convertiamo in un numero
            var priceSingleIngredient = parseInt(singleIngredients.value);

            // sommiamo il prezzo iniziale del burger con il valore degli ingredienti selezionati
            initialBurgerPrice += priceSingleIngredient;
        }
    }

    // discountCode -> 
    var discountCode = document.getElementById('discount-input').value;
    console.log(discountCode);

    // Creiamo un array contentente tutti i codici validi per ottenere un sconto
    var listCodeDiscount = ['56789GHIJK', '13579ACEGI', '24680BDFHJ'];
 
    
    // se il codice da noi inserito è uguale ad uno dei codici nell'array allora ottieni il 25% di sconto
    // altrimenti se il codice è sbagliato risulterà codice sbagliato
    // altrimenti stampo il prezzo normale
    
    
     
    for( var j = 0; j < listCodeDiscount.length; j++) {

        var thisCode = listCodeDiscount[j];
        
        if (discountCode == thisCode) {
            initialBurgerPrice = initialBurgerPrice - (initialBurgerPrice * 0.25);
        }
       
    }

    // nameBurger -> salviamo le informzioni riguardanti il nome del burger
    // 
    // se l'input del burger risulta vuoto allora non puoi sapere il prezzo
    // altrimenti stampo il prezzo del tuo burger
    var nameBurger = document.getElementById('username-input');
 
    if(nameBurger.value ==  '') {
        alert('Inserisci il nome del tuo Burger!');
    } else {
        document.getElementById('price').innerHTML = initialBurgerPrice + '$';
    }
});