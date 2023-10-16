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
      name: 'Basic',
      price: 1000,
      features: ['Feature 1', 'Feature 2', 'Feature 3'],
    },
    {
      name: 'Standard',
      price: 2000,
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
    },
    {
      name: 'Premium',
      price: 3000,
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
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