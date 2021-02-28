import React, { useState } from 'react';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';
import { Container, Typography } from '@material-ui/core';

function PhoneBook() {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  ]);

  const [find, setFind] = useState('');

  function filterContacts() {
    if (find === '') {
      return;
    }
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(find.toLowerCase()),
    );
  }

  function delContact(id) {
    setContacts(contacts.filter(el => el.id !== id));
  }

  return (
    <>
      <Container maxWidth="xs">
        <Typography variant="h2" align="center">
          Phonebook
        </Typography>

        <ContactForm setContacts={setContacts} contacts={contacts} />

        <Typography variant="h4" align="center">
          Contacts
        </Typography>

        <Filter setFind={setFind} find={find} />

        <ContactList
          contacts={contacts}
          filterContacts={filterContacts}
          delContact={delContact}
        />
      </Container>
    </>
  );
}

export default PhoneBook;
