import React, { useState } from 'react';
import shortid from 'shortid';

function PhoneBook() {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const [name, setName] = useState('');

  function inputHandler(e) {
    setName(e.target.value);
  }

  const [number, setNunber] = useState('');

  function inputNumberHendler(e) {
    setNunber(e.target.value);
  }

  const [find, setFind] = useState('');

  function inputFindHendler(e) {
    setFind(e.target.value);
  }

  function filter() {
    if (find === '') {
      return;
    }
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(find.toLowerCase()),
    );
  }

  function submitHandler(e) {
    e.preventDefault();
    setContacts(prevState => [
      ...prevState,
      {
        id: shortid(),
        name,
        number,
      },
    ]);
  }

  return (
    <>
      <h1>Phonebook</h1>
      <form onSubmit={submitHandler}>
        <label>
          name
          <input type="text" value={name} onChange={inputHandler} />
        </label>
        <label>
          number
          <input value={number} type="tel" onChange={inputNumberHendler} />
        </label>
        <button type="submit">add contact</button>
      </form>
      <h2>Contacts</h2>
      <label>
        fing contact by name
        <input type="text" value={find} onChange={inputFindHendler} />
      </label>
      <ul>
        {filter()
          ? filter().map(({ id, name, number }) => {
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
