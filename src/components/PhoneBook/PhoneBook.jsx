import React, { useState } from 'react';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';

function PhoneBook() {
  const [contacts, setContacts] = useState([]);

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
