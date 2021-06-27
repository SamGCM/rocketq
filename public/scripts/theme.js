let data = new Date()
const hour = data.getHours()


const toggle = document.querySelector('.toggle')

const mode = document.querySelector('.circle')

toggle.addEventListener('click', () => {

    if(mode.classList.contains('night-mode') == true){
        mode.classList.add('light-mode')  
        mode.classList.remove('night-mode')

        const logo = document.querySelector('.night-logo')

        const balls = document.querySelectorAll('.night-ball')

        const bgSvg = document.querySelector('#bg')

        const bgBox = document.querySelectorAll('.night-bg-box')

        const bgBoxDesactive = document.querySelectorAll('.night-bg-desactive')

        const iconUser = document.querySelectorAll('.night-icon-user')

        const iconCopy = document.querySelector('.night-icon-copy')

        const user = document.querySelectorAll('.night-user')

        const noQuestion = document.querySelector('.svg-no-question')

        const body = document.querySelector('.night-bg')
        
        const buttons = document.querySelectorAll('.night-button')

        const btnOutilined = document.querySelectorAll('.outilined')

        const word = document.querySelectorAll('.night-word')


        

        

        bgSvg == null ? '' : bgSvg.style.setProperty('background', "url('../images/img-bg.svg') no-repeat top/contain")
        bgSvg == null ? '' : bgSvg.style.setProperty('background-position-x', "-10rem")

        logo == null ? '' : logo.setAttribute('src', '/images/Logo.svg')

        noQuestion == null ? '' : noQuestion.setAttribute('src', '/images/Ilustração.svg')

        iconCopy == null ? '' : iconCopy.setAttribute('src', '/images/copy.svg')

        user == null ? '' : user.forEach(icon => {
            icon.style.setProperty('background', 'var(--blue)')
        })

        

        balls.forEach(ball => {
            ball.style.setProperty('background', 'var(--blue)')
        })

        bgBox.forEach(background => {
            background.style.setProperty('background', 'var(--light-blue)')
        })

        bgBoxDesactive.forEach(background => {
            background.style.setProperty('background', 'var(--grey-medium)')
        })


        body.style.setProperty('background', 'var(--background)')

        
        iconUser.forEach( icon => {
            icon.setAttribute('src', '/images/users.svg')
        })

        word.forEach(word => {
            word.style.setProperty('color', 'var(--black)')
        })

        buttons.forEach( button => {
            button.style.setProperty('background', 'var(--blue)')
            button.style.setProperty('border', '0.2rem solid var(--blue)')
            button.style.setProperty('color', 'var(--white)')
        })

        

        






    } else{
        mode.classList.add('night-mode')
        mode.classList.remove('light-mode')      

        const logo = document.querySelector('.night-logo')

        const balls = document.querySelectorAll('.night-ball')

        const bgSvg = document.querySelector('#bg')

        const bgBox = document.querySelectorAll('.night-bg-box')

        const bgBoxDesactive = document.querySelectorAll('.night-bg-desactive')

        const iconUser = document.querySelectorAll('.night-icon-user')

        const iconCopy = document.querySelector('.night-icon-copy')

        const user = document.querySelectorAll('.night-user')

        const noQuestion = document.querySelector('.svg-no-question')

        const body = document.querySelector('.night-bg')
        const buttons = document.querySelectorAll('.night-button')
        const word = document.querySelectorAll('.night-word')


        

        

        bgSvg == null ? '' : bgSvg.style.setProperty('background', "url('../images/img-bg-night.svg') no-repeat top/contain")
        bgSvg == null ? '' : bgSvg.style.setProperty('background-position-x', "-10rem")

        logo == null ? '' : logo.setAttribute('src', '/images/Logo white.svg')

        noQuestion == null ? '' : noQuestion.setAttribute('src', '/images/Ilustração night.svg')

        iconCopy == null ? '' : iconCopy.setAttribute('src', '/images/copy white.svg')

        user == null ? '' : user.forEach(icon => {
            icon.style.setProperty('background', '#8257E6')
        })

        

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
    }
})
