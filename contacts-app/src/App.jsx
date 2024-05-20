import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ContactList from './components/ContactList';
import ContactDetails from './components/ContactDetails';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center;
  padding: 20px;
  text-align: center; 
`;

const Title = styled.h1`
  font-size: 2em;
  color: #333;
  margin-bottom: 20px;
`;

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setContacts(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the contacts!", error);
      });
  }, []);

  const handleContactClick = (contact) => {
    setSelectedContact(contact);
  };

  return (
    <AppContainer>
      <Title>Contacts</Title>
      <ContactList contacts={contacts} onContactClick={handleContactClick} />
      {selectedContact && <ContactDetails contact={selectedContact} />}
    </AppContainer>
  );
};

export default App;