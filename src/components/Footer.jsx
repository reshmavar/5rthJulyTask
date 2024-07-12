import React from 'react';
import './Footer.css'; // Import your CSS file for styling

const Footer = () => {
  const randomFacts = [
    'The Eiffel Tower can be 15 cm taller during the summer.',
    'On Jupiter and Saturn, it rains diamonds.',
    'A group of flamingos is called a "flamboyance".',
    'Cows have best friends.',
    'The first oranges weren’t orange.',
    'Octopuses have three hearts.',
    'The unicorn is the national animal of Scotland.',
    'A flock of crows is known as a murder.',
    'The longest English word without a vowel is "rhythms".',
    'A day on Venus is longer than a year on Venus.'
  ];

  const randomFact = randomFacts[Math.floor(Math.random() * randomFacts.length)];

  return (
    <footer className="footer">
      <div className="container">
        <p>Random Fun Fact: {randomFact}</p>
        <p>&copy; {new Date().getFullYear()} Your Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
