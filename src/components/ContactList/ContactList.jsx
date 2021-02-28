import React from 'react';
import Conact from '../Contact';
import { List } from '@material-ui/core';

function ContactList({ contacts, filterContacts, delContact }) {
  return (
    <List>
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
    </List>
  );
}

export default ContactList;
