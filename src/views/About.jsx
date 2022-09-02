import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function About() {
  return (
    <div>
      <h3>About</h3>
      <button><Link to="/about/company">See company information</Link></button>
      <button><Link to="/about/products">See products information</Link></button>
      <Outlet />
    </div>
  )
}
