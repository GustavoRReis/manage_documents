import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: 'AIzaSyD6eR-jOhnx_L3qehuFs2Ln8MLym5MyQbM',
  authDomain: 'managedocuments-3f62e.firebaseapp.com',
  projectId: 'managedocuments-3f62e',
  storageBucket: 'managedocuments-3f62e.appspot.com',
  messagingSenderId: '705076726591',
  appId: '1:705076726591:web:f52a7258e33ee77101a18a',
  measurementId: 'G-G5P9JGG210',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
