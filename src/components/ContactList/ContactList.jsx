import React from 'react';
import Conact from '../Contact';

function ContactList({ contacts, filterContacts, delContact }) {
  return (
    <ul>
      {filterContacts()
        ? filterContacts().map(({ id, name, number }) => {
            return (
              <Conact
                key={id}
                id={id}
                name={name}
                number={number}
                delContact={delContact}
              />
            );
          })
        : contacts.map(({ id, name, number }) => {
            return (
              <Conact
                key={id}
                id={id}
                name={name}
                number={number}
                delContact={delContact}
              />
            );
          })}
    </ul>
  );
}

export default ContactList;
