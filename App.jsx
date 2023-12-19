import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; // Import a CSS file for styling (create a file named App.css)

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [selectedBatch, setSelectedBatch] = useState('');
  const [payment, setPayment] = useState(0);
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [emergencyContact, setEmergencyContact] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Validate age
      if (age < 18 || age > 65) {
        alert('Age must be between 18 and 65.');
        return;
      }

      // Validate payment
      if (payment <= 0) {
        alert('Payment must be greater than 0.');
        return;
      }

      // Validate other fields as needed

      // Validate and process form data
      const formData = {
        name: name,
        age: age,
        selectedBatch: selectedBatch,
        payment: payment,
        contactNumber: contactNumber,
        email: email,
        address: address,
        emergencyContact: emergencyContact,
        // Add other form fields
      };

      // Send form data to the server
      const response = await axios.post('/api/submit-form', formData);

      // Handle the server response
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Yoga Class Admission Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>

        <div className="form-row">
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" value={age} onChange={(e) => setAge(e.target.value)} required />
        </div>

        <div className="form-row">
          <label htmlFor="batch">Select Batch:</label>
          <select id="batch" value={selectedBatch} onChange={(e) => setSelectedBatch(e.target.value)} required>
            {/* <option value="">Select Batch</option> */}
            <option value="6-7AM">6-7AM</option>
            <option value="7-8AM">7-8AM</option>
            <option value="8-9AM">8-9AM</option>
            <option value="5-6PM">5-6PM</option>
          </select>
        </div>

        <div className="form-row">
          <label htmlFor="payment">Payment (Rs INR):</label>
          <input type="number" id="payment" value={payment} onChange={(e) => setPayment(e.target.value)} required />
          
        </div>

        <div className="form-row">
          <label htmlFor="contactNumber">Contact Number:</label>
          <input type="tel" id="contactNumber" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} required />
        </div>

        <div className="form-row">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>

        <div className="form-row">
          <label htmlFor="address">Address:</label>
          <textarea id="address" value={address} onChange={(e) => setAddress(e.target.value)} required></textarea>
        </div>

        <div className="form-row">
          <label htmlFor="emergencyContact">Emergency Contact:</label>
          <input type="text" id="emergencyContact" value={emergencyContact} onChange={(e) => setEmergencyContact(e.target.value)} required />
        </div>
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
