import app from "./app.js"

import { getFirestore, collection, addDoc, getDocs} from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js'

export function subscribeToHellFireClub(subscription){
    const db = getFirestore(app)
    const hellfireCollection =  collection(db, "hellfire")
    // função assincrona
    addDoc(hellfireCollection, subscription)

    // como esperando uma promessa 
};