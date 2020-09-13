var buttons = document.querySelectorAll("header input");

buttons[0].addEventListener("click", changeHeader);
buttons[1].addEventListener("mouseover", changeAdd);

function changeHeader() {
    var naglowek = document.getElementById("naglowek");
    naglowek.innerHTML = "nowy tekst <i>to jest tekst pochylony</i> a to nie";
    naglowek.style.color = "red";
    naglowek.style.fontSize = "1em";
}

function changeAdd() {
    var add = document.querySelector("header h2");
    add.innerHTML = "To jest nowe haslo reklamowe";
    add.style.color = "blue";
}