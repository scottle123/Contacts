import React from 'react';
import styled from 'styled-components';

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 70%;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

const ListItem = styled.div`
  width: calc(45% - 50px);
  margin-bottom: 20px;
  padding: 15px;
  border: 2px solid #bd1c4e;
  border-radius: 10px;
  cursor: pointer;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  color: #333;
  font-weight: bold;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    background-color: #bd1c4e;
    color: white;
  }

  @media (max-width: 768px) {
    width: 90%; 
  }
`;

const ContactList = ({ contacts, onContactClick }) => {
  return (
    <ListContainer>
      {contacts.map(contact => (
        <ListItem key={contact.id} onClick={() => onContactClick(contact)}>
          {contact.name}
        </ListItem>
      ))}
    </ListContainer>
  );
};

export default ContactList;