import React from 'react';
import './Landing.css';

export function Button({ className, variant, children }) {
  return (
    <button className={`${className} button-${variant}`}>
      {children}
    </button>
  );
}
