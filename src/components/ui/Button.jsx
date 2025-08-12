import React from 'react'

export default function Button({ variant = 'primary', disabled = false, onClick, children }) {
  const baseClasses = 'px-4 py-2 rounded font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2'
  const variants = {
    primary: 'bg-primary text-white hover:bg-pink-500 focus:ring-pink-400',
    secondary: 'bg-gray-300 text-gray-700 hover:bg-gray-400 focus:ring-gray-400',
  }

  const classes = `${baseClasses} ${variants[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`

  return (
    <button
      className={classes}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
    >
      {children}
    </button>
  )
      }
