import React from 'react'

export const Contacts = () => {
  return <main>
  <section class="guarantee-hero contact-hero">
      <div class="wrapper">        
          <div class="content-container">
              <div class="container">
  
                  <p class="title">
                      contact us
                  </p>
                  <h2 class="title">
                      Our customer support team is here to help
                  </h2>
  
              </div>
          </div>
      </div>
  </section>
  <section class="contact-body">
      <div class="container">
          <div class="contact-team">
              <div class="profiles-container">
                  <div class="profiles">
                      <img src="/images/profile.jpg" alt="zakaria" />
                      <img src="/images/profile.jpg" alt="zakaria" />
                  </div>
              </div>
              <div class="constraction">
                  <span class="name">meet hicham</span>
                  <p class="how">If you have any questions we promise to get back to you within 24 hours</p>
              </div>
          </div>
          <div class="contact-form">
              <div class="form-contact">
                  <p>fill out this form</p>
                  <form action="" class='form'>
                      <input type="text" name='fullname' id='fullname' placeholder="Your name" required />
                      <input type="text" name='email-number' id='email-number' placeholder="Your email adresse or phone number" required />
                      <div class="textarea">
                          <textarea name="message" id="message" required placeholder="Message"></textarea>
                          <input type="submit" value='sent' name='submit' class="btn" />
                      </div>                  
                  </form>
              </div>
              <div class="reach-us">
                  <p>or reach us here</p>
                  <div class="social-media">
                      <a href=""><svg class="svg svg-facebook" viewBox="0 0 24.5 24.5" xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink">
                          <path d="M21.2,0H3.3C1.5,0,0,1.5,0,3.3v17.9c0,1.8,1.5,3.3,3.3,3.3h8.8l0-8.8H9.9
                        c-0.3,0-0.5-0.2-0.5-0.5l0-2.8c0-0.3,0.2-0.5,0.5-0.5h2.3V9.1c0-3.2,1.9-4.9,4.8-4.9h2.3c0.3,0,0.5,0.2,0.5,0.5v2.4
                        c0,0.3-0.2,0.5-0.5,0.5l-1.4,0c-1.5,0-1.8,0.7-1.8,1.8v2.4h3.4c0.3,0,0.6,0.3,0.5,0.6l-0.3,2.8c0,0.3-0.3,0.5-0.5,0.5h-3
                        l0,8.8h5.3c1.8,0,3.3-1.5,3.3-3.3V3.3C24.5,1.5,23,0,21.2,0z"></path>
                      </svg>/Ben Salek</a>
                      <a href=""><svg class="svg svg-instagram" viewBox="0 0 25.5 25.5" xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink">
                          <path d="M18.5,0H7C3.2,0,0,3.2,0,7v11.4c0,3.9,3.2,7,7,7h11.4c3.9,0,7-3.2,7-7V7C25.5,3.2,22.3,0,18.5,0z M18.5,23.2H7
                        c-2.6,0-4.8-2.1-4.8-4.8V7c0-2.6,2.1-4.8,4.8-4.8h11.4c2.6,0,4.8,2.1,4.8,4.8v11.4h0C23.2,21.1,21.1,23.2,18.5,23.2z M12.7,6.1
                        c-3.7,0-6.6,3-6.6,6.6c0,3.7,3,6.6,6.6,6.6s6.6-3,6.6-6.6C19.4,9.1,16.4,6.1,12.7,6.1z M12.7,17.1c-2.4,0-4.3-1.9-4.3-4.3
                        c0-2.4,1.9-4.3,4.3-4.3s4.3,1.9,4.3,4.3C17.1,15.1,15.1,17.1,12.7,17.1z M20.5,4.5c0.3,0.3,0.4,0.7,0.4,1.1c0,0.4-0.2,0.8-0.4,1.1
                        c-0.3,0.3-0.7,0.4-1.1,0.4c-0.4,0-0.8-0.2-1.1-0.4C18,6.4,17.8,6,17.8,5.6c0-0.4,0.2-0.8,0.4-1.1c0.3-0.3,0.7-0.4,1.1-0.4
                        C19.8,4.1,20.2,4.2,20.5,4.5z"></path>
                      </svg>/Ben Salek</a>
                  </div>
                  <div class="email">
                      <a href="mailto:zakariaazaraf@gmail.com">zakariaazaraf@gmail.com</a>
                  </div>
                  <div class="adresse">
                      <p>adresse: Hay El Mohammdi Chichaoua, Morocco</p>
                  </div>
              </div>
          </div>
      </div>
  </section>
  <section class="footer-hero footer-hero-made-to-fade">
      <div class="wrapper">
          <img src="/images/backgroundWallpapers/man-model-glasses-headband-beard-fashion-men.jpeg" alt="fashion man model" />
          <div class="content">
              <h4>discover our shop now</h4>
              <a href="/shop" class="btn">shop all product</a>
          </div>
      </div>
  </section>
</main>
}
