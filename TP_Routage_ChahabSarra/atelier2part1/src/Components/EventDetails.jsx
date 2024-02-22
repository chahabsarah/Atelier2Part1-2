import React from 'react';

function EventDetails({ event }) {
  return (
    event ? (
      <div>
        <h2>Event Details</h2>
        <p>Name: {event.name}</p>
        <p>Description: {event.description}</p>
        <p>Price: {event.price}</p>
        <p>Number of Participants: {event.nbParticipants}</p>
        <p>Number of Tickets: {event.nbTickets}</p>
      </div>
    ) : null
  );
}

export default EventDetails;
