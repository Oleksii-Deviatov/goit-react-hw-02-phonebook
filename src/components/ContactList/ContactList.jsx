import React from 'react';
import Conact from '../Contact';

function ContactList({ contacts, filterContacts }) {
  return (
    <ul>
      {filterContacts()
        ? filterContacts().map(({ id, name, number }) => {
            return <Conact key={id} name={name} number={number} />;
          })
        : contacts.map(({ id, name, number }) => {
            return <Conact key={id} name={name} number={number} />;
          })}
    </ul>
  );
}

export default ContactList;
