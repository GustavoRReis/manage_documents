import { getFirestore } from 'firebase/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD6eR-jOhnx_L3qehuFs2Ln8MLym5MyQbM',
  authDomain: 'managedocuments-3f62e.firebaseapp.com',
  projectId: 'managedocuments-3f62e',
  storageBucket: 'managedocuments-3f62e.appspot.com',
  messagingSenderId: '705076726591',
  appId: '1:705076726591:web:f52a7258e33ee77101a18a',
  measurementId: 'G-G5P9JGG210',
};

const app = firebase.initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
