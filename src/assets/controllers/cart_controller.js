import { Controller } from '@hotwired/stimulus';

export default class extends Controller {

    connect() {
        this.itemCount = 0; 
        this.updateCartDisplay();
    }

    addToCart(e) {
        e.preventDefault()
        this.itemCount++; // Incrémente la cart
        this.updateCartDisplay();
        console.log(`Produit ajouté au panier!`);
    }

    updateCartDisplay() {
        const itemCountElement = document.querySelector('.item-count') || 0;
        if (itemCountElement) {
            itemCountElement.innerText = this.itemCount;
        }
    }
}