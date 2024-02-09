//changer la couleur du coeur
coeur = document.querySelectorAll(".grand");
console.log(coeur);
for (let i = 0; i < coeur.length; i++) {
  coeur[i].addEventListener("click", function color() {
    if(coeur[i].style.color !== "red" ){
    coeur[i].style.color = "red";}
    else {coeur[i].style.color = "blue";}
  });
}
//en cliquent sur la bouton j'achète
var img_prod = document.querySelectorAll(".card-img-top");

var nom_prod = document.querySelectorAll(".card-title");

var prix_prod = document.querySelectorAll(".card-text");

var achete = document.querySelectorAll(".btn-primary");
var carte = document.querySelectorAll(".card");

var panier = document.querySelector(".achter");
console.log(panier);
var table = [];
for (let i = 0; i < achete.length; i++) {
  achete[i].addEventListener("click", function addpanier() {
    var newcarte = document.createElement("div");
    newcarte.className = "n_carte";
    newcarte.style.width = 950;
    var img = document.createElement("img");
    img.src = img_prod[i].src;
    var nom = document.createElement("h6");
    nom.innerHTML = nom_prod[i].innerHTML;
    var prix = document.createElement("h4");
    prix.innerHTML = prix_prod[i].innerHTML;
    btn = document.createElement("button");
    btn.innerHTML = "supprimer";
    btn.id = "delete";
    btn.className = "btn btn-primary";
    newcarte.appendChild(img);
    newcarte.appendChild(nom);
    newcarte.appendChild(prix);
    newcarte.appendChild(btn);
    console.log(newcarte);
    const panierlocalstorge = `<div id="cartepanier"><img id="img" src=${img_prod[i].src}><h6>${nom_prod[i].innerHTML}</h6><h4 id="prix">${prix_prod[i].innerHTML}
    </h4><button id="delete" class="btn btn-primary">supprimer</button>&nbsp&nbsp<button id="btn1" class="btn btn-primary">+</button><span id="qte">1</span><button id="btn2" class="btn btn-primary">-</button>`;

    table.push(panierlocalstorge);
    localStorage.setItem("table", JSON.stringify(table));
  });
}
const productspanier = JSON.parse(localStorage.getItem("table"));
console.log(productspanier);
for (let i = 0; i < productspanier.length; i++) {
  panier.innerHTML += productspanier[i];
  console.log(panier);
}
var cardimage = document.querySelectorAll("#img");
for (let i = 0; i < cardimage.length; i++) {
  cardimage[i].style.width = "100px";
  cardimage[i].style.height = "100px";
}
panier.style.display = "flex";
panier.style.flexDirection = "column";

//incrementer et deincrementer

var btnIncrement = document.querySelectorAll("#btn1");
var btnDecrement = document.querySelectorAll("#btn2");
var qte = document.querySelectorAll("#qte");
console.log(qte);
for (let i=0;i<qte.length;i++){
  btnIncrement[i].addEventListener("click", function () {

    qte[i].innerHTML++;
    total_price()
  });
  btnDecrement[i].addEventListener("click", function () {
    if (qte[i].innerHTML>1){
    qte[i].innerHTML--;
    total_price()}
  });
}
var cartepanier=document.querySelectorAll('#cartepanier')
var btnsupp=document.querySelectorAll('#delete');
for (let i=0;i<btnsupp.length;i++){
  btnsupp[i].addEventListener("click",function supp(){
    cartepanier[i].remove();
  })
}

var total=document.querySelector('#soustotal')
var prix=document.querySelectorAll('#prix')
function total_price(){
var x=0
for (let i=0;i<qte.length;i++){
x+=Number(qte[i].innerHTML)*Number(prix[i].innerHTML)

}
total.innerHTML=x
return total}
total_price()