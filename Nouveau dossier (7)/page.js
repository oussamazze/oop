class Product {
    constructor(id, name, price) {
      this.id = id; // Identifiant unique du produit
      this.name = name; // Nom du produit
      this.price = price; // Prix du produit
    }
  }
  class ShoppingCartItem {
    constructor(product, quantity) {
      this.product = product; // Instance de Product
      this.quantity = quantity; // Quantité du produit
    }
  
    getTotalPrice() {
      return this.product.price * this.quantity; // Calcul du prix total
    }
  }
  class ShoppingCart {
    constructor() {
      this.items = []; // Tableau pour stocker les éléments du panier
    }
  
    addItem(product, quantity) {
      // Vérifier si le produit est déjà dans le panier
      const existingItem = this.items.find(item => item.product.id === product.id);
      if (existingItem) {
        // Si oui, augmenter la quantité
        existingItem.quantity += quantity;
      } else {
        // Sinon, ajouter un nouvel élément
        this.items.push(new ShoppingCartItem(product, quantity));
      }
    }
  
    removeItem(productId) {
      // Filtrer les éléments pour supprimer celui avec l'id correspondant
      this.items = this.items.filter(item => item.product.id !== productId);
    }
  
    getTotalItems() {
      // Retourner le total des quantités dans le panier
      return this.items.reduce((total, item) => total + item.quantity, 0);
    }
  
    getTotalPrice() {
      // Retourner le total des prix des éléments dans le panier
      return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }
  
    displayItems() {
      // Afficher chaque élément du panier dans la console
      console.log("Contenu du panier :");
      this.items.forEach(item => {
        console.log(
          `${item.product.name} - Prix : ${item.product.price}€ - Quantité : ${item.quantity} - Total : ${item.getTotalPrice()}€`
        );
      });
    }
  }
  const product1 = new Product(1, "Ordinateur", 1000);
  const product2 = new Product(2, "Clavier", 50);
  const product3 = new Product(3, "Souris", 25);
  
  // Créer un panier d'achat
  const cart = new ShoppingCart();
  
  // Ajouter des éléments au panier
  cart.addItem(product1, 1); // Ajouter 1 ordinateur
  cart.addItem(product2, 2); // Ajouter 2 claviers
  cart.addItem(product3, 3); // Ajouter 3 souris
  
  // Afficher le contenu du panier
  cart.displayItems();
  
  // Afficher le total des éléments et le prix total
  console.log("Total des articles :", cart.getTotalItems()); // 6
  console.log("Prix total :", cart.getTotalPrice(), "€"); // 1175 €
  
  // Supprimer un produit
  cart.removeItem(2); // Supprimer le clavier
  
  // Afficher le panier après suppression
  cart.displayItems();
  console.log("Prix total après suppression :", cart.getTotalPrice(), "€");  