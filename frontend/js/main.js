
const slides = document.querySelectorAll('.slide')
let circlesContainer = document.querySelector('.slide.active .circles')
let circles 
let targetSlide
let activeSlide
let activeDot
let contentTransition //= document.querySelector('.slide .content-container')

const animateSlides = ()=>{
    circlesContainer.addEventListener('click', (e) => {
        targetSlide = false
        if (e.target.classList.contains('circle') && !e.target.classList.contains('active')) {
            slides.forEach(slide => {
                if (slide.dataset.slide === e.target.dataset.dot) {
                    targetSlide = slide
                }
                if (slide.classList.contains('active')) {
                    activeSlide = slide
                }
            })
            circles = document.querySelectorAll('.slide.active .circle')
            circles.forEach(circle => {
                if (circle.classList.contains('active')) {
                    activeDot = circle
                }
                circle.classList.remove('active')
                contentTransition = document.querySelector('.slide .content-container')
                console.log('circle')
            })

        }
        if (targetSlide) {
            activeSlide.classList.remove('active')
            targetSlide.classList.add('active')
            targetSlide.addEventListener('animationend', () => {
                circlesContainer = document.querySelector('.slide.active .circles')
                circles = document.querySelectorAll('.slide.active .circle')
                circles.forEach(circle => {
                    circle.classList.remove('active')
                    if (circle.dataset.dot === e.target.dataset.dot) {
                        circle.classList.add('active')
                    }
                })
            })
        }
    })
}

animateSlides()

document.addEventListener('click', ()=>{
    animateSlides()
})

const nav = document.querySelector('header nav')
const svgLogo = document.querySelector('.svg-logo')
document.addEventListener('scroll', (e)=>{
    if(window.pageYOffset > 140){
        nav.setAttribute('style',
            'background: #fff; color: #000; padding: .6rem 2rem !important; transition: padding .3s ease'
            )
        svgLogo.style.fill = "#000"
    }else{     
        nav.setAttribute('style',
            'background: transtarent; color: #FFF; padding: 2rem !important; transition: padding .3s ease'
        )
        svgLogo.style.fill = "#FFF"
    }
})
    


