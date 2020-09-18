function getProductsList() {
    var xhttp = new XMLHttpRequest();                   // tworzymy obiekt, ktory zarzadzac bedzie polaczeniem http

    xhttp.onload = function() {                         // podmieniamy metode onload tego obiektu. Metoda zostanie wywolana,
                                                        //      gdy requestowane dane zostana zwrocone przez serwer
        var produkty = JSON.parse(this.responseText);   // serwer zwraca dane w postaci JSON - jako string. Musimy ja zamienic na obiekt

        var t = `
            <table>
                <thead>
                    <tr>
                        <td>Nazwa</td>
                        <td>Zdjecie</td>
                        <td>Cena</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
            `;  // ta metoda tworzenia elementow htmlowych nie jest zalecana, ale jest prosta do zrozumienia
                //      tworzymy string, ktory zawiera wszystkie htmlowe znaczniki naszej tabeli. Zaczynamy od nagłówka
                //      thead. Otwieramy tez tbody.

        for(var i = 0; i < produkty.length; i++) {      // pamietamy, że zmienna produkty będzie zawierała tablicę (baza_produktow.json).
                                                        //      Iterujemy po tej tablicy
            t += `
                <tr>
                    <td>${produkty[i].nazwa}</td>
                    <td><img src="${produkty[i].adres_obrazu}"></td>
                    <td>${produkty[i].cena} zł</td>
                    <td><input type="button" value="dodaj do koszyka" onclick="addToCart(${i})"></td>
                </tr>
            `;  // dla każdego elementu z tablicy produktów tworzymy nowy wiersz, który dołączamy do już istniejącego stringu t.
                //      Taki wiersz składa się oczywiście ze znaczników tr oraz td. W komórki wpisujemy odpowiednie wartości wyczytane
                //      z tablicy produktów.
        }

        t += "</tbody></table>";                        // zamykamy tbody oraz całą tabelę
        document.querySelector("main section").innerHTML = t;   // podmieniamy zawartość znacznika <section> znajdującego się w sekcji <main>
                                                                //      na naszą tabelę. Cokolwiek wcześniej się w nim znajdowało zniknie.
                                                                //      Pojawi się jedynie tabela z produktami.
    }

    xhttp.open("GET", "/baza_produktow.json", true);    // nawiązujemy połączenie i wysyłamy rządanie
    xhttp.send();
}

function addToCart(id) {                                // funkcja dodaje przedmiot do koszyka
    var currentCart = localStorage.getItem('cart');     // koszyk (string JSON) przechowywany jest w localStorage pod kluczem "cart"

    if(currentCart == null) {                           // jeżeli w localStorage nie ma takiego klucza...
        currentCart = [];                               // uznajemy, że powinien być pustą tablicą (pusty koszyk)
    } else {                                            // jeżeli już coś w nim jest...
        currentCart = JSON.parse(currentCart);          // zamieniamy stringa na tablicę
    }

    currentCart.push(id);                               // do koszyka (tablicy) dodajemy nowy element

    localStorage.setItem('cart', JSON.stringify(currentCart));  // zapisujemy koszyk do localStorage - ale najpierw listę zmieniamy do stringa (JSON)
}
