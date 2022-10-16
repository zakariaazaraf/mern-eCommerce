import React, { useEffect, useState } from 'react'
// const axios = require('axios')
import axios, * as others from 'axios';

export const Shopping = () => {
    const [products, setProducts] = useState([])
    const [total, setTotal] = useState(0)

    const getCardProducts = async () => {
        
        try {

            const response = await axios.get(`http://localhost:5000/shopping`, {
                withCredentials: true
            })
            
            let {status, statusText, data} = response

            if (status === 200 && statusText === 'OK') {
                let { products } = data
                setProducts(products)
            }
        } catch (error) {
            /** Redirect the user to another page if something unexpected happend. Or even better, Redirect them to 404 page*/
            console.log(error)
        }
    }

    const calculateTotal = () => {
        // Get the product prices from the cookies
        const products = getProducts();
        // Calculate the total
        let total = 0
        products.forEach(product => {
            total += parseInt(product.price)
        })

        // pass the total to the state to be rendered.
        setTotal(total)
    }

    const removeProduct = event => {
        let product = event.target.parentElement.parentElement;

        let id = product.dataset.id;
    
        deleteproduct(id) 

        product.outerHTML = '';

        // Recalculate the total after the product has been removed from the user shop card.
        calculateTotal()
    }

    useEffect(() => {
        getCardProducts()
        calculateTotal()
    }, [])
    


  return <div className="orders-container">
  <div className="container">
      <div className="card-orders">
          {
    
            products.map(product => {
                let { _id, name, description, price, dateAdded, coverImagePath} = product
                return <div className="card-order" key={_id} data-id={_id} data-price={price}>
                    <div className="order-image">
                        <img src={coverImagePath} alt={name} />
                    </div>
                    <div className="order-info">
                        <p className='product-name'>{name}</p>
                        <p className='product-description'>{description} </p>
                        {/* If you implemented the quantity feature, refactor this */}
                        <span className='quantity'>${`${price} x ${1}`}</span>
                    </div>
                    <div className="order-cancel" title="remove order">
                        <span className='remove' onClick={removeProduct}></span>
                    </div>
                </div>
            })
          }
      </div>
      <div className="shipping">
          <div className="checkout">
              <div className="total">
                  <span>totla :</span>
                  <span className='total-price'>${total.toFixed(2)}</span>
              </div>
              <button className='btn'>checkout</button>
          </div>
          <div className="ship-info">
              <div className='ship-info-content'>
                  <div>Items are shipped within 24 hours by tracked DHL courier services</div>
                  <div className='accept-holder'>
                      <span>we accept :</span>
                      <div className="img-icon-holder">
                          <img src="images/masterCard.png" alt="mastercard" />
                      </div>
                      <div className="img-icon-holder">
                          <img src="images/visa.png" alt="visa" />
                      </div>
                  </div>
              </div>
              <div className='ship-dealing'>
                  <div className='deal-info'>
                      <div className="img-icon-holder">
                          <img src="images/shippingIcon.png" alt="cart" />
                      </div>
                      <p>Free Shipping Worldwide</p>
                  </div>
                  <div className='deal-info'>
                      <div className="img-icon-holder">
                          <img src="images/returns.png" alt="cart" />
                      </div>
                      <p>Free Returns Worldwide</p>
                  </div>
                  <div className='deal-info'>
                      <div className="img-icon-holder">
                          <img src="images/cart.png" alt="cart" />
                      </div>
                      <p>100% Safe & Secure</p>
                  </div>
                  
              </div>
          </div>
      </div>
  </div>
</div>

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
}

const getProducts = () => JSON.parse(document.cookie.split('=')[1]);

