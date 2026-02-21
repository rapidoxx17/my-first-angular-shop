import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class ProductsComponent {

  cartCount = 0;
  totalPrice = 0;
  selectedCategory = 'All';

  categories = ['All', 'Sneakers', 'Formal', 'Boots', 'Heels', 'Sandals'];

  products = [
    { name: 'AeroStride Runner', price: 3499, available: true,  emoji: '👟', category: 'Sneakers', badge: 'New',     oldPrice: null },
    { name: 'UrbanEdge Classic', price: 4999, available: true,  emoji: '👞', category: 'Formal',   badge: 'Sale',    oldPrice: 6200 },
    { name: 'TrailBlazer Boot',  price: 5799, available: false, emoji: '🥾', category: 'Boots',    badge: null,      oldPrice: null },
    { name: 'Glam Heels Pro',    price: 3299, available: true,  emoji: '👡', category: 'Heels',    badge: 'Popular', oldPrice: null },
    { name: 'SunWalk Sandal',    price: 1899, available: true,  emoji: '🩴', category: 'Sandals',  badge: null,      oldPrice: null },
    { name: 'FlexFit Trainer',   price: 4199, available: false, emoji: '👟', category: 'Sneakers', badge: 'Sale',    oldPrice: 5500 },
  ];

  get filteredProducts() {
    if (this.selectedCategory === 'All') return this.products;
    return this.products.filter(p => p.category === this.selectedCategory);
  }

  addToCart(product: any) {
    if (!product.available) return;
    this.cartCount++;
    this.totalPrice += product.price;
    alert(product.name + ' added to cart! 🛒');
  }

  setCategory(category: string) {
    this.selectedCategory = category;
  }
}