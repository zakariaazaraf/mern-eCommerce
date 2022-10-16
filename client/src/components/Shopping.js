import React, { useEffect, useState } from 'react'
// const axios = require('axios')
import axios, * as others from 'axios';

export const Shopping = () => {
    const [orders, serOrders] = useState([]);
    const [products, setProducts] = useState([])

    const getShoppingDate = async () => {
        
        try {
            const response = await axios.get(`http://localhost:5000/shopping`, {
                withCredentials: true
            })

            if (response.ok && response.status === 200) {
                const data = await response.json();
                let {orders, products} = data
                console.log(orders, products)
            }
        } catch (error) {
            /** Redirect the user to another page if something unexpected happend. Or even better, Redirect them to 404 page*/
            console.log(error)
        }
    }
    useEffect(() => {
        getShoppingDate()
    }, [])
    


  return <div className="orders-container">
  <div className="container">
      <div className="card-orders">
          {/* <%  let total = 0
              orders.forEach(order=>{
                  products.forEach(product=>{
                      if(product.id == order.id){
                          %>
                              <div className="card-order" data-id='<%= product.id %>' data-price='<%= product.price %>'>
                                  <div className="order-image">
                                      <img src='/images/<%= product.coverImage%>' alt='<%=product.name%>'>
                                  </div>
                                  <div className="order-info">
                                      <p className='product-name'>
                                          <%=product.name%>
                                      </p>
                                      <p className='product-description'>
                                          <%=product.description%>
                                      </p>
                                      <span className='quantity'>$<%=product.price%> x <%= product.quantity ? product.quantity : 1%></span>
                                  </div>
                                  <div className="order-cancel" title="remove order">
                                      <span className='remove'></span>
                                  </div>
                              </div>
                          <% 
                          
                          total += product.price
                      } 
                  }) 
              }) 
          %> */}
      </div>
      <div className="shipping">
          <div className="checkout">
              <div className="total">
                  <span>totla :</span>
                  {/* <span className='total-price'>$<%=total.toFixed(2)%></span> */}
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
