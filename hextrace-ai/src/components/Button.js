import React from 'react';

const Button = ({ children, variant = 'primary', disabled = false }) => {
  const baseClasses = 'px-6 py-2 font-bold rounded-lg focus:outline-none';

  const variantClasses = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    tertiary: 'bg-transparent text-blue-500 hover:underline',
  };

  const disabledClasses = 'bg-gray-300 text-gray-500 cursor-not-allowed';

  const classes = `${baseClasses} ${variantClasses[variant]} ${disabled ? disabledClasses : ''}`;

  return (
    <button className={classes} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
