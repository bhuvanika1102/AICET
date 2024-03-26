import React from 'react';
import './Testpage.css';

function TestPage() {
  return (
    <div className="abody">
    <div className="test-page">
      <h2>Select Your Test Options</h2>
      <select name="level">
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="advanced">Advanced</option>
      </select>
      <select name="commonSubject">
        <option value="math">Math</option>
        <option value="science">Science</option>
        <option value="english">English</option>
      </select>
      <select name="year">
        <option value="2023">2023</option>
        <option value="2024">2024</option>
        <option value="2025">2025</option>
      </select>
      <select name="specialization">
        <option value="data science">Data Science</option>
        <option value="machine learning">Machine Learning</option>
        <option value="web development">Web Development</option>
      </select>
      <button>Start Test</button>
    </div>
    </div>
  );
}

export default TestPage;
