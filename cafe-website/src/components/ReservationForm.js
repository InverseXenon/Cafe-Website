import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  margin: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  margin: 10px;
  padding: 10px;
  width: 300px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const TextArea = styled.textarea`
  margin: 10px;
  padding: 10px;
  width: 300px;
  height: 100px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  margin: 10px;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #3cb371;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #2e8b57;
  }
`;

function ReservationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reservation made:', formData);
  };

  return (
    <FormContainer>
      <h2>Reserve a Table</h2>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />
        <Input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
        <Input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
        />
        <TextArea
          name="message"
          placeholder="Additional Requests"
          value={formData.message}
          onChange={handleChange}
        />
        <Button type="submit">Reserve Now</Button>
      </form>
    </FormContainer>
  );
}

export default ReservationForm;
