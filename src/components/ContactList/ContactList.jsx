import React from 'react';
import Conact from '../Contact';
import { makeStyles } from '@material-ui/core/styles';
import { List } from '@material-ui/core';
const useStyles = makeStyles({
  list: {
    margin: 0,
    padding: 0,
  },
});

function ContactList({ contacts, filterContacts, delContact }) {
  const classes = useStyles();

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
