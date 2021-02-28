import React, { useState } from 'react';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';

function PhoneBook() {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
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
      <h1>Phonebook</h1>
      <ContactForm setContacts={setContacts} contacts={contacts} />
      <h2>Contacts</h2>
      <Filter setFind={setFind} find={find} />
      <ContactList
        contacts={contacts}
        filterContacts={filterContacts}
        delContact={delContact}
      />
    </>
  );
}

export default PhoneBook;
