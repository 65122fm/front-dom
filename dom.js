let btn = document.getElementById("primary-button");
let card = document.getElementById("card");
let cardHeader = document.getElementById("card-header");
let cardtitle = document.getElementById("cardtitle");
let cardText = document.getElementById("cardtext");
btn.addEventListener("click", function(){
    card.className="card text-bg-success mb-3"
    btn.className="btn btn-dark"
    cardtitle.style.color= "red"
    cardHeader.style.color = "blue"


    cardtitle.innerHTML = "coders";
    cardHeader.innerText += `<span class="badge text-bg-secondary">4</span>`
    cardText.innerHTML = "HELLO WORLD, HELLO WORLD HELLO WORLD, HELLO WORLD HELLO WORLD, HELLO WORLD"
});


