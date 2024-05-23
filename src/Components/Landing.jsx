import React from 'react';
import { Button } from './Button';
import './Landing.css';

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

export default function Component() {
  return (
    <>
      <header className="header">
        <a href="#">
          <MountainIcon className="icon" />
          <span className="sr-only">Crypto Trading App</span>
        </a>
        <div className="header-text">
          <h1 className="title">Crypto Trading App</h1>
          <p className="subtitle">Revolutionize your trading experience.</p>
        </div>
      </header>
      <main className="main">
        <div className="welcome-card">
          <h2 className="welcome-title">Welcome to Crypto Trading App</h2>
          <p className="welcome-subtitle">Sign in, sign up, or enter as a guest to start trading.</p>
          <div className="button-group">
            <Button className="btn-primary" variant="primary">
              Sign In
            </Button>
            <Button className="btn-secondary" variant="secondary">
              Sign Up
            </Button>
            <Button className="btn-link" variant="link">
              Enter as Guest
            </Button>
          </div>
        </div>
        <div className="why-us-card">
          <h2 className="why-us-title">Why Choose Us?</h2>
          <ul className="features-list">
            <li>
              <CheckIcon className="icon-check" />
              Secure and reliable trading platform
            </li>
            <li>
              <CheckIcon className="icon-check" />
              Advanced trading tools and analytics
            </li>
            <li>
              <CheckIcon className="icon-check" />
              Competitive fees and fast withdrawals
            </li>
            <li>
              <CheckIcon className="icon-check" />
              24/7 customer support
            </li>
          </ul>
        </div>
      </main>
      <footer className="footer">
        <p className="footer-text">© 2024 Crypto Trading App. All rights reserved.</p>
      </footer>
    </>
  );
}
