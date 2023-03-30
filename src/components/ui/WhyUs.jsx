import React from 'react'

function WhyUs() {
  return (
    <section id="why-us" class="why-us section-bg">
      <div class="container" data-aos="fade-up">

        <div class="row gy-4">

          <div class="col-lg-4" data-aos="fade-up" data-aos-delay="100">
            <div class="why-box">
              <h3>Why Choose Yummy?</h3>
              <p>
              Our delicious food and welcoming atmosphere, we also pride ourselves on our exceptional service. Our staff is highly trained and dedicated to providing each and every guest with a memorable dining experience. From the moment you walk in the door, we strive to make you feel comfortable and taken care of.
              </p>
              <div class="text-center">
                <a href="#" class="more-btn">Learn More <i class="bx bx-chevron-right"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-8 d-flex align-items-center">
            <div class="row gy-4">

              <div class="col-xl-4" data-aos="fade-up" data-aos-delay="200">
                <div class="icon-box d-flex flex-column justify-content-center align-items-center">
                  <i class="bi bi-clipboard-data"></i>
                  <h4> Sustainability and eco-friendly</h4>
                  <p>We source our ingredients from local farms and suppliers whenever possible to reduce our carbon footprint and support our community.</p>
                </div>
              </div>

              <div class="col-xl-4" data-aos="fade-up" data-aos-delay="300">
                <div class="icon-box d-flex flex-column justify-content-center align-items-center">
                  <i class="bi bi-gem"></i>
                  <h4>Affordable luxury</h4>
                  <p>At our restaurant, we believe that dining out should be an affordable luxury, which is why we offer competitive prices without compromising on quality. </p>
                </div>
              </div>

              <div class="col-xl-4" data-aos="fade-up" data-aos-delay="400">
                <div class="icon-box d-flex flex-column justify-content-center align-items-center">
                  <i class="bi bi-inboxes"></i>
                  <h4>Delicious food</h4>
                  <p> We also pride ourselves on our exceptional service. Our staff is highly trained and dedicated to providing each and every guest with a memorable dining experience.</p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default WhyUs
