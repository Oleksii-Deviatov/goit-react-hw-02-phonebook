import React, { useState } from 'react';
import shortid from 'shortid';

function ContactForm({ setContacts }) {
  const [name, setName] = useState('');

  function inputHandler(e) {
    setName(e.target.value);
  }

  const [number, setNunber] = useState('');

  function inputNumberHendler(e) {
    setNunber(e.target.value);
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
    </>
  );
}

export default ContactForm;
