// thingspeak.js

import axios from 'axios';

const THINGSPEAK_WRITE_API_KEY = 'OJIRR13ES9FVY8WE'; // Replace with your Write API Key
const THINGSPEAK_CHANNEL_ID = '2694438'; // Replace with your Channel ID

export const sendOrderToThingSpeak = (orderData) => {
  const url = `https://api.thingspeak.com/update?api_key=${OJIRR13ES9FVY8WE}`;
  
  // Construct the data to be sent
  const params = {
    field1: orderData.name,          // Customer Name
    field2: orderData.address,       // Address
    field3: orderData.phone,         // Phone Number
    field4: orderData.cart.map(item => `${item.name} x${item.quantity}`).join(', '), // Ordered Items
    field5: orderData.cart.reduce((acc, item) => acc + item.price * item.quantity, 0) // Total Price
  };

  return axios.post(url, null, { params });
};
