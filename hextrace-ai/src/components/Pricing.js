import React from 'react';

const PricingCard = ({ plan, price, features, isPopular }) => {
  const cardClasses = isPopular
    ? 'bg-blue-500 text-white'
    : 'bg-gray-800 text-white';
  const buttonClasses = isPopular
    ? 'bg-white text-blue-500'
    : 'bg-blue-500 text-white';

  return (
    <div className={`p-8 rounded-lg border-2 ${isPopular ? 'border-blue-500' : 'border-gray-700'} text-center w-full md:w-1/3`}>
      <h3 className="text-2xl font-bold mb-4">{plan}</h3>
      <div className="text-4xl font-bold mb-4">
        <span className="text-2xl">$</span>
        {price}
        <span className="text-base">/month</span>
      </div>
      <ul className="text-left mb-8">
        {features.map((feature, index) => (
          <li key={index} className="mb-2">✓ {feature}</li>
        ))}
      </ul>
      <button className={`font-bold py-2 px-4 rounded-lg w-full ${buttonClasses}`}>
        Choose Plan
      </button>
    </div>
  );
};

const Pricing = () => {
  const pricingData = {
    starter: {
      plan: "Starter",
      price: "0",
      features: ["Basic Threat Monitoring", "Limited Vulnerability Scans", "Email Support"]
    },
    pro: {
      plan: "Pro",
      price: "49",
      features: ["Advanced Threat Detection", "Unlimited Scans", "Automated Incident Response", "24/7 Priority Support"]
    }
  };

  return (
    <section className="bg-gray-900 text-white py-16 px-8 text-center">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-4">Pricing</h2>
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          Choose the plan that's right for your business.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <PricingCard {...pricingData.starter} />
          <PricingCard {...pricingData.pro} isPopular={true} />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
