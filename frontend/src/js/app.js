// Add this at the beginning of your app entry.
import 'vite/modulepreload-polyfill';
import '../css/app.css';

import Alpine from 'alpinejs'
 
window.Alpine = Alpine
 
Alpine.start()

console.log('Hello from app.js');
