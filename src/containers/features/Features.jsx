import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: ' Your Ultimate Security Solution',
    text: 'At SentinelLock, we prioritize the protection of your valuables above all else. Our cutting-edge security system is meticulously designed to provide unparalleled protection for your most cherished assets.',
  },
  {
    title: 'Comprehensive Security Solutions',
    text: 'Whether you are securing your home, office, or commercial property, our customizable security plans are designed to ensure that your valuable belongings remain safe and secure at all times',
  },
  {
    title: 'Your Trust, Our Commitment',
    text: ' At SentinelLock, we are committed to exceeding your expectations and providing you with the peace of mind you deserve.',
  },
  {
    title: 'Experience the SentinelLock Difference',
    text: 'Thank you for choosing SentinelLock as your trusted security partner. We are confident that our comprehensive security solutions will exceed your expectations.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
