import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

// Styled components for grid layout
const MenuContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px;
  padding: 20px;
  justify-items: center; /* Center the menu items */
`;

const MenuItem = styled.div`
  background-color: #f8f8f8;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CartContainer = styled.div`
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #fff;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  padding: 10px;
  background-color: #f2f2f2;
  border-radius: 5px;
`;

const CartButtons = styled.div`
  button {
    margin: 0 5px;
    padding: 5px 10px;
    font-size: 16px; /* Increase font size */
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const FilterInput = styled.input`
  padding: 10px;
  margin: 20px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  font-size: 16px;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: #4caf50; /* Change border color on focus */
    box-shadow: 0 0 5px rgba(76, 175, 80, 0.5); /* Add shadow on focus */
  }
`;

const SubmitButton = styled.button`
  display: block;
  margin: 20px auto; /* Centering the button */
  padding: 10px 20px; /* Making it bigger */
  font-size: 18px; /* Increase font size */
  background-color: #4caf50; /* Green color */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #45a049; /* Darker green on hover */
  }
`;

const OrderForm = styled.div`
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #fff;
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

// Function to send order data to ThingSpeak
const sendOrderToThingSpeak = (orderData) => {
  const THINGSPEAK_WRITE_API_KEY = 'YOUR_WRITE_API_KEY'; // Replace with your Write API Key
  const url = `https://api.thingspeak.com/update?api_key=${THINGSPEAK_WRITE_API_KEY}`;

  // Construct the data to be sent
  const params = {
    field1: orderData.name, // Customer Name
    field2: orderData.address, // Address
    field3: orderData.phone, // Phone Number
    field4: orderData.cart.map(item => `${item.name} x${item.quantity}`).join(', '), // Ordered Items
    field5: orderData.cart.reduce((acc, item) => acc + item.price * item.quantity, 0) // Total Price
  };

  return axios.post(url, null, { params });
};

const Menu = () => {
    const menuItems = [
        { id: 1, name: 'Cappuccino', price: 3.5, imageUrl: 'https://source.unsplash.com/featured/?cappuccino' },
        { id: 2, name: 'Latte', price: 4.0, imageUrl: 'https://source.unsplash.com/featured/?latte' },
        { id: 3, name: 'Espresso', price: 2.5, imageUrl: 'https://source.unsplash.com/featured/?espresso' },
        { id: 4, name: 'Croissant', price: 2.0, imageUrl: 'https://source.unsplash.com/featured/?croissant' },
        { id: 5, name: 'Bagel', price: 1.5, imageUrl: 'https://source.unsplash.com/featured/?bagel' },
        { id: 6, name: 'Muffin', price: 2.5, imageUrl: 'https://source.unsplash.com/featured/?muffin' },
        { id: 7, name: 'Flat White', price: 4.0, imageUrl: 'https://source.unsplash.com/featured/?flat-white' },
        { id: 8, name: 'Mocha', price: 4.5, imageUrl: 'https://source.unsplash.com/featured/?mocha' },
        { id: 9, name: 'Chai Latte', price: 3.0, imageUrl: 'https://source.unsplash.com/featured/?chai-latte' },
        { id: 10, name: 'Iced Coffee', price: 3.5, imageUrl: 'https://source.unsplash.com/featured/?iced-coffee' },
        { id: 11, name: 'Scone', price: 2.0, imageUrl: 'https://source.unsplash.com/featured/?scone' },
        { id: 12, name: 'Fruit Tart', price: 3.0, imageUrl: 'https://source.unsplash.com/featured/?fruit-tart' },
        { id: 13, name: 'Pancakes', price: 5.0, imageUrl: 'https://source.unsplash.com/featured/?pancakes' },
        { id: 14, name: 'Omelette', price: 4.5, imageUrl: 'https://source.unsplash.com/featured/?omelette' },
        { id: 15, name: 'Sandwich', price: 5.5, imageUrl: 'https://source.unsplash.com/featured/?sandwich' },
        { id: 16, name: 'Salad', price: 4.0, imageUrl: 'https://source.unsplash.com/featured/?salad' },
        { id: 17, name: 'Nachos', price: 6.0, imageUrl: 'https://source.unsplash.com/featured/?nachos' },
        { id: 18, name: 'Pizza Slice', price: 2.5, imageUrl: 'https://source.unsplash.com/featured/?pizza' },
        { id: 19, name: 'Chocolate Cake', price: 3.5, imageUrl: 'https://source.unsplash.com/featured/?cake' },
        { id: 20, name: 'Ice Cream', price: 2.0, imageUrl: 'https://source.unsplash.com/featured/?ice-cream' },
      ];

  const [cart, setCart] = useState([]);
  const [filter, setFilter] = useState('');
  const [showOrderForm, setShowOrderForm] = useState(false); // To toggle order form
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  // Filter menu items based on user input
  const filteredMenuItems = menuItems.filter(item => 
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  // Add item to cart or increase quantity if already in cart
  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCart(cart.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  // Decrease the quantity of an item in the cart
  const decreaseQuantity = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem.quantity > 1) {
      setCart(cart.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      ));
    } else {
      setCart(cart.filter(cartItem => cartItem.id !== item.id));
    }
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // Show the order form when user confirms the order
  const handleShowOrderForm = () => {
    if (cart.length > 0) {
      const orderData = {
        name,
        address,
        phone,
        cart,
      };

      // Send order to ThingSpeak
      sendOrderToThingSpeak(orderData)
        .then(() => {
          alert('Order submitted successfully!');
          // Reset form and cart
          setCart([]);
          setName('');
          setAddress('');
          setPhone('');
          setShowOrderForm(false);
        })
        .catch((error) => {
          console.error('Error submitting order:', error);
          alert('Error submitting order, please try again later.');
        });
    } else {
      alert('Please add items to your cart first!');
    }
  };

  return (
    <div>
      <h1>Menu</h1>
      <FilterInput
        type="text"
        placeholder="Search Menu"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <MenuContainer>
        {filteredMenuItems.map(item => (
          <MenuItem key={item.id}>
            <img src={item.imageUrl} alt={item.name} width="100" />
            <h2>{item.name}</h2>
            <p>Price: ${item.price.toFixed(2)}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </MenuItem>
        ))}
      </MenuContainer>
      <CartContainer>
        <h2>Cart</h2>
        {cart.map(item => (
          <CartItem key={item.id}>
            <span>{item.name} (x{item.quantity})</span>
            <CartButtons>
              <button onClick={() => decreaseQuantity(item)}>-</button>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </CartButtons>
          </CartItem>
        ))}
        <p>
          Total Price: ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}
        </p>
        <SubmitButton onClick={handleShowOrderForm}>Confirm Order</SubmitButton>
      </CartContainer>
    </div>
  );
};

export default Menu;
