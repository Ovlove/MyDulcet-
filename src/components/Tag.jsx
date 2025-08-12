import React from 'react'

export default function Tag({ children, onClick }) {
  return (
    <span
      className="bg-primary text-white px-3 py-1 rounded-full text-xs cursor-pointer hover:bg-pink-500 select-none"
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={e => {
        if (onClick && (e.key === 'Enter' || e.key === ' ')) {
          onClick()
        }
      }}
    >
      {children}
    </span>
  )
}
