import React from 'react';
import about from '../../assets/img/about-2.jpg'

function About() {
  return (
    
    <section id="about" class="about">
      <div class="container" data-aos="fade-up">

        <div class="section-header">
          <h2>About Us</h2>
          <p>Learn More <span>About Us</span></p>
        </div>

        <div class="row gy-4">
                  <div class="col-lg-7 position-relative about-img">
            <div class="call-us position-absolute">
              <h4>Book a Table</h4>
              <p>+1 5589 55488 55</p>
            </div>
          </div>
          <div class="col-lg-5 d-flex align-items-end" data-aos="fade-up" data-aos-delay="300">
            <div class="content ps-0 ps-lg-5">
              <p class="fst-italic">
              Our menu is carefully crafted to offer a wide variety of options to satisfy any taste buds. From classic favorites to modern twists, we have something for everyone.
              </p>
              <ul>
                <li><i class="bi bi-check2-all"></i> Don't forget to save room for dessert! Our decadent desserts are the perfect way to end your meal. </li>
                <li><i class="bi bi-check2-all"></i> We also offer a great selection of wines, cocktails, and beers to complement your meal.</li>
                <li><i class="bi bi-check2-all"></i> We believe that dining out should be an experience, not just a meal. That's why we strive to create a warm and inviting atmosphere that makes you feel right at home..</li>
              </ul>
              <p>
              Our menu is carefully crafted to offer a wide variety of options to satisfy any taste buds. From classic favorites to modern twists, we have something for everyone.Thank you for considering our restaurant for your next meal. We look forward to welcoming you soon!
              </p>

              <div class="position-relative mt-4">
                <img src={about} class="img-fluid" alt="" />
                <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" class="glightbox play-btn"></a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About
