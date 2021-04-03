
const slides = document.querySelectorAll('.slide')
let circlesContainer = document.querySelector('.slide.active .circles')
let circles 
let targetSlide
let activeSlide
let activeDot
let contentTransition //= document.querySelector('.slide .content-container')

if(circlesContainer != null){ // ERROR CAUSED BY THE SELECTOR ON DEFERENT PAGES

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
}

const nav = document.querySelector('header nav')
const svgLogo = document.querySelector('.svg-logo')
const svgCart = document.querySelector('.svg-cart')
const svgMobileLogo = document.querySelector('.mobile-logo svg')

const proverbSection = document.querySelector('.proverb')
const productSection = document.querySelector('.product')

const proverbSvg = document.querySelector('.proverb svg')
const proverbTitle = document.querySelector('.proverb h2')


document.addEventListener('scroll', (e)=>{
    if(window.pageYOffset > 140){
        if(productDetails){
            nav.setAttribute('style', 'padding: .6rem 0 !important; transition: padding .3s ease')
            document.documentElement.style.setProperty("--header-max-height", "auto");
        }else{
            nav.setAttribute('style',
                'background: #fff; color: #000; padding: .6rem 0 !important; transition: padding .3s ease'
                )
            svgLogo.style.fill = "#000"
            svgCart.style.fill = "#000"
            svgMobileLogo.style.fill = "#000"

           document.documentElement.style.setProperty("--pseudo-background", "#000");
        }
    }else{  
        if(productDetails){
            nav.setAttribute('style', 'padding: 2rem 0rem !important; transition: padding .3s ease')
            document.documentElement.style.setProperty("--header-max-height", "140px");
        }else{
            nav.setAttribute('style',
                'background: transtarent; color: #FFF; padding: 2rem 0rem !important; transition: padding .3s ease'
            )
            svgLogo.style.fill = "#FFF"
            svgCart.style.fill = "#FFF"
            svgMobileLogo.style.fill = "#FFF"
           document.documentElement.style.setProperty("--pseudo-background", "#FFF");
        }

        if(window.location.pathname == '/about' || window.location.pathname == '/shopping' || window.location.pathname == '/shop'){
            nav.style.background = "linear-gradient(0deg,transparent,#000)"
            
        }
    }

    if(proverbSection){

        if(proverbSection.offsetTop - 180 < window.pageYOffset){
            proverbSvg.classList.add('active')
            proverbTitle.classList.add('active')
            
        }else{
            proverbSvg.classList.remove('active')
            proverbTitle.classList.remove('active')
        }
    }
})
    
// Verify Header Colors Function
headerColors = (section)=>{
    if(section != null){
    document.querySelector('header').style.backgroundColor = '#000'
    document.querySelector('header').style.color = '#111'
}
}

/* PRODUCT DETAILS */
const productDetails = document.querySelector('.product-details')

headerColors(productDetails)


/* Overly Menu */
const menuBtn = document.querySelector('.menu')
const menuOverly = document.querySelector('.menu-overly')
const menuLeft = document.querySelector('.menu-left')
const menuRight = document.querySelector('.menu-right')
const MenuClose = document.querySelector('.close-btn')

menuBtn.addEventListener('click', ()=>{
    menuOverly.classList.toggle('active')
    menuLeft.classList.toggle('active')
    menuRight.classList.toggle('active')
})

MenuClose.addEventListener('click', ()=>{
    menuOverly.classList.toggle('active')
    menuLeft.classList.toggle('active')
    menuRight.classList.toggle('active')
})


/* COOKIE FOR SHOPPING CARD */
const cardBtn = document.querySelector('.add-to-cart') 
if(cardBtn){
    cardBtn.addEventListener('click', ()=>{
        
        let orders
        if(document.cookie !== ""){
            orders = [{id: cardBtn.dataset.id}, ...JSON.parse(document.cookie.split('=')[1])]
        }else{
            orders = [{id: cardBtn.dataset.id}]
        }
        
        document.cookie = "orders=" + JSON.stringify(orders) + ";path=/"
        
    })
} 

/* ORDERS PAGE */
const ordersContainer = document.querySelector('.orders-container')
headerColors(ordersContainer)

/* ABOUT PAGE JS CODE */
if(window.location.pathname == '/about' || window.location.pathname == '/shopping' || window.location.pathname == '/shop') {
    nav.style.background = "linear-gradient(0deg,transparent,#000)"
}






