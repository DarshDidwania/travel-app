import React, { useState } from 'react';

function FlightBookingForm() {
    const [departure, setDeparture] = useState('');
    const [destination, setDestination] = useState('');
    const [date, setDate] = useState('');

    const handleFlightBooking = (e) => {
        e.preventDefault();
        console.log(`Booking flight ticket from ${departure} to ${destination} on ${date}`);
        setDeparture('');
        setDestination('');
        setDate('');
    };

    return (
        <div className="booking-form flight-booking-form">
            <h2>Book Flight Tickets</h2>
            <form onSubmit={handleFlightBooking}>
                <input
                    type="text"
                    placeholder="Departure"
                    value={departure}
                    onChange={(e) => setDeparture(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Destination"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    required
                />
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
                <button type="submit">Book Flight</button>
            </form>
        </div>
    );
}

export default FlightBookingForm;