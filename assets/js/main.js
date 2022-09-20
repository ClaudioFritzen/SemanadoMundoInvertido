import { subscribeToHellFireClub } from "./firebase/hellfire.js"

const txtName = document.getElementById('txtName')
const txtEmail = document.getElementById('txtEmail')
const txtLevel = document.getElementById('txtLevel')
const txtCharacter = document.getElementById('txtCharacter')
const bntSubscribe = document.getElementById('bntSubscribe')
/* 
debugger */

bntSubscribe.addEventListener('click', async () => {
    const subscription ={
        name: txtName.value,
        email: txtEmail.value,
        level: txtLevel.value,
        character: txtCharacter.value
    }
    // salvar no banco de dados
   const subscriptionId = await subscribeToHellFireClub(subscription)
   console.log('Inscrito com sucesso: ${subscriptionId}')
   
})

