import React, { useState } from 'react';
import styled from 'styled-components';

const ReservationContainer = styled.div`
  padding: 50px;
  background-color: #f9f9f9;
  min-height: 100vh;
`;

const Form = styled.form`
  max-width: 600px;
  margin: 0 auto;
  background: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid #ddd;
  font-size: 1rem;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #f39c12;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    background-color: #d35400;
  }
`;

function Reservations() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required';
    if (!formData.phone || formData.phone.length < 10) newErrors.phone = 'Valid phone number is required';
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.time) newErrors.time = 'Time is required';
    if (!formData.guests || formData.guests <= 0) newErrors.guests = 'Number of guests is required';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      alert('Reservation successfully submitted!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '',
      });
    } else {
      setErrors(validationErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <ReservationContainer>
      <h2>Reserve a Table</h2>
      <Form onSubmit={handleSubmit}>
        <Input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
        />
        {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
        
        <Input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        
        <Input
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
        />
        {errors.phone && <p style={{ color: 'red' }}>{errors.phone}</p>}
        
        <Input
          name="date"
          type="date"
          value={formData.date}
          onChange={handleChange}
        />
        {errors.date && <p style={{ color: 'red' }}>{errors.date}</p>}
        
        <Input
          name="time"
          type="time"
          value={formData.time}
          onChange={handleChange}
        />
        {errors.time && <p style={{ color: 'red' }}>{errors.time}</p>}
        
        <Input
          name="guests"
          type="number"
          value={formData.guests}
          onChange={handleChange}
          placeholder="Number of Guests"
        />
        {errors.guests && <p style={{ color: 'red' }}>{errors.guests}</p>}
        
        <SubmitButton type="submit">Reserve</SubmitButton>
      </Form>
    </ReservationContainer>
  );
}

export default Reservations;
