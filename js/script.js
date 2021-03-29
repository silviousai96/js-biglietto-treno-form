//Funzionalità bottone genera
var generateButton = document.getElementById('generate-button');
generateButton.addEventListener('click', function() {
    //Operazioni da svolgere al click sul button genera:
    
    //Nome passeggero: prendo  nome e cognome del passeggero dall'input
    var userName = document.getElementById('generator-user-name').value
    

    //Offerta: leggo l'input dell'età e faccio una if
    var userAge = document.getElementById('generator-age-input').value
    var userOffer = 'Prezzo Standard';
    if (userAge == 'minorenne') {
        userOffer = 'Sconto Minorenne';
    } else if (userAge == 'over'){
        userOffer = 'Sconto Over 65';
    }
    
    //Carrozza:
    
    var vagon = getRndInteger(1, 20);
    //Codice CP:
    var codeCp = getRndInteger(90000, 99000);

    //Prezzo:
    var prezzoPerKm = 0.21;
    var userKm = parseInt( document.getElementById('generator-km-input').value ); 
    console.log(userKm);
    var finalPrice = userKm * prezzoPerKm;
    console.log(finalPrice);

    if( userAge == 'minorenne' ) {
        finalPrice = finalPrice - (finalPrice * 0.20);
    } else if( userAge =='over') {
        finalPrice = finalPrice - (finalPrice * 0.40)
    }

    //STAMPARE:
    document.getElementById('result-username').innerHTML = userName;
    document.getElementById('result-offer').innerHTML = userOffer;
    document.getElementById('result-vagon').innerHTML = vagon;
    document.getElementById('result-code').innerHTML = codeCp;
    document.getElementById('result-price').innerHTML = finalPrice;

});


//funzione per generare numeri random (min e max compresi)
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }