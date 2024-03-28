import React from 'react';
import './App.css';
import FlightBookingForm from './FlightBookingForm';
import TrainBookingForm from './TrainBookingForm';

function App() {
  return (
    <div className="App">
      <h1>Hi! Welcome to Travel Booking App</h1>
      <TrainBookingForm />
      <FlightBookingForm />
    </div>
  );
}

export default App;
