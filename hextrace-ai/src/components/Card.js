import React from 'react';
import Button from './Button';

const Card = ({ title, description, buttonText }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-sm">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      {buttonText && <Button variant="secondary">{buttonText}</Button>}
    </div>
  );
};

export default Card;
