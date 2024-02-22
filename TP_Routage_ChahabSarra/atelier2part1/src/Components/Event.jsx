import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import EventDetails from './EventDetails';

export default function Event(props) {
  const [e, setEvent] = useState(props.e);
  const [showDetails, setShowDetails] = useState(false);

  const bookEvent = () => {
    props.fonctionAlert();
    setEvent((previousE) => ({
      ...previousE,
      nbParticipants: previousE.nbParticipants + 1,
      nbTickets: previousE.nbTickets - 1
    }));
  };

  const changelike = () => {
    setEvent((previousE) => ({
      ...previousE,
      like: !previousE.like
    }));
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <Card style={{ width: '18rem', margin: '20px' }}>
      <Card.Img variant="top" src={e.nbTickets === 0 ? "images/sold_out.png" : `images/${e.img}`} />
      <Card.Body>
        <Card.Title onClick={toggleDetails} style={{ cursor: 'pointer' }}>{e.name}</Card.Title>
        {showDetails && <EventDetails event={e} />}
        <Button variant="primary" onClick={bookEvent} disabled={e.nbTickets === 0}>Book an event</Button>
        <Button variant="danger" onClick={changelike}>{e.like ? "Unlike" : "Like"}</Button>
      </Card.Body>
    </Card>
  );
}
