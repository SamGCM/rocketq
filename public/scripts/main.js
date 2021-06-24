import Modal from './modal.js'

const modal =  Modal()


// PEGAR BOTÕES COM CLASSE CHECK
const checkButtons = document.querySelectorAll('.actions a.check')

checkButtons.forEach(button => {
    button.addEventListener('click', event => {
        // ABRIR MODAL
        modal.open()
    })
})

// Quando o botão delete for clicado ele abre a modal
const deleteButton = document.querySelectorAll('.actions a.delete')

deleteButton.forEach( button => {
    button.addEventListener('click', event => {
        modal.open()
    })
})

