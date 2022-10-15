import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

export const Product = () => {
  const navigate = useNavigate()  
    // 6342fc02f9f45342942e6134
  let { productId } = useParams();
  const [id, setId] = useState(0)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState(0)
  const [imageSrc, setImageSrc] = useState('')
  const [dateAdded, setDateAdded] = useState('')

  const getProductById = async productId => {
    try {
        let response = await fetch(`http://localhost:5000/products/${productId}`);

        if (response.ok && response.status === 200) {
            let { product, exists } = await response.json()
            console.log(product)
            let { _id, name, description, price, dateAdded, coverImagePath} = product
            /** Display the product data */
            setId(_id)
            setName(name)
            setDescription(description)
            setPrice(price)
            setImageSrc(coverImagePath)
            setDateAdded(new Date(dateAdded).toDateString())
            return;
        } 

        console.log(`Error encountered, status Code ${response.status}`)
        /** Thing to redirect to the shop pages, And show the user a message informaing him about what's going on, besically, The product doesn't exist*/
        navigate(`/shop`, {state: {
            message: 'The product dioes not exist',
            error: true
        }})
    } catch (error) {
        console.log(error)
        /** TODO: Inform the cliuent/user about the error */
    }
    
  }

  const handleOnAddProduct = event => {
    let product = event.target.dataset;
    addProduct(product)
  }

  useEffect(() => {
    getProductById(productId)
  }, [])

  return <div className="product-details">
  <div className="container">
      <div className="product-container">
          <div className="product-image">
              <img src={imageSrc} alt={name} style={{width: 236, height: 354}} />
          </div>
          <div className="product-info">
              <h4 className='product-name'>{name}</h4>
              <p>{description}</p>
              {/* <span><%=product.dateAdded.toDateString()%></span> */}
              <span>{dateAdded}</span>
              <span>made in usa</span>
              <span>${price}</span>
              <div className="to-card-container">
                  
                    {/* TODO: check if the product does exist in the user's card, based on it, Show the appropriate link content */}
                      {/* <a href='/shopping' className='in-card btn'>In Card</a> */}
                    
                      <a href='shopping' className='add-to-cart btn' data-id={id} data-price={price} onClick={handleOnAddProduct}>add to cart</a>
                      
              </div>
          </div>
      </div>
  </div>
  
</div>
}

/* COOKIE FOR SHOPPING CARD */
// const cardBtn = document.querySelector('.add-to-cart')
// console.log(cardBtn) 
// if(cardBtn){
//     cardBtn.addEventListener('click', (event)=>{
        
//         let product = event.target.dataset;
//         addProduct(product)
        
//     })
// } 

const addProduct = product =>{
    
    const {id, price} = product;

    let orders = [];

    if (document.cookie !== ""){
        orders = [{id: id, price: price}, ...JSON.parse(document.cookie.split('=')[1])]
    } else{
        orders = [{id: id, price: price}]
    }
    
    document.cookie = `orders=${JSON.stringify(orders)};path=/`
}

/* Delete Product From Shop Card */

const deleteproduct = id => {

    const products = getProducts();

    let newOrders = [];

    products.forEach(product => {
        if (product.id !== id) {
          newOrders = [{id: product.id, price: product.price}, ...newOrders]
        }
    })

    // Override The Orders In The Coockies
    document.cookie = "orders=" + JSON.stringify(newOrders) + ";path=/"

    calculateTotla();
}

const getProducts = () => JSON.parse(document.cookie.split('=')[1]);

const calculateTotla = () => {

    let totlaCardPrice = document.querySelector('.checkout .total .total-price');

    let cardTotla = 0;

    const products = getProducts();

    products.forEach(product => {
        cardTotla += parseInt(product.price);
    });
    
    totlaCardPrice.innerHTML = `$${cardTotla.toFixed(2)}`;
}



/** Attach event listener to all the card's products. This needs to be moved to the shopping component.*/
const orderCancelBtns = document.querySelectorAll('.order-cancel .remove')

orderCancelBtns.forEach(orderCancelBtn => {
    
    orderCancelBtn.addEventListener('click', event => {

         let product = event.target.parentElement.parentElement;

         let id = product.dataset.id;
    
        deleteproduct(id) 

        product.outerHTML = '';
        
    });
})