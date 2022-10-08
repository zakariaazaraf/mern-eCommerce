import React from 'react'
import { useParams } from 'react-router-dom'

export const Product = () => {

  let { productId } = useParams();

  return <div className="product-details">
  <div className="container">
      <div className="product-container">
          <div className="product-image">
              <img src='/images/shortSkirts/cb05471b55b4ee4c9717be44b814c99d.jpg' alt='<%=product.name%>' />
          </div>
          <div className="product-info">
              <h4 className='product-name'>Product Name</h4>
              <p>Deux looks en robes Mark & Spencer : une robe chemise en soie noire et une robe à volants blanche fleurie !</p>
              {/* <span><%=product.dateAdded.toDateString()%></span> */}
              <span>Tue Mar 30 2021</span>
              <span>made in usa</span>
              <span>$111</span>
              <div className="to-card-container">
                  
                    {/* TODO: check if the product does exist in the user's card, based on it, Show the appropriate link content */}
                      {/* <a href='/shopping' className='in-card btn'>In Card</a> */}
                    
                      <a href='/shopping' className='add-to-cart btn' data-id='<%=product.id%>' data-price='<%=product.price%>' >add to cart</a>
                      
              </div>
          </div>
      </div>
  </div>
  
</div>
}