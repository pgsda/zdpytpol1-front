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
                </tr>
            `;
        }

        t += "</tbody></table>";
        document.querySelector("main section").innerHTML = t;
    }

    xhttp.open("GET", "/baza_produktow.json", true);
    xhttp.send();
}
