import React from 'react';
import menu1 from '../../assets/img/menu/menu-item-1.png';
import menu2 from '../../assets/img/menu/menu-item-2.png';
import menu3 from '../../assets/img/menu/menu-item-3.png';
import menu4 from '../../assets/img/menu/menu-item-4.png';
import menu5 from '../../assets/img/menu/menu-item-5.png';
import menu6 from '../../assets/img/menu/menu-item-6.png';

function Menu() {
  return (
    <section id="menu" class="menu">
      <div class="container" data-aos="fade-up">

        <div class="section-header">
          <h2>Our Menu</h2>
          <p>Check Our <span>Yummy Menu</span></p>
        </div>

        <ul class="nav nav-tabs d-flex justify-content-center" data-aos="fade-up" data-aos-delay="200">

          <li class="nav-item">
            <a class="nav-link active show" data-bs-toggle="tab" data-bs-target="#menu-starters">
              <h4>Starters</h4>
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="tab" data-bs-target="#menu-breakfast">
              <h4>Breakfast</h4>
            </a>
        </li>
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="tab" data-bs-target="#menu-lunch">
              <h4>Lunch</h4>
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="tab" data-bs-target="#menu-dinner">
              <h4>Dinner</h4>
            </a>
          </li>

        </ul>

        <div class="tab-content" data-aos="fade-up" data-aos-delay="300">

          <div class="tab-pane fade active show" id="menu-starters">

            <div class="tab-header text-center">
              <p>Menu</p>
              <h3>Starters</h3>
            </div>

            <div class="row gy-5">

              <div class="col-lg-4 menu-item">
                <a href="assets/img/menu/menu-item-1.png" class="glightbox"><img src={menu1} class="menu-img img-fluid" alt="" /></a>
                <h4>Magnam Tiste</h4>
                <p class="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p class="price">
                  $5.95
                </p>
              </div>

              <div class="col-lg-4 menu-item">
                <a href="assets/img/menu/menu-item-2.png" class="glightbox"><img src={menu2} class="menu-img img-fluid" alt="" /></a>
                <h4>Aut Luia</h4>
                <p class="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p class="price">
                  $14.95
                </p>
              </div>

              <div class="col-lg-4 menu-item">
                <a href="assets/img/menu/menu-item-3.png" class="glightbox"><img src={menu3} class="menu-img img-fluid" alt="" /></a>
                <h4>Est Eligendi</h4>
                <p class="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p class="price">
                  $8.95
                </p>
              </div>

              <div class="col-lg-4 menu-item">
                <a href="assets/img/menu/menu-item-4.png" class="glightbox"><img src={menu4} class="menu-img img-fluid" alt="" /></a>
                <h4>Eos Luibusdam</h4>
                <p class="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p class="price">
                  $12.95
                </p>
              </div>

              <div class="col-lg-4 menu-item">
                <a href="assets/img/menu/menu-item-5.png" class="glightbox"><img src={menu5} class="menu-img img-fluid" alt="" /></a>
                <h4>Eos Luibusdam</h4>
                <p class="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p class="price">
                  $12.95
                </p>
              </div>

              <div class="col-lg-4 menu-item">
                <a href="assets/img/menu/menu-item-6.png" class="glightbox"><img src={menu6} class="menu-img img-fluid" alt="" /></a>
                <h4>Laboriosam Direva</h4>
                <p class="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p class="price">
                  $9.95
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Menu
