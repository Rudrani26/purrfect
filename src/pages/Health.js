import React from "react";
import Secheader from "./common/Secondaryheader";
import Chatbot from './Chatbot'; 

// import CheckIcon from '@material-ui/icons/Check';


const Life = (props) => {
	return(
		<div className="d-flex align-items-center mb-4">
			<span className="career_life"></span>
			<span className="d-flex flex-column">
				<h5>{props.ltitle}</h5>
				<p className="small text-muted">{props.ldesc}</p>
			</span>
		</div>
	);
};


const Positions = (props) => {
	return(		
		<div className="d-flex justify-content-between align-items-center mb-3">
			<span className="d-flex flex-column">
				<p className="mb-0">{props.ptitle}</p>
				<p className="small text-muted">{props.pcity}</p>
			</span>
			<span>
				<button className="btn btn_custom mr-4">Read</button>
			</span>
		</div>
	);
};

const Health = () => {
	return(

		<>
			<Secheader 
				sectitle="Health and Nutrition" 
				secdesc="Nurture your Pawsome friends!" 
			/>

			<section>
				<div className="container mx-auto py-5 col-lg-10 col-xl-9">
					<div className="mb-5 text-center">
						<h2 className="display-6 mb-1">Pet Nutrition</h2>
						<p className="text-muted">Learn about the best nutrition tips for your pet.</p>
					</div>
					<div className="row col-lg-10 m-auto">
						<div className="col-md-5 mb-4">
							<div className="hdrcolor h5">Dogs</div>
							<hr width="40%" />
							<Positions 
								ptitle="Balanced Diet and Nutrient Intake"
								pcity="Reading Time: 10min"
							/>
							<Positions 
								ptitle="Common Food Allergies and Sensitivities"
								pcity="Reading Time: 13min"
							/>
						</div>
						<div className="col-md-5 mb-4 offset-lg-1">
							<div className="hdrcolor h5">Fish</div>
							<hr width="40%" />
							<Positions 
								ptitle="Proper Aquarium Diet"
								pcity="Reading Time: 7min"
							/>
							<Positions 
								ptitle="Water Quality Management"
								pcity="Reading Time: 10min"
							/>
						</div>
						<div className="col-md-5">
							<div className="hdrcolor h5">Cats</div>
							<hr width="40%" />
							<Positions 
								ptitle="High Quality Cat Food"
								pcity="Reading Time: 10min"
							/>
							<Positions 
								ptitle="Feeding Patterns"
								pcity="Reading Time: 15min"
							/>
						</div>
						<div className="col-md-5 offset-lg-1">
							<div className="hdrcolor h5">Birds</div>
							<hr width="40%" />
							<Positions 
								ptitle="Avian Nutrition"
								pcity="Reading Time: 12min"
							/>
							<Positions 
								ptitle="Pellet vs Seed Diets"
								pcity="Reading Time: 10min"
							/>
						</div>
					</div>
				</div>
			</section>

			<section className="bg-light">
				<div className="container mx-auto py-5 col-lg-10 col-xl-9">
					<div className="mb-5 text-center">
						<h2 className="display-6 mb-1">Recommendations</h2>
						<p className="text-muted">Ask us anything you'd like to know about your Pet's Health and Wellbeing.</p>
					</div>
					<Chatbot/>
					<br></br>
					<br></br>
					<div className="row col-lg-10 m-auto">
						<div className="col-md-6">
						<h2 className="display-6 mb-1" align='center'>Points to Keep in Mind</h2>
						<br></br>
							<Life ltitle="Balanced Diet" ldesc="Ensure your pet receives a well-balanced diet that includes all necessary nutrients.Consult with your veterinarian to choose the right type and amount of food for your pet's age, breed, and health condition." />
							<Life ltitle="Fresh Water" ldesc="Always provide clean and fresh water for your pet. Hydration is essential for their overall health." />
						</div>
						<div className="col-md-6">
							<br></br>
							<br></br>
							<br></br>
							<Life ltitle="Portion Control" ldesc="Avoid overfeeding your pet. Measure their food portions according to guidelines on the pet food packaging and consider their activity level to prevent obesity." />
							<Life ltitle="Regular Exercise" ldesc=" Encourage regular exercise to maintain a healthy weight and promote mental and physical well-being.  Playtime, walks, and interactive toys are great ways to keep your pet active." />
						</div>
					</div>
				</div>
			</section>

		</>
	);
};

export default Health;