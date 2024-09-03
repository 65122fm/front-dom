let btn = document.getElementById("primary-button");
let card = document.getElementById("card");
let cardHeader = document.getElementById("card-header");
let cardtitle = document.getElementById("cardtitle");
let cardText = document.getElementById("cardtext");
let btnReset = document.getElementById("reset-button")
btn.addEventListener("click", function(){
    card.className="card text-bg-success mb-3"
    btn.className="btn btn-dark"
    cardtitle.style.color= "red"
    cardHeader.style.color = "blue"
    cardtitle.innerHTML = "coders";
    cardHeader.innerText += `<span class="badge text-bg-secondary">4</span>`
    cardText.innerHTML = "HELLO WORLD, HELLO WORLD HELLO WORLD, HELLO WORLD HELLO WORLD, HELLO WORLD"
});
btnReset.addEventListener("click", function(){
    card.className="card text-bg-primary mb-3"
    btn.className="btn btn-primary"
    cardtitle.style.color= "white"
    cardtitle.innerHTML = "Primary card title";
    cardHeader.style.color = "blue"
    cardText.innerHTML = "Some quick example text to build on the card title and make up the bulk of the card's content."
    cardHeader.innerText = "Header"
    cardHeader.style.color = "white"
});


