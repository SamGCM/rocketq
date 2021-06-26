let data = new Date()
const hour = data.getHours()

const toggle = document.querySelector('.toggle')

const mode = document.querySelector('.circle')

toggle.addEventListener('click', (event) => handleClick(event, false)) 

function handleClick(event, state){
    event.preventDefault()
    

    
    const logo = document.querySelector('.night-logo')

    const balls = document.querySelectorAll('.night-ball')

    const bgSvg = document.querySelector('#bg')

    const bgBox = document.querySelectorAll('.night-bg-box')

    const bgBoxDesactive = document.querySelectorAll('.night-bg-desactive')

    const iconUser = document.querySelectorAll('.night-icon-user')

    const iconCopy = document.querySelector('.night-icon-copy')

    const body = document.querySelector('.night-bg')
    const buttons = document.querySelectorAll('.night-button')
    const word = document.querySelectorAll('.night-word')


    

    

    bgSvg == null ? '' : bgSvg.style.setProperty('background', "url('../images/img-bg-night.svg') no-repeat top/contain")
    bgSvg == null ? '' : bgSvg.style.setProperty('background-position-x', "-10rem")

    logo == null ? '' : logo.setAttribute('src', '/images/Logo white.svg')

    

    iconCopy == null ? '' : iconCopy.setAttribute('src', '/images/copy white.svg')

    balls.forEach(ball => {
        ball.style.setProperty('background', '#8257E6')
    })

    bgBox.forEach(background => {
        background.style.setProperty('background', 'var(--bg-gradient-night)')
    })

    bgBoxDesactive.forEach(background => {
        background.style.setProperty('background', 'var(--bg-gradient-night-desactive)')
    })


    body.style.setProperty('background', 'var(--background-night)')

    
    iconUser.forEach( icon => {
        icon.setAttribute('src', '/images/user 1.svg')
    })


    buttons.forEach( button => {
        button.style.setProperty('background', 'var(--bg-gradient-night)')
        button.style.setProperty('border', '0.2rem solid var(--bg-gradient-night)')
    })

    word.forEach(word => {
        word.style.setProperty('color', 'var(--white)')
    })

    state ? mode.classList.add('light-mode') : mode.classList.add('night-mode')
}
