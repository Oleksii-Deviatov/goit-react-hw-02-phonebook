import React, { useState } from 'react';
import ContactForm from '../ContactForm';
// import Filter from '../Filter';

function PhoneBook() {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const [find, setFind] = useState('');

  function inputFindHendler(e) {
    setFind(e.target.value);
  }

  function filterContacts() {
    if (find === '') {
      return;
    }
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(find.toLowerCase()),
    );
  }

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm setContacts={setContacts} />
      <h2>Contacts</h2>
      <form>
        <label>
          find contact by name
          <input type="text" value={find} onChange={inputFindHendler} />
        </label>
      </form>
      <ul>
        {filterContacts()
          ? filterContacts().map(({ id, name, number }) => {
              return (
                <li key={id}>
                  {name}: {number}
                </li>
              );
            })
          : contacts.map(({ id, name, number }) => {
              return (
                <li key={id}>
                  {name}: {number}
                </li>
              );
            })}
      </ul>
    </>
  );
}

export default PhoneBook;
