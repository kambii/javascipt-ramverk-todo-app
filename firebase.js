import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyA2Xq7xEgKtNP8RZa8TKZlhkymTad2Z0i8",
    authDomain: "next-todo-f283c.firebaseapp.com",
    projectId: "next-todo-f283c",
    storageBucket: "next-todo-f283c.appspot.com",
    messagingSenderId: "408623441847",
    appId: "1:408623441847:web:ce5978eff438e828262a32"
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)