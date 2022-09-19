const txtName = document.getElementById('txtName')
const txtEmail = document.getElementById('txtEmail')
const txtLevel = document.getElementById('txtLevel')
const txtCharacter = document.getElementById('txtCharacter')
const bntSubscribe = document.getElementById('bntSubscribe')
/* 
debugger */

bntSubscribe.addEventListener('click', () => {
    const subscription ={
        name: txtName.value,
        email: txtEmail.value,
        level: txtLevel.value,
        character: txtCharacter.value
    }
    // salvar no banco de dados
    console.log(subscription)
})

