// TABLEAU DE PRODUITS
const produits = [
    { id: 1, nom: "Thé Vert Bio", prix: 12.99, image: "https://placehold.co/150" },
    { id: 2, nom: "Café Arabica", prix: 8.50, image: "https://placehold.co/150" },
    { id: 3, nom: "Infusion Menthe", prix: 5.00, image: "https://placehold.co/150" },
    { id: 4, nom: "Chocolat Chaud", prix: 15.00, image: "https://placehold.co/150" }
];
console.table(produits)

// DEFINITION DES VARIABLES
const products = document.getElementById("produits-container");
const panier = document.getElementById("panier-liste")


// AFFICHAGE DES CARTES PRODUITS
function productDisplay(listeProduits) {

    products.innterHTML = "";

    listeProduits.forEach(produit => {
        // Création d'une carte
        const card = document.createElement("div");
        card.classList.add("card-product");

        const spanId = document.createElement("span");
        spanId.textContent = produit.id;

        // Création de l'image
        const img = document.createElement("img");
        img.src = produit.image;
        img.alt = produit.nom;

        // Création du contenu texte
        const divText = document.createElement("div");

        // Ajout d'un titre pour chaque carte
        const h3 = document.createElement("h3");
        h3.textContent = produit.nom;

        // Affichage du prix de chaque produit
        const price = document.createElement("p");
        price.textContent = produit.prix + "€";

        // Assemblage et affichage dans le DOM
        divText.appendChild(h3);
        divText.appendChild(price);

        card.appendChild(img);
        card.appendChild(divText);

        products.appendChild(card);

    });

};

productDisplay(produits)
