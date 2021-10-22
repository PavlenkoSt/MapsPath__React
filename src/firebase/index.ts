import { initializeApp } from 'firebase/app'
import { getFirestore } from '@firebase/firestore'

const {
  REACT_APP_FIREBASE_KEY,
  REACT_APP_AUTH_DOMAIN,
  REACT_APP_DB_URL,
  REACT_APP_PROJ_ID,
  REACT_APP_STORAGE_BUCKET,
  REACT_APP_MESS_SENDER_ID,
  REACT_APP_ID,
  REACT_APP_MEASUREMENT_ID,
} = process.env

const firebaseApp = initializeApp({
  apiKey: REACT_APP_FIREBASE_KEY,
  authDomain: REACT_APP_AUTH_DOMAIN,
  databaseURL: REACT_APP_DB_URL,
  projectId: REACT_APP_PROJ_ID,
  storageBucket: REACT_APP_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_MESS_SENDER_ID,
  appId: REACT_APP_ID,
  measurementId: REACT_APP_MEASUREMENT_ID,
})

export const db = getFirestore(firebaseApp)
