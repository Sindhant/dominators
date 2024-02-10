import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h1 className="gradient__text">Peace of Mind Through  <br /> Vigilant Monitoring</h1>
      <p> We believe in delivering not just a service but a comprehensive solution that ensures your valuable belongings remain safe and secure. Thank you for entrusting us with your security needs, and we look forward to providing you with the highest level of protection through Sentinel Lock. </p>
      
      {/* Button wrapped with anchor tag */}
      <a href="https://drive.google.com/drive/folders/1-5aeRbHgNe2ZtC8y58A32nUuzkVD9M2E?usp=sharing" target="_blank" rel="noopener noreferrer" className='gpt3__header-content__input button'>Access Your Data</a>
    </div>
  </div>
);

export default Possibility;
