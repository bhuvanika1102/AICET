import React, { useState } from 'react';
import axios from 'axios';
import {Form, Input } from 'antd';
import { Link } from 'react-router-dom';

import './Register.css';


export default function Home() {
    const [formValues, setFormValues] = useState({
        email: '',
        name: '',
        course: '',
        password: '',
        mobile: '',
         // Keep it as a string
        
      });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      alert('Registered successfully');
      await axios.post('http://localhost:9090/register', formValues);
    } catch (error) {
      console.log(error);
    }
  };

 
  
  return (
    <div className="App">
      <h2>REGISTRATION YOURSELF</h2>
      <form onSubmit={handleSubmit}>
      <div>
        <Form.Item label = 'Email' name = 'd_email'>
            <Input type = 'email' required onChange={(e) => setFormValues({ ...formValues,d_email: e.target.value })}/>
          </Form.Item>
            
          
          
        </div>
        <div>
          <label>Name                                                            </label>
          <input
            type="text"
            name="name"
            onChange={(e) => setFormValues({ ...formValues, tname: e.target.value })}
          />
        </div>

        <div>
          <label>Course                                               </label>
          <input
            type="text"
            name="course"
            onChange={(e) => setFormValues({ ...formValues, course: e.target.value })}
          />
        </div>
        <div>
        
        <Form.Item label = 'Password' name = 'd_password'>
          <Input type = 'password' required  onChange={(e) => setFormValues({ ...formValues, d_password: e.target.value })}/>
        </Form.Item>
      </div>
        <div>
        <Form.Item
          label="Mobile"
          name="mobile" onChange={(e) => setFormValues({ ...formValues, mobile: e.target.value })}

          rules={[
            {
              required: true,
              message: 'Please enter your phone number',
            },
            {
              pattern: /^\d{10}$/, // Validate 10-digit phone number
              message: 'Please enter a valid 10-digit phone number',
            },
          ]}
        >
          <Input placeholder="Enter your phone number" />
        </Form.Item>
        </div>

       

        
        
       
        

        
      
        
        
        <div>
          <button type="submit" >Register</button>
        </div>
        <br></br>
          <Link to='/login' className='ms-2'><h5>Already an user? Login here</h5></Link>
      </form>
    </div>
  );
}
