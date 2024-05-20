import React from 'react';
import styled from 'styled-components';

const DetailsContainer = styled.div`
  border: 2px solid #bd1c4e;
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
  width: 300px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Name = styled.h2`
  font-size: 1.5em;
  margin-bottom: 10px;
  color: #bd1c4e;
  text-align: center;
`;

const Detail = styled.p`
  color: #333;
  margin: 8px 0;
  text-align: left;

  span {
    font-weight: bold;
  }
`;

const ContactDetails = ({ contact }) => {
  return (
    <DetailsContainer>
      <Name>{contact.name}</Name>
      <Detail><span>Email:</span> {contact.email}</Detail>
      <Detail><span>Phone:</span> {contact.phone}</Detail>
      <Detail><span>Website:</span> {contact.website}</Detail>
      <Detail><span>Company:</span> {contact.company.name}</Detail>
      <Detail><span>Address:</span> {`${contact.address.street} ${contact.address.suite}, ${contact.address.city}, ${contact.address.zipcode}`}</Detail>
    </DetailsContainer>
  );
};

export default ContactDetails;