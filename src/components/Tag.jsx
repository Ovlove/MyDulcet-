import React, { useCallback } from 'react';

export default function Tag({ children, onClick, href }) {
  const isInteractive = !!onClick || !!href;

  const handleKeyDown = useCallback(
    (e) => {
      if (isInteractive && (e.key === 'Enter' || e.key === ' ')) {
        e.preventDefault();
        if (onClick) onClick();
        else if (href) window.location.href = href;
      }
    },
    [isInteractive, onClick, href]
  );

  const TagComponent = href ? 'a' : 'span';

  return (
    <TagComponent
      className={`bg-primary text-white px-3 py-1 rounded-full text-xs select-none ${
        isInteractive ? 'cursor-pointer hover:bg-pink-500' : ''
      }`}
      onClick={onClick}
      href={href}
      role={isInteractive && !href ? 'button' : undefined}
      tabIndex={isInteractive ? 0 : undefined}
      onKeyDown={handleKeyDown}
    >
      {children}
    </TagComponent>
  );
    }
