import React, { useState } from 'react';
import shortid from 'shortid';

function ContactForm({ setContacts, contacts }) {
  const [inputName, setInputName] = useState('');

  function inputNameHandler({ target: { value } }) {
    setInputName(value);
  }

  const [inputNumber, setInputNumber] = useState('');

  function inputNumberHendler({ target: { value } }) {
    setInputNumber(value);
  }

  function submitHandler(e) {
    e.preventDefault();
    if (
      contacts.find(
        ({ name }) => name.toLowerCase() === inputName.toLowerCase(),
      )
    ) {
      alert(`${inputName} already exist`);
      return;
    }

    setContacts(prevState => [
      ...prevState,
      {
        id: shortid(),
        name: inputName,
        number: inputNumber,
      },
    ]);
  }

  return (
    <form onSubmit={submitHandler}>
      <label>
        name
        <input type="text" value={inputName} onChange={inputNameHandler} />
      </label>
      <label>
        number
        <input value={inputNumber} type="tel" onChange={inputNumberHendler} />
      </label>
      <button type="submit">add contact</button>
    </form>
  );
}

export default ContactForm;
