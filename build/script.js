const accordions = document.querySelectorAll('.e-accordion')

// Добавление интерактивности аккордеонам
accordions.forEach(accordion => {
    const accordionBtn = accordion.querySelector('.e-accordion__short')
    const accordionHidden = accordion.querySelector('.e-accordion__more')

    accordionBtn.addEventListener('click', _ => {
        accordionHidden.classList.toggle('visible')
    })
})

// Добавление интерактивности переключателю
const themeSwitch = document.querySelector('.onoffswitch')
const themeDivs = document.querySelectorAll('.theme')

themeSwitch.addEventListener('click', _ => {
    themeDivs.forEach(theme => {
        if (theme.classList.contains('theme_color_project-default')) {
            theme.classList.replace('theme_color_project-default', 'theme_color_project-inverse')
        } else if (theme.classList.contains('theme_color_project-inverse')) {
            theme.classList.replace('theme_color_project-inverse', 'theme_color_project-default')
        }
    })

    themeSwitch.classList.toggle('onoffswitch_checked')
})