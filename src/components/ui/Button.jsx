import React from 'react';

export default function Button({ variant = 'primary', size = 'md', disabled = false, onClick, children, className = '' }) {
  const baseClasses = 'rounded font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variants = {
    primary: 'bg-primary text-white hover:bg-pink-500 focus:ring-pink-400',
    secondary: 'bg-gray-300 text-gray-700 hover:bg-gray-400 focus:ring-gray-400',
  };

  const sizes = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-5 py-3 text-lg',
  };

  const classes = `${baseClasses} ${variants[variant] || ''} ${sizes[size] || ''} ${
    disabled ? 'opacity-50 cursor-not-allowed' : ''
  } ${className}`;

  return (
    <button className={classes} disabled={disabled} onClick={disabled ? undefined : onClick}>
      {children}
    </button>
  );
}
