import React from 'react';

const PricingPlan = ({ plan }) => {
  return (
    <div className="pricing-plan">
      <h2>{plan.name}</h2>
      <p className="price">Rs.{plan.price} / month</p>
      <ul className="features">
        {plan.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button className="select-button">Select Plan</button>
    </div>
  );
};

const PricingPage = () => {
  // Define your pricing plans as an array of objects
  const plans = [
    {
      name: 'Free Plan',
      price: 0,
      features: ['Pet Health and Nutrition Blogs', 'Training Content', 'Pet Profile Customization', 'Pet Community & Adoption'],
    },
    {
      name: 'Basic',
      price: 349,
      features: ['Includes all Free Plan features', 'Discount and Offers', 'Priority Support', 'Pet Events and Activities', 'Ad-Free Experience'],
    },
    {
      name: 'Premium',
      price: 649,
      features: ['Includes all Free Plan features', '24/7 Vet Consultations', 'Pet Health Tracking', 'Emergency Services', 'Pet Insurance Integration', 'Pet Events and Activities'],
    },
  ];

  return (
    <div className="pricing-page">
      <h1>Purrfect+ Plans</h1>
      <div className="pricing-plans">
        {plans.map((plan, index) => (
          <PricingPlan key={index} plan={plan} />
        ))}
      </div>
    </div>
  );
};

export default PricingPage;