import React, { useState } from 'react';
import Navbar from '@/component/Navbar';
function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('User registered successfully!');
        // Optionally reset form fields or show success message
      } else {
        console.error('Failed to register user');
        // Handle registration failure
      }
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  console.log(formData);
  return (
    <div>
      <Navbar />
      <h1>Please Signup With TheShop</h1>

      <form  onSubmit={handleSubmit}>
        <div className="username">
          <label className="form__label" htmlFor="firstName">First Name </label>
          <input className="form__input" type="text" id="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
        </div>
        <div className="lastname">
          <label className="form__label" htmlFor="lastName">Last Name </label>
          <input type="text" id="lastName" className="form__input" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
        </div>
        <div className="email">
          <label className="form__label" htmlFor="email">Email </label>
          <input type="email" id="email" className="form__input" placeholder="Email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="password">
          <label className="form__label" htmlFor="password">Password </label>
          <input className="form__input" type="password" id="password" placeholder="Password" value={formData.password} onChange={handleChange} />
        </div>
        <button type="submit">Register</button>
      </form>

      <div className="footer"></div>
    </div>
  );
}

export default RegistrationForm;

 