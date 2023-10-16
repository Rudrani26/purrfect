import React from 'react';
import '../scss/Products.css';
import '../scss/component.css';
import foodimg from '../images/food.jpg'
import grooming from '../images/grooming.jpg';
import beds from '../images/beds.jpg';
import hygiene from '../images/hygiene.jpg';
import accesso from '../images/accessories.jpg';
import toys from '../images/toys.jpg';
import bg from '../images/bg3.png';
import Secheader from "./common/Secondaryheader";

const FlexCard = (props) => {
  return (
    <div className="flex-card">
      <img src={props.imageSrc} alt={props.imageAlt} />
      <h3>{props.heading}</h3>
      <p>{props.text}</p>
      <a href="https://supertails.com/?utm_campaign=&utm_device=c&utm_term=&network=x&utm_medium=cpc&utm_source=google&agid=&ap=&aoi=&ci=20625739363&cre=&fid=&lop=1007785&ma=&mo=&pl=&ti=&gclid=CjwKCAjwvrOpBhBdEiwAR58-3J6koKK5YmzoHQ-UYemG_FpxqWhGetx4eCMoHixiINNDDLhOLyO7AhoCcuUQAvD_BwE"><button>Buy Now</button></a>

    </div>
  );
};
const FlexCardsContainer = (props) => (
  <div className="card-container">
   <FlexCard
  imageSrc={foodimg}
  imageAlt="Pet Food"
  heading="Pet Food"
  text="This is some text describing the card."
  buttonText="Buy Now"
/>
<FlexCard
  imageSrc={hygiene}
  imageAlt="Pet Hygiene"
  heading="Pet Hygiene"
  text="This is some text describing the card."
  buttonText="Buy Now"
/>
<FlexCard
  imageSrc={accesso}
  imageAlt="Accessories"
  heading="Accessories"
  text="This is some text describing the card."
  buttonText="Buy Now"
/>

<FlexCard
  imageSrc={grooming}
  imageAlt="Pet Grooming"
  heading="Pet Grooming"
  text="This is some text describing the card."
  buttonText="Buy Now"
/>
<FlexCard
  imageSrc={toys}
  imageAlt="Toys"
  heading="Toys"
  text="This is some text describing the card."
  buttonText="Buy Now"
/>
<FlexCard
  imageSrc={beds}
  imageAlt="Pet Beds"
  heading="Beds & Storage"
  text="This is some text describing the card."
  buttonText="Buy Now"
/>
  </div>
);

const Products = () => {
  return(
    <>
			<Secheader 
				sectitle="Products" 
				secdesc="Discover some Pawsome Pet Products. Explore our extensive range of pet products and choose your Purrfect Pick!" 
			/>

    <div>
      <h3><br></br>CATEGORIES YOU CAN SHOP FROM</h3>
      <br></br>
      <br></br>
      <section>
      <FlexCardsContainer/>
</section>
</div>
    
    </>
	);
};
export default Products;
