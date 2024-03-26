import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';

function App() {
  

  

  return (
    <div>
      <header>
        <nav>
          <ul>
           
            <li className="auth-buttons">
            <Link to="/register">
          <h1><button className="orange-button">Register</button></h1>
        </Link>
        <Link to="/login">
        <h1><button className="orange-button">Login</button></h1>
        </Link>
              
            </li>
          </ul>
        </nav>
      </header>
      <section className="hero"></section>
    
      <footer>
        <p>&copy; 2023 Your Website</p>
      </footer>
    </div>
  );
}

export default App;
