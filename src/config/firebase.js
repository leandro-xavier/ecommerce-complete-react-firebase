import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyA0ZHSap5bW6s0kE8tWzNqSopnGwcNkgjc',
    authDomain: 'ecommerce-complete-22a21.firebaseapp.com',
    projectId: 'ecommerce-complete-22a21',
    storageBucket: 'ecommerce-complete-22a21.appspot.com',
    messagingSenderId: '773489761857',
    appId: '1:773489761857:web:5ae7dcccd941f315f5f0c0'
};

const app = initializeApp(firebaseConfig)
const db = getFirestore();

export {
    app,
    db
}