import React from 'react';
import { Link } from 'react-router-dom';

const Slide1 = () => {
  return (
    <div>
      <h2>Slide 1</h2>
      <p>This is the content for slide 1.</p>
      <Link to="/Slide1">Learn More</Link>
    </div>
  );
};

export default Slide1;
