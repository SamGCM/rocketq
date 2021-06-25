let data = new Date()
const hour = data.getHours()



if(hour < 7 || hour > 18){

    //  --------------HOME--------------

    const logo = document.querySelector('.night-logo')

    const bgBox = document.querySelectorAll('.night-bg-box')

    const bgBoxDesactive = document.querySelectorAll('.night-bg-desactive')

    const iconUser = document.querySelectorAll('.night-icon-user')

    const iconCopy = document.querySelector('.night-icon-copy')

    const body = document.querySelector('.night-bg')
    const buttons = document.querySelectorAll('.night-button')
    const word = document.querySelectorAll('.night-word')


    logo == null ? '' : logo.setAttribute('src', '/images/Logo white.svg')

    iconCopy == null ? '' : iconCopy.setAttribute('src', '/images/copy white.svg')

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
    
