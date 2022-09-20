import app from "./app.js"

import { getFirestore, collection, addDoc, getDocs} from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js'

export async function subscribeToHellFireClub(subscription){
    //debugger
    const db = getFirestore(app)
    const hellfireCollection =  collection(db, 'hellfire')
    // função assincrona
    const docRef = await addDoc(hellfireCollection, subscription)
    console.log(docRef, 'Passou aqui')
    return docRef.id

    // como esperando uma promessa 
    // se tem um await, tem que ter um async
};