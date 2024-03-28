import React, { useState } from 'react';

function TrainBookingForm() {
    const [departure, setDeparture] = useState('');
    const [destination, setDestination] = useState('');
    const [date, setDate] = useState('');

    const handleTrainBooking = (e) => {
        e.preventDefault();
        console.log(`Booking train ticket from ${departure} to ${destination} on ${date}`);
        setDeparture('');
        setDestination('');
        setDate('');
    };

    return (
        <div className="booking-form train-booking-form">
            <h2>Book Train Tickets</h2>
            <form onSubmit={handleTrainBooking}>
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
                <button type="submit">Book Train</button>
            </form>
        </div>
    );
}

export default TrainBookingForm;
