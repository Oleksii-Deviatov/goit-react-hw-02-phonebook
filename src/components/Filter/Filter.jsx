import React from 'react';

function Filter({ setFind, find }) {
  function inputFindHendler({ target: { value } }) {
    setFind(value);
  }

  return (
    <form>
      <label>
        find contact by name
        <input type="text" value={find} onChange={inputFindHendler} />
      </label>
    </form>
  );
}

export default Filter;
