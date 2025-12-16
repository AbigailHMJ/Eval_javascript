// TABLEAU DE PRODUITS
const produits = [
    { id: 1, nom: "Thé Vert Bio", prix: 12.99, image: "https://placehold.co/150?text=Thé+Vert+Bio" },
    { id: 2, nom: "Café Arabica", prix: 8.50, image: "https://placehold.co/150?text=Café+Arabica" },
    { id: 3, nom: "Infusion Menthe", prix: 5.00, image: "https://placehold.co/150?text=Infusion+Menthe" },
    { id: 4, nom: "Chocolat Chaud", prix: 15.00, image: "https://placehold.co/150?text=Chocolat+Chaud" }
];
console.table(produits)

// DEFINITION DES VARIABLES
const products = document.getElementById("produits-container");
const panier = document.getElementById("panier-liste");
const msgPanier = panier.getElementsByTagName("p")
const btnOrder = document.getElementById("btn-commander");
const email = document.getElementById("email-client");
const total = document.getElementById("montant-total");

// AFFICHAGE DES MESSAGES D'ERREUR
const emailError = document.getElementById("message-feedback");

// LISTE DU PANIER DE PRODUITS
const inCart = document.createElement("ul");

// AFFICHAGE DES CARTES PRODUITS
function productDisplay(listeProduits) {

    products.innterHTML = "";

    listeProduits.forEach(produit => {
        // Création d'une carte
        const card = document.createElement("div");
        card.classList.add("card-product");

        // Création de l'image
        const img = document.createElement("img");
        img.src = produit.image;
        img.alt = produit.nom;

        // Création du contenu texte
        const divText = document.createElement("div");

        // Ajout d'un titre pour chaque carte
        const h3 = document.createElement("h3");
        h3.textContent = produit.nom;

        // Ajout d'un bouton pour ajouter le produit au panier
        const btnAdd = document.createElement("button");
        btnAdd.textContent = "Ajouter au panier";
        btnAdd.classList.add("btn-add");
        // Ecouteur d'événement pour ajouter le produit au panier
        btnAdd.addEventListener("click", () => {

            const li = document.createElement("li");
            li.textContent = produit.nom + " - " + produit.prix + "€";
            const btnRemove = document.createElement("button");
            btnRemove.textContent = "❌";
            btnRemove.classList.add("btn-remove");
            btnRemove.addEventListener("click", () => {
                li.remove();
            });
            li.appendChild(btnRemove);

            inCart.appendChild(li);
            panier.appendChild(inCart);

            input.value = "";

            // Mise à jour de la quantité pour ne pas avoir de doublon visuel
            // Pas réussi
          

            // Mise à jour du total
            // Pas réussi non plus

        });

        // Affichage du prix de chaque produit
        const price = document.createElement("span");
        price.textContent = produit.prix + "€";
        price.classList.add("price-item");

        // Assemblage et affichage dans le DOM
        divText.appendChild(h3);
        divText.appendChild(price);
        divText.appendChild(btnAdd);

        card.appendChild(img);
        card.appendChild(divText);

        products.appendChild(card);

    });

};

// Appel de la fonction
productDisplay(produits)


// EVENEMENTS SUR LE BOUTON DE COMMANDE
btnOrder.addEventListener("click", function (event) {
    let isValid = true;
    console.log(btnOrder)

    //  Réinitialisation des messages d'erreurs
    emailError.innerText = "";
    msgPanier.innerText = "";

    // Vérification mail avec regexp
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
    if (!email.value.match(emailPattern)) {
        emailError.innerText = "Merci de renseigner une adresse email valide";
        emailError.classList.add("mail__error");
        isValid = false;
    }

    // Vérification de la présence d'au moins 1 item dans le panier | ne fonctionne pas, à revoir
    if (!inCart.value < 1) {
        msgPanier.textContent = "Merci de choisir au moins un produit";
        isValid = false;
    }

    // Empêche la validation si un des champs est incorrectement rempli
    if (!isValid) {
        event.preventDefault();
    }
});

// Ajoute la possibilité de valider l'input avec la touche entrée
email.addEventListener("keypress", (e) => {
    if (e.key === "Enter") btnOrder.click()
});

