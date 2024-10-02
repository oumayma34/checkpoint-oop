// Création de quelques produits
const product1 = new Product(1, 'Livre', 15);
const product2 = new Product(2, 'Ordinateur', 1000);
const product3 = new Product(3, 'Stylo', 2);

// Création d'un panier d'achat
const shoppingCart = new ShoppingCart();

// Ajout des articles au panier
shoppingCart.addItem(product1, 2); // Ajouter 2 livres
shoppingCart.addItem(product2, 1); // Ajouter 1 ordinateur
shoppingCart.addItem(product3, 5); // Ajouter 5 stylos

// Affichage des articles dans le panier
console.log("Articles dans le panier :");
shoppingCart.displayCartItems();

// Calcul du prix total du panier
console.log(`Prix total du panier : ${shoppingCart.calculateTotalCartPrice()}€`);

// Suppression d'un article (par exemple, le produit avec l'ID 1)
shoppingCart.removeItem(1);

// Affichage après suppression
console.log("Panier après suppression d'un article :");
shoppingCart.displayCartItems();

// Recalculer le prix total du panier après suppression
console.log(`Prix total du panier après suppression : ${shoppingCart.calculateTotalCartPrice()}€`);
