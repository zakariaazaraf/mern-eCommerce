import React from 'react'

export const About = () => {
  return <main className="about-container">
  <div className="container">
      <h2>Amazing can only be achieved by breaking boundaries.</h2>
      <p>This was the mindset of designer Logan Bailey that sparked the creation of Ben Salek. Having left America to travel and
      experience the world, Logan eventually stumbled upon Bali, Indonesia in 2008, where he put down roots.</p>
  </div>
  <div className="about-image">
      <img src="/images/backgroundWallpapers/about.jpg" alt="mountain" />
      <div className="about-content">
          <div className="container">
              <div className="top-content">
                  It was through these travels and living in various countries that he uncovered an unconventional way of living; one
                  where having a luxurious lifestyle and having freedom, both in time and mobility, were not mutually exclusive. This new
                  culture is referred to as the “New Rich”.
              </div>
              <div className="bottom-content">
                  Being “New Rich” means having the ability to abandon a deferred-life plan to find alternative careers that give the
                  fortune of living presently, the freedom in having a currency made of time and mobility, while also allowing a pursuit
                  in less conventional passions. In an effort to conceptualize the essence of Logan’s newfound way of living, the story of
                  L.Novum began.
              </div>        
          </div>
      </div>
  </div>
  <div className="about-notation">
      <div className="container">
          <div className="logo">
              <svg className="svg svg-logo-mobile active" viewBox="0 0 40 55" xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink">
                  <g stroke="none" strokeWidth="1" fill="#000" fillRule="evenodd">
                      <g transform="translate(-700.000000, -2515.000000)" fill="#FFF">
                          <polygon
                              points="732.533804 2518.98787 721.96305 2535.01955 724.353668 2538.75878 740 2515 700 2515 732.62205 2566.01157 707.514589 2566.01157 718.085912 2549.97988 715.694725 2546.24065 700.048393 2570 739.912323 2570 707.289704 2518.98787">
                          </polygon>
                      </g>
                  </g>
              </svg>
          </div>
          <div className="content">
              The L.NOVUM logo is a synthesis of an hourglass and infinity symbol, representing infinite possibilities & the
              limitations of time.
          </div>
      </div>
  </div>
  <div className="about-description">
      <div className="container">
          <h3>We are a global collective</h3>
          <p>
              We choose to live in a world without boundaries. Sourcing talent from all over the world, our team stretches accross the
              globe. The creative design process begins with our founder, Logan Bailey, in Bali. When the designs feel ready, they are
              sent to our small community of artisans in Thailand for production. It is there that Dutch goldsmith, Martin
              Dauztenberg, leads the team with over 30 years of experience producing technical fine jewelry. Our media team spans as
              far as Lithuania, headed by creative director Adam Aleno.
          </p>
      </div>
  </div>
  <section className="footer-hero footer-hero-made-to-fade">
      <div className="wrapper">
          <img src="\images\backgroundWallpapers\bg-blackInFashion.jpg" alt="fashion week" />
          <div className="content">
              <h4>discover our shop now</h4>
              <a href="/shop" className="btn">shop all product</a>
          </div>
      </div>
  </section>
</main>
}
