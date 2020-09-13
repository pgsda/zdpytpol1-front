function getProductsList() {
    var xhttp = new XMLHttpRequest();

    xhttp.onload = function() {
        var produkty = JSON.parse(this.responseText);

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
            `;

        for(var i = 0; i < produkty.length; i++) {
            t += `
                <tr>
                    <td>${produkty[i].nazwa}</td>
                    <td><img src="${produkty[i].adres_obrazu}"></td>
                    <td>${produkty[i].cena} zł</td>
                    <td><input type="button" value="dodaj do koszyka" onclick="addToCart(${i})"></td>
                </tr>
            `;
        }

        t += "</tbody></table>";
        document.querySelector("main section").innerHTML = t;
    }

    xhttp.open("GET", "/baza_produktow.json", true);
    xhttp.send();
}

function addToCart(id) {
    var currentCart = localStorage.getItem('cart');

    if(currentCart == null) {
        currentCart = [];
    } else {
        currentCart = JSON.parse(currentCart);
    }

    currentCart.push(id);

    localStorage.setItem('cart', JSON.stringify(currentCart));
}
