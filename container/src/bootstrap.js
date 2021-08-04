import { mount } from 'products/ProductIndex';
import { mount as mountCart } from 'cart/CartIndex';

console.log('container');
const el = document.querySelector('#my-products');
mount(el);

const elCart = document.querySelector('#my-cart');
mountCart(elCart);
