// Classe ShoppingCartItem pour définir un article dans le panier
class ShoppingCartItem {
    constructor(product, quantity) {
      this.product = product;      // Référence au produit
      this.quantity = quantity;    // Quantité du produit dans le panier
    }
  
    // Méthode pour calculer le prix total de cet article (prix * quantité)
    calculateTotalPrice() {
      return this.product.price * this.quantity;
    }
  }
  