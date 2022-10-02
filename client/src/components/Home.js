import React from 'react'

export const Home = () => {

  /* Fetch the products for the index page, You should only fetch a limited number of products. */
  /* It would be lovely to use Axios to call the endpoint API. */

  document.addEventListener('scroll', (event) => {
    const proverbSection = document.querySelector('.proverb')
    const proverbSvg = document.querySelector('.proverb svg')
    const proverbTitle = document.querySelector('.proverb h2')
    // Animate Prover section while you get to the section point

      if (proverbSection.offsetTop - 180 < window.pageYOffset){
          proverbSvg.classList.add('active')
          proverbTitle.classList.add('active')
          return;
      }

      proverbSvg.classList.remove('active')
      proverbTitle.classList.remove('active')

  });

  return <main>
  <section className='hero'>
      <div className="slides">
          
          <div className="slide active" data-slide="1">
              <img src="/images/viewpropertiesbytype-contentsection-components-2-insertions-0-background-style.jpg" 
                  alt="New York Fashion Week" />
              <div className="content-container">
                  <div className="container">
                      <div className="content">
                          <div className="circles">
                                  <span className="circle active" data-dot='1'></span>
                                  <span className="circle" data-dot='2'></span>
                                  <span className="circle" data-dot='3'></span>
                                  <span className="circle" data-dot='4'></span>
                                  <span className="circle" data-dot='5'></span>
                          </div>
                          <h2 className='title'>
                              New York Fashion Week
                          </h2>
                      </div>
                      <div className="shop-description">
                          <a href="/shop" className="btn">shop now</a>
                      </div>
                  </div>
              </div>              
          </div>
          <div className="slide" data-slide="2">
              <img src="/images/skirt.png" 
                  alt="New York Fashion Week" />
              <div className="content-container">
                  <div className="container">
                      <div className="content">
                          <div className="circles">
                                  <span className="circle active" data-dot='1'></span>
                                  <span className="circle" data-dot='2'></span>
                                  <span className="circle" data-dot='3'></span>
                                  <span className="circle" data-dot='4'></span>
                                  <span className="circle" data-dot='5'></span>
                          </div>
                          <h2 className='title'>
                              New York Fashion Week
                          </h2>
                      </div>
                      <div className="shop-description">
                          <a href="/shop" className="btn">shop now</a>
                      </div>
                  </div>
              </div>
          </div>
          <div className="slide" data-slide="3">
              <img src="/images/menfashion.jpg" 
                  alt="New York Fashion Week" />
              <div className="content-container">
                  <div className="container">
                      <div className="content">
                          <div className="circles">
                                  <span className="circle active" data-dot='1'></span>
                                  <span className="circle" data-dot='2'></span>
                                  <span className="circle" data-dot='3'></span>
                                  <span className="circle" data-dot='4'></span>
                                  <span className="circle" data-dot='5'></span>
                          </div>
                          <h2 className='title'>
                              New York Fashion Week
                          </h2>
                      </div>
                      <div className="shop-description">
                          <a href="/shop" className="btn">shop now</a>
                      </div>
                  </div>
              </div>
          </div>
          <div className="slide" data-slide="4">
              <img src="/images/Boyfriend-Jeans-min-853x1024.jpg" 
                  alt="New York Fashion Week" />
              <div className="content-container">
                  <div className="container">
                      <div className="content">
                          <div className="circles">
                                  <span className="circle active" data-dot='1'></span>
                                  <span className="circle" data-dot='2'></span>
                                  <span className="circle" data-dot='3'></span>
                                  <span className="circle" data-dot='4'></span>
                                  <span className="circle" data-dot='5'></span>
                          </div>
                          <h2 className='title'>
                              New York Fashion Week
                          </h2>
                      </div>
                      <div className="shop-description">
                          <a href="/shop" className="btn">shop now</a>
                      </div>
                  </div>
              </div>
          </div>
          <div className="slide" data-slide="5">
              <img src="/images/dashing-formal-outfit-ideas-for-stylish-men-50-819x1024.jpg" 
                  alt="New York Fashion Week" />
              <div className="content-container">
                  <div className="container">
                      <div className="content">
                          <div className="circles">
                                  <span className="circle active" data-dot='1'></span>
                                  <span className="circle" data-dot='2'></span>
                                  <span className="circle" data-dot='3'></span>
                                  <span className="circle" data-dot='4'></span>
                                  <span className="circle" data-dot='5'></span>
                          </div>
                          <h2 className='title'>
                              New York Fashion Week
                          </h2>
                      </div>
                      <div className="shop-description">
                          <a href="/shop" className="btn">shop now</a>
                      </div>
                  </div>
              </div>
          </div>
              
      </div>
  </section>
  <section className='proverb'>
      <svg className="svg svg-logo-mobile" viewBox="0 0 40 55" xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink">
          <g stroke="none" strokeWidth="1" fill="#000" fillRule="evenodd">
              <g transform="translate(-700.000000, -2515.000000)" fill="#000">
                  <polygon
                      points="732.533804 2518.98787 721.96305 2535.01955 724.353668 2538.75878 740 2515 700 2515 732.62205 2566.01157 707.514589 2566.01157 718.085912 2549.97988 715.694725 2546.24065 700.048393 2570 739.912323 2570 707.289704 2518.98787">
                  </polygon>
              </g>
          </g>
      </svg>
      <h2>wear whatever you want</h2>
  </section>
  <section className='product d-flex'>
    <article>
        <a href="/products/<%=product.id%>">
            <img src="/images/fashionStyle/2f96ffcf42ed9f50cc80f5968441a0f4.jpg" alt="<%=product.name%>" />
            <div className="content">
                <h3 className="title">This the product 1</h3>
                <span className="price">$100</span>
                <span className="shop-link">shop now</span>
            </div>
        </a>
    </article>
    <article>
        <a href="/products/<%=product.id%>">
            <img src="/images/fashionStyle/4f12d50fa58b46127199aaff35a3ac74.jpg" alt="<%=product.name%>" />
            <div className="content">
                <h3 className="title">This the product 2</h3>
                <span className="price">$100</span>
                <span className="shop-link">shop now</span>
            </div>
        </a>
    </article>     
    <article>
        <a href="/products/<%=product.id%>">
            <img src="/images/babyCloths/9a04b844d5e78ca7097c55bd8d9701a3.jpg" alt="<%=product.name%>" />
            <div className="content">
                <h3 className="title">This the product 3</h3>
                <span className="price">$100</span>
                <span className="shop-link">shop now</span>
            </div>
        </a>
    </article>
    <article>
        <a href="/products/<%=product.id%>">
            <img src="/images/babyCloths/78f263bb2af2a851324dc39fdc19134e.jpg" alt="<%=product.name%>" />
            <div className="content">
                <h3 className="title">This the product 4</h3>
                <span className="price">$100</span>
                <span className="shop-link">shop now</span>
            </div>
        </a>
    </article>
    <article>
        <a href="/products/<%=product.id%>">
            <img src="/images/babyCloths/9399a5bc24633996531ee875742d6152.jpg" alt="<%=product.name%>" />
            <div className="content">
                <h3 className="title">This the product 5</h3>
                <span className="price">$100</span>
                <span className="shop-link">shop now</span>
            </div>
        </a>
    </article>
    <article>
        <a href="/products/<%=product.id%>">
            <img src="/images/babyCloths/b9a5a75ea9a2c83734731fc64f26cf9d.jpg" alt="<%=product.name%>" />
            <div className="content">
                <h3 className="title">This the product 6</h3>
                <span className="price">$100</span>
                <span className="shop-link">shop now</span>
            </div>
        </a>
    </article>
    <article>
        <a href="/products/<%=product.id%>">
            <img src="/images/babyCloths/fdeecc321e7f6599309d864367063f35.jpg" alt="<%=product.name%>" />
            <div className="content">
                <h3 className="title">This the product 7</h3>
                <span className="price">$100</span>
                <span className="shop-link">shop now</span>
            </div>
        </a>
    </article>

    {/* { This the start Self care product section} */}
    <article>
        <a href="/products/<%=product.id%>">
            <img src="/images/selfCare/6faa816d3abb9e8d7eabfe2b4436fb0b.jpg" alt="<%=product.name%>" />
            <div className="content">
                <h3 className="title">This the product 8</h3>
                <span className="price">$100</span>
                <span className="shop-link">shop now</span>
            </div>
        </a>
    </article>
    <article>
        <a href="/products/<%=product.id%>">
            <img src="/images/selfCare/9ff9b5d06d3e1e7ae31679f02d835bd1.jpg" alt="<%=product.name%>" />
            <div className="content">
                <h3 className="title">This the product 9</h3>
                <span className="price">$100</span>
                <span className="shop-link">shop now</span>
            </div>
        </a>
    </article>
    <article>
        <a href="/products/<%=product.id%>">
            <img src="/images/selfCare/bf492dda593f1ad21d551c5d8310d568.jpg" alt="<%=product.name%>" />
            <div className="content">
                <h3 className="title">This the product 10</h3>
                <span className="price">$100</span>
                <span className="shop-link">shop now</span>
            </div>
        </a>
    </article>
    {/* { This the end Self care product section} */}
  </section>
  <section className='masterpiece'>
      <div className="container">
          <p className='title'>craftsmaship</p>
          <div className="content">
              <h2>A masterpiece takes time</h2>
              <p className='description'>
                  Each L.NOVUM piece is meticulously handcrafted in an intricate process to bring you artistry and
                  quality that will
                  last
                  a lifetime. Our silver accessories are oxidized to create a dark grey finish that's made to fade
                  with time, bringing
                  another aspect of uniqueness to your piece.
              </p>
          </div>

      </div>
  </section>
</main>
}
