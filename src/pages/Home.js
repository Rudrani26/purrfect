import React from "react";
import product1 from "../images/products/brand1.jpg"
import product2 from "../images/products/brand2.jpg"
import product3 from "../images/products/brand3.jpg"
import product4 from "../images/products/brand4.jpg"

const Home = () => {
	return (
		<>
		<section className="sec_1"> 
			<div className="header_height sec_bg d-flex align-items-center">
				<div className="container">
					<div className="col-12 col-md-9 col-lg-9 py-5">
						<h1 className="hdrcolor">Welcome to Purrfect</h1>
						<p className="text-black lead">“An animal’s eyes have the power to speak a great language.” - Martin Buber</p>
						<button className="btn btn-lg col-lg-3 col-6 btn_custom btn_shadow">Our Services</button>
					</div>
				</div>
			</div>
		</section>

		<section> 
			<div className="container mx-auto py-5">
				<div className="mb-4 text-center">
					<p className="display-6 mb-1">What we do</p>
					<p className="text-muted">We offer a one-stop solution where Pets and People Unite in Happiness</p>
				</div>
				<div className="row gy-5 d-flex align-items-center justify-content-evenly mt-0">
					<div className="col-md-4 col-lg-3 text-center">
						<div className="box_border position-relative rounded pt-4 pb-3 px-3">
							<div className="shp"></div>
							<p className="mb-3 mt-4">Complete Pet Care Solutions</p>
							<p className="text-muted text-left text-xl-center text-lg-center">Purrfect offers complete pet care solutions, including health guidance, training, and a variety of pet products.</p>
						</div>
					</div>
					<div className="col-md-4 col-lg-3 text-center">
						<div className="box_border position-relative rounded pt-4 pb-3 px-3">
							<div className="shp"></div>
							<p className="mb-3 mt-4">Enriching Pet and Owner Lives</p>
							<p className="text-muted text-left text-xl-center text-lg-center">Our goal is to enrich pet and owner lives through adoption, vet appointments, and a thriving pet community.</p>
						</div>
					</div>
					<div className="col-md-4 col-lg-3 text-center">
						<div className="box_border position-relative rounded pt-4 pb-3 px-3">
							<div className="shp"></div>
							<p className="mb-3 mt-4">Simplified Pet Parenting</p>
							<p className="text-muted text-left text-xl-center text-lg-center">We're committed to simplifying your pet parenting journey with a one-stop destination for all your furry friend's needs.</p>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section className="sec_2"> 
			<div className="sec_bg py-5">
				<div className="container d-flex justify-content-center align-items-center">
					<div className="col-12 col-md-9 col-lg-6 text-center py-4">
						{/* <p className="display-6 mb-1 text-white">Our Brand Partner</p> */}
						{/* <img className="image-fluid py-3" alt="brand" width="40%" src={web} /> */}
						<p className="text-black lead">Making Pets Smile, One Service at a Time</p>
					</div>
				</div>
			</div>
		</section>

		<section> 
			<div className="container mx-auto py-5">
				<div className="mb-5 text-center">
					<p className="display-6 mb-1">Brands We Trust</p>
					<p className="text-muted">Quality You Can Rely On</p>
				</div>
				<div className="row gy-3 d-flex align-items-center justify-content-evenly">
					<div className="col-md-3 text-center">
						<div className="snip1534">
							<img className="img-fluid" alt="product1"  src={product1} />
							{/* <div className="img_caption">
								<h6>Demo Product</h6>
							</div> */}
						</div>
					</div>
					<div className="col-md-3 text-center">
						<div className="snip1534">
							<img className="img-fluid" alt="product2" src={product2} />
							{/* <div className="img_caption">
								<h6>Demo Product</h6>
							</div> */}
						</div>
					</div>
					<div className="col-md-3 text-center">
						<div className="snip1534">
							<img className="img-fluid" alt="product3" src={product3} />
							{/* <div className="img_caption">
								<h6>Demo Product</h6>
							</div> */}
						</div>
					</div>
					<div className="col-md-3 text-center">
						<div className="snip1534">
							<img className="img-fluid" alt="product4" src={product4} />
							{/* <div className="img_caption">
								<h6>Demo Product</h6>
							</div> */}
						</div>
					</div>
				</div>
			</div>
		</section>

		{/* <section className="bg-light"> 
			<div className="container mx-auto py-5">
				<div className="mb-5 text-center">
					<p className="display-6 mb-1">We Worked With...</p>
					<p className="text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
				</div>
			</div>
		</section> */}

		<section className="sec_5"> 
			<div className="py-5">
				<div className="container d-flex justify-content-center align-items-center">
					<div className="col-12 col-md-9 col-lg-6 py-5 text-center">
						<p className="display-6 mb-1">We're here to help. </p>
						<p className="text-muted">Feel free to reach out to us with any questions, comments, or feedback. Your input is important to us.</p>
						<button className="btn p-2 btn_custom col-lg-3 col-md-5 col-6">GET IN TOUCH</button>
					</div>
				</div>
			</div>
		</section>

		</>
	);
};

export default Home;