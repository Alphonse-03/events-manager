import React, { useState } from 'react';
import Navbar from '../../features/Navbar/Navbar';
import Event from '../../features/Event/Event';
import './styles.css';
import { Container } from 'semantic-ui-react';

function App() {
  const [eventForm,setEventForm]=useState(false);
  return (
    <div className="App">
     
        <Navbar setEventForm={setEventForm}/>
        <Container className="main">
        <Event eventForm={eventForm} setEventForm={setEventForm}/>
      </Container>
      
    </div>
  );
}

export default App;
