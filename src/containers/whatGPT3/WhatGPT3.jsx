import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is SentinelLock" text="In a world where security concerns are paramount, SentinelLock emerges as a beacon of innovation, leveraging cutting-edge machine learning technology to redefine the landscape of protection. SentinelLock is not just a security system; it's a comprehensive solution designed to safeguard your valuable assets with unparalleled vigilance and efficiency." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text"> Detect, Alert, Protect: The SentinelLock Approach</h1>
      <p>Protect your valuable things</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title=" Motion Detection" text="SentinelLock employs advanced machine learning algorithms to power its motion detection capabilities" />
      <Feature title="Multi-faceted Alert System:" text="Upon detecting motion, SentinelLock initiates a comprehensive alert system to notify the user." />
      <Feature title="Continuous Monitoring:" text="Enables users to stay informed and in control, regardless of their location." />
    </div>
  </div>
);

export default WhatGPT3;
