import React from 'react';

const Badge = ({ children, variant = 'info' }) => {
  const baseClasses = 'px-2 py-1 rounded-full text-xs font-semibold';

  const variantClasses = {
    critical: 'bg-red-100 text-red-800',
    warning: 'bg-yellow-100 text-yellow-800',
    info: 'bg-blue-100 text-blue-800',
  };

  const classes = `${baseClasses} ${variantClasses[variant]}`;

  return (
    <span className={classes}>
      {children}
    </span>
  );
};

export default Badge;
