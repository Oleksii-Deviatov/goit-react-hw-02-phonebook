import React from 'react';

function Conact({ id, name, number, delContact }) {
  return (
    <li>
      {name}: {number}
      <button type="button" onClick={() => delContact(id)}>
        del
      </button>
    </li>
  );
}

export default Conact;
