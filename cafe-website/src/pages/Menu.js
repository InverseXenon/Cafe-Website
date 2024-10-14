import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWVGusVBkxxeNDVZpHSH4x_RtP6-HndgU",
  authDomain: "cafe-cook-code.firebaseapp.com",
  projectId: "cafe-cook-code",
  storageBucket: "cafe-cook-code.appspot.com",
  messagingSenderId: "534388611148",
  appId: "1:534388611148:web:454751462f79c419f87ce9",
  measurementId: "G-JPL62J5D4S"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Styled components
const MenuContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px;
  padding: 20px;
  justify-items: center;
  background-color: #2e8b57;
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
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: white;
  }

  .increment {
    background-color: #4caf50;
  }

  .decrement {
    background-color: #ff5722;
  }
`;

const FilterInput = styled.input`
  padding: 10px;
  margin: 20px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  font-size: 16px;
  background-color: #2e8b57;
  color: white;
  transition: border-color 0.3s;
  &:focus {
    outline: none;
    border-color: #8fcf8a;
    box-shadow: 0 0 5px rgba(76, 175, 80, 0.5);
  }
`;

const FilterButtons = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  button {
    padding: 10px 20px;
    margin: 0 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: #4caf50;
    color: white;
    font-size: 16px;
    &:hover {
      background-color: #3e8e41;
    }
  }
`;

const SubmitButton = styled.button`
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  font-size: 18px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #45a049;
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

const CouponContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NotificationModal = styled.div`
  display: ${({ show }) => (show ? 'block' : 'none')};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const Overlay = styled.div`
  display: ${({ show }) => (show ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const CouponCode = ({ applyCoupon, couponCode, setCouponCode }) => (
  <CouponContainer>
    <InputField
      type="text"
      placeholder="Enter Coupon Code"
      value={couponCode}
      onChange={(e) => setCouponCode(e.target.value)}
    />
    <SubmitButton onClick={applyCoupon}>Apply Coupon</SubmitButton>
    <p>Available Coupons: DISCOUNT10 - 10% off</p>
  </CouponContainer>
);

const Menu = () => {
  const menuItems = [
    { id: 1, name: 'Cappuccino', category: 'coffee', price: 150 },
    { id: 2, name: 'Latte', category: 'coffee', price: 180 },
    { id: 3, name: 'Espresso', category: 'coffee', price: 120 },
    { id: 4, name: 'Samosa', category: 'snacks', price: 30 },
    { id: 5, name: 'Pav Bhaji', category: 'snacks', price: 70 },
    { id: 6, name: 'Dhokla', category: 'snacks', price: 50 },
    { id: 7, name: 'Flat White', category: 'coffee', price: 160 },
    { id: 8, name: 'Mocha', category: 'coffee', price: 200 },
    { id: 9, name: 'Chai Latte', category: 'coffee', price: 100 },
    { id: 10, name: 'Iced Coffee', category: 'coffee', price: 140 },
    { id: 11, name: 'Paneer Tikka', category: 'appetizer', price: 120 },
    { id: 12, name: 'Biryani', category: 'main course', price: 220 },
    { id: 13, name: 'Masala Dosa', category: 'breakfast', price: 90 },
    { id: 14, name: 'Aloo Paratha', category: 'breakfast', price: 80 },
    { id: 15, name: 'Butter Chicken', category: 'main course', price: 280 },
    { id: 16, name: 'Dal Makhani', category: 'main course', price: 160 },
    { id: 17, name: 'Chole Bhature', category: 'main course', price: 150 },
    { id: 18, name: 'Chaat', category: 'snacks', price: 40 },
    { id: 19, name: 'Gulab Jamun', category: 'dessert', price: 60 },
    { id: 20, name: 'Rasgulla', category: 'dessert', price: 50 },
  ];

  const [cart, setCart] = useState([]);
  const [filter, setFilter] = useState('');
  const [category, setCategory] = useState('all');
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');

  const filteredMenuItems = menuItems.filter(
    (item) =>
      item.name.toLowerCase().includes(filter.toLowerCase()) &&
      (category === 'all' || item.category === category)
  );

  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem && existingItem.quantity > 1) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
        )
      );
    } else {
      setCart(cart.filter((cartItem) => cartItem.id !== item.id));
    }
  };

  const applyCoupon = () => {
    if (couponCode === 'DISCOUNT10') {
      setDiscount(10);
      setNotificationMessage('Coupon applied! 10% off on your total order.');
      setShowNotification(true);
    } else {
      setNotificationMessage('Invalid coupon code.');
      setShowNotification(true);
    }
  };

  const handleOrderSubmit = async () => {
    const orderData = {
      name,
      address,
      phone,
      cart,
      discount,
      totalPrice: cart.reduce((total, item) => total + item.price * item.quantity, 0) * (1 - discount / 100),
    };

    try {
      const docRef = await addDoc(collection(db, "orders"), orderData);
      console.log("Order submitted with ID: ", docRef.id);
      setCart([]);
      setName('');
      setAddress('');
      setPhone('');
      setDiscount(0);
      setShowOrderForm(false);
      setNotificationMessage('Order submitted successfully!');
      setShowNotification(true);
    } catch (e) {
      console.error("Error adding order: ", e);
      setNotificationMessage('Failed to submit order.');
      setShowNotification(true);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [showNotification]);

  return (
    <div>
      <FilterInput
        type="text"
        placeholder="Search for menu items..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <FilterButtons>
      <button onClick={() => setCategory('all')}>All</button>
      <button onClick={() => setCategory('coffee')}>Coffee</button>
      <button onClick={() => setCategory('snacks')}>Snacks</button>
      <button onClick={() => setCategory('appetizer')}>Appetizer</button>
      <button onClick={() => setCategory('main course')}>Main Course</button>
      <button onClick={() => setCategory('breakfast')}>Breakfast</button>
      <button onClick={() => setCategory('dessert')}>Dessert</button>
      </FilterButtons>
      <MenuContainer>
        {filteredMenuItems.map((item) => (
          <MenuItem key={item.id}>
            <h3>{item.name}</h3>
            <p>Rs {item.price.toFixed(2)}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </MenuItem>
        ))}
      </MenuContainer>

      {cart.length > 0 && (
        <CartContainer>
          <h2>Your Cart</h2>
          {cart.map((item) => (
            <CartItem key={item.id}>
              <span>
                {item.name} x {item.quantity}
              </span>
              <CartButtons>
                <button className="increment" onClick={() => addToCart(item)}>+</button>
                <button className="decrement" onClick={() => removeFromCart(item)}>-</button>
              </CartButtons>
            </CartItem>
          ))}
          <CouponCode
            applyCoupon={applyCoupon}
            couponCode={couponCode}
            setCouponCode={setCouponCode}
          />
          <h3>Total: Rs {(cart.reduce((total, item) => total + item.price * item.quantity, 0) * (1 - discount / 100)).toFixed(2)}</h3>
          <SubmitButton onClick={() => setShowOrderForm(true)}>Proceed to Order</SubmitButton>
        </CartContainer>
      )}

      {showOrderForm && (
        <OrderForm>
          <h2>Order Details</h2>
          <InputField
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <InputField
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <InputField
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <SubmitButton onClick={handleOrderSubmit}>Submit Order</SubmitButton>
        </OrderForm>
      )}

      <Overlay show={showNotification} onClick={() => setShowNotification(false)} />
      <NotificationModal show={showNotification}>
        <p>{notificationMessage}</p>
      </NotificationModal>
    </div>
  );
};

export default Menu;
