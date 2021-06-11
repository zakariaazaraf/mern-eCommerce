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

const proverbSection = document.querySelector('.proverb')
const productSection = document.querySelector('.product')

const proverbSvg = document.querySelector('.proverb svg')
const proverbTitle = document.querySelector('.proverb h2')


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
    
    // Animate Prover section while you get the section point
    if(proverbSection){

        if(proverbSection.offsetTop - 180 < window.pageYOffset){
            proverbSvg.classList.add('active')
            proverbTitle.classList.add('active')
            
        }else{
            proverbSvg.classList.remove('active')
            proverbTitle.classList.remove('active')
        }
    }

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

const setupNavigation = (padding)=>{
   
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
            defaultNavigation();
        break;

        case 'blog': 
            defaultNavigation();
        break;
    
        case 'shopping': 
            nav.setAttribute(
                'style',
                `background: linear-gradient(0deg,transparent,#000);padding: ${padding}rem 0rem !important; transition: padding .3s ease`
            );
        break;
    
        case 'about': 
            nav.setAttribute(
                'style',
                `background: linear-gradient(0deg,transparent,#000);padding: ${padding}rem 0rem !important; transition: padding .3s ease`
            );
    
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


/* COOKIE FOR SHOPPING CARD */
const cardBtn = document.querySelector('.add-to-cart') 
if(cardBtn){
    cardBtn.addEventListener('click', (event)=>{
        
        let product = event.target.dataset;
        addProduct(product)
        
    })
} 

const addProduct = (product)=>{
    
    const {id, price} = product;
    let orders = [];

    if(document.cookie !== ""){
        orders = [{id: id, price: price}, ...JSON.parse(document.cookie.split('=')[1])]
    }else{
        orders = [{id: id, price: price}]
    }
    
    document.cookie = "orders=" + JSON.stringify(orders) + ";path=/"
}

/* Delete Product From Shop Card */

const deleteproduct = (id) =>{

    const products = getProduct();
    let newOrders = [];

    products.forEach(product =>{
        if(product.id !== id){
            
            if(newOrders){
                newOrders = [{id: product.id, price: product.price}, ...newOrders]
            }else{
                newOrders = [{id: product.id, price: product.price}]
            }
        }
    })

    // Override The Orders In The Coockies
    document.cookie = "orders=" + JSON.stringify(newOrders) + ";path=/"

    calculateTotla();
}

const getProduct = ()=>{
    let products = JSON.parse(document.cookie.split('=')[1])

    return products;
}

const calculateTotla = ()=>{

    let totlaCardPrice = document.querySelector('.checkout .total .total-price');
    let cardTotla = 0;
    const products = getProduct();

    products.forEach(product => {
        cardTotla += parseInt(product.price);
    });
    
    totlaCardPrice.innerHTML = `$${cardTotla.toFixed(2)}`;
}

const orderCancelBtns = document.querySelectorAll('.order-cancel .remove')

orderCancelBtns.forEach(orderCancelBtn => {
    
    orderCancelBtn.addEventListener('click', (event)=>{
         let product = event.target.parentElement.parentElement,
            id = product.dataset.id;
    
        deleteproduct(id) 
        product.outerHTML = '';
        
    });
})


/* Handel The Category Product To Display */

if(window.location.pathname === '/shop'){

    const categoryToggleLink = document.querySelector('.category-btn-anchor');
    const categorySvgIcon = document.querySelector('.category-btn-anchor svg');
    const categoriesLinks = document.querySelector('.categories-links');
    
    categoryToggleLink.addEventListener('click', ()=>{
        
        categorySvgIcon.classList.toggle('rotate');
        categoriesLinks.classList.toggle('test-active');
    });
    
    const categories = document.querySelectorAll('.categories-links .category .category-name');
    
    categories.forEach(category => {
        category.addEventListener('click', displayProductsCategory);
    });
    
    function displayProductsCategory(){
        // Category Name
        let selectedCategory = this.dataset.category;
        let products = document.querySelectorAll('.product article');
    
        products.forEach(product => {
    
            let productCategory = product.dataset.category;
            
            // Hide All Product 
            product.classList.add('display-none');
            
            // Display Selected Product Category
            if(productCategory === selectedCategory){
                product.classList.remove('display-none');
            }
        })
    
    }
}
