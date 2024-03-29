const pathname = window.location.pathname; // Path name 
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

// const proverbSection = document.querySelector('.proverb')
const productSection = document.querySelector('.product')

// const proverbSvg = document.querySelector('.proverb svg')
// const proverbTitle = document.querySelector('.proverb h2')


document.addEventListener('scroll', (e)=>{

    
    //nav.color = '#FFF';
    if(window.pageYOffset > 140){

        setupNavigation(0.75);

        svgLogo.style.fill = "#000"
        svgCart.style.fill = "#000"
        svgMobileLogo.style.fill = "#000"

        document.documentElement.style.setProperty("--pseudo-background", "#000");
        nav.style.color = "#000";
        nav.style.backgroundColor = "#FFF";

    }else{  
                
        svgLogo.style.fill = "#FFF"
        svgCart.style.fill = "#FFF"
        svgMobileLogo.style.fill = "#FFF"
        document.documentElement.style.setProperty("--pseudo-background", "#FFF");
        setupNavigation(2);
        
    }
    
    // Animate Prover section while you get to the section point
    // console.log(proverbSection)
    // if(proverbSection){

    //     if(proverbSection.offsetTop - 180 < window.pageYOffset){
    //         proverbSvg.classList.add('active')
    //         proverbTitle.classList.add('active')
    //         console.log('This the first change')
    //     }else{
    //         proverbSvg.classList.remove('active')
    //         proverbTitle.classList.remove('active')
    //         console.log('this the second change')
    //     }
    // }

});
    



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



const path = window.location.pathname.split('/')[1];

const setupNavigation = (padding) => {
   
    switch(path){
    
        case 'shop': 
            defaultNavigation(padding, 'FFF', '000');
        break;

        /* case 'guarantee': 
            defaultNavigation(padding);
        break; */

        case 'contacts': 
            defaultNavigation(padding, 'transparent', '000');
        break;

        case 'shipping': 
            defaultNavigation(padding, 'transparent', '000');
        break;

        case 'blog': 
            defaultNavigation(padding, 'transparent', 'FFF');
        break;
    
        case 'shopping': 
            /* nav.setAttribute(
                'style',
                `background: linear-gradient(0deg,transparent,#000);padding: ${padding}rem 0rem !important; transition: padding .3s ease`
            ); */
            defaultNavigation(padding, 'FFF', '000');
        break;
    
        case 'about': 
            /* nav.setAttribute(
                'style',
                `background: linear-gradient(0deg,transparent,#000);padding: ${padding}rem 0rem !important; transition: padding .3s ease`
            ); */
            defaultNavigation(padding, 'FFF', '000');
    
        break;
    
        case 'products': 
            nav.setAttribute(
                'style',
                `background-color: #000;padding: ${padding}rem 0rem !important; transition: padding .3s ease`
            );
        break;
    
        default: 
            nav.setAttribute(
                'style',
                `padding: ${padding}rem 0rem !important; transition: padding .3s ease`
            );
    }
    
}

const defaultNavigation = (padding, bg, color)=>{
    nav.setAttribute(
        'style',
        `background-color: #${bg}; color:#${color}; padding: ${padding}rem 0rem !important; transition: padding .3s ease`
    );
    svgLogo.style.fill = `#${color}`;
    svgCart.style.fill = `#${color}`;
    svgMobileLogo.style.fill = `#${color}`;
    document.documentElement.style.setProperty("--pseudo-background", `#${color}`);
}

//nav.color = '#FFF';
setupNavigation(2);



const cartBtnContent = document.querySelector('.cart .cart-content');

/* change the icon content text on resize */
const changeIconContentOnSmallScreen = ()=>{
    if(window.innerWidth < 400){
        menuBtn.innerText = '';
        cartBtnContent.innerText = '';
    }else{
        menuBtn.innerText = 'MENU';
        cartBtnContent.innerText = 'CART';
    }
}

window.addEventListener('resize', changeIconContentOnSmallScreen);

changeIconContentOnSmallScreen();

menuBtn.addEventListener('click', (event)=>{
    if(menuOverly.classList.contains('active')){
        nav.color = '#FFF';
    }
});




