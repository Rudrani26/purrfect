import React from 'react';
import '../scss/Products.css';
import foodimg from '../images/food.jpg'
import grooming from '../images/grooming.jpg';
import beds from '../images/beds.jpg';
import hygiene from '../images/hygiene.jpg';
import accesso from '../images/accessories.jpg';
import toys from '../images/toys.jpg';
import bg from '../images/bg3.png';

function Products() {
  return (
    <div>
    <section class="section-a">
  <div class="container">
    <img src={bg} width='100%' class="background-img"/>
    <div class="content">
      <h1 id="product">Products</h1>
      <p>
      Discover some Pawsome Pet Products!<br></br>Explore our extensive range of pet products and choose your Purrfect Pick.
      </p>
      <a href="#" class="btn">Scroll to Learn More</a>
    </div>
  </div>
</section>
      
      <h3><br></br>CATEGORIES YOU CAN SHOP FROM</h3>
      <div className="flexcontainer">
        {/* CARD 1 */}
        <div className="card-item">
          <div className="card-body">
            <img className="card-img" src={foodimg} />
            <h2 className="card-title center">PET FOOD</h2>
            <div className="card-footer center">
              <a className="btn" href="https://shorturl.at/ehjAB">Buy Now</a>
            </div>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="card-item">
          <div className="card-body">
            <img className="card-img" src={hygiene}/>
            <h2 className="card-title center">HYGIENE</h2>
            <div className="card-footer center">
              <a className="btn" href="https://shorturl.at/ehjAB">Buy Now</a>
            </div>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="card-item">
          <div className="card-body">
            <img className="card-img" src={accesso}/>
            <h2 className="card-title center">ACCESSORIES</h2>
            <div className="card-footer center">
              <a className="btn" href="https://shorturl.at/ehjAB">Buy Now</a>
            </div>
          </div>
        </div>

        {/* CARD 4 */}
        <div class="card-item">
			<div class="card-body">
				<img class="card-img" src={grooming} />
				<h2 class="card-title center">PET GROOMING</h2>
				<div class="card-footer center">
					<a class="btn" href="https://shorturl.at/ehjAB">Buy Now</a>
				</div>
			</div>
		</div>

        {/* CARD 5 */}
        <div class="card-item">
			<div class="card-body">
				<img class="card-img" src={toys} />
				<h2 class="card-title center">TOYS</h2>
				<div class="card-footer center">
					<a class="btn" href="https://shorturl.at/ehjAB">Buy Now</a>
				</div>
			</div>
		</div>

        {/* CARD 6 */}
        <div class="card-item">
			<div class="card-body">
				<img class="card-img" src={beds}/>
				<h2 class="card-title center">BEDS AND STORAGE</h2>
				<div class="card-footer center">
					<a class="btn" href="https://shorturl.at/ehjAB">Buy Now</a>
				</div>
			</div>
		</div>
      </div>
    </div>
  );
}

export default Products;
