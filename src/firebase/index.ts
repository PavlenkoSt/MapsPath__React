import { initializeApp } from 'firebase/app'
import { getFirestore } from '@firebase/firestore'

const firebaseApp = initializeApp({
  apiKey: 'AIzaSyCtKfb4UbEmk7QQkr23nBq1BaGpK1zVjKs',
  authDomain: 'routes-8f6ec.firebaseapp.com',
  databaseURL: 'https://routes-8f6ec-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'routes-8f6ec',
  storageBucket: 'routes-8f6ec.appspot.com',
  messagingSenderId: '147611270023',
  appId: '1:147611270023:web:7adf48c297b86fb88db122',
  measurementId: 'G-GK40M9MQN6',
})

export const db = getFirestore(firebaseApp)
