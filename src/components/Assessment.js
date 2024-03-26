import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './Assessment.css';

const classNames = require('classnames');

function Assessment() {
  return (
    <div className="formalign">
      <div className="assessment-container">
        <h2 className="assessment-heading">ASSESSMENT</h2>
        <img src={require('./th.jpg')} className={classNames('assessment-logo')} alt="Notebook Logo" />
        <div className="assessment-details">
          <br />
          <p className={classNames('assessment-total-questions')}>Total Questions: 100</p>
          <br />
          <p className={classNames('assessment-total-time')}>Total Time: 120 minutes</p>
        </div>
        <br />
        <br />
        <Link to="/testpage"> {/* Use Link to navigate to the testpage */}
          <button className={classNames('assessment-button')}>Take Test</button>
        </Link>
      </div>
    </div>
  );
}

export default Assessment;
