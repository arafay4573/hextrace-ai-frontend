import React from 'react';

const FeatureCard = ({ title, description }) => {
  return (
    <div className="bg-gray-800 p-8 rounded-lg text-center">
      <div className="bg-gray-700 h-12 w-12 rounded-full mx-auto mb-4"></div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const Features = () => {
  const featuresData = [
    {
      title: "Real-Time Threat Detection",
      description: "Our AI-powered engine continuously monitors your systems for suspicious activity."
    },
    {
      title: "Advanced Vulnerability Scanning",
      description: "Proactively identify and patch security weaknesses before they can be exploited."
    },
    {
      title: "Automated Incident Response",
      description: "Instantly contain threats and automate remediation workflows to minimize damage."
    }
  ];

  return (
    <section className="bg-gray-900 text-white py-16 px-8 text-center">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-4">Key Features</h2>
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          Everything you need to secure your digital infrastructure.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {featuresData.map(feature => (
            <FeatureCard key={feature.title} title={feature.title} description={feature.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
