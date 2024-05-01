import { useId } from 'react';
// import { useState } from 'react';

export default function SearchBox({ value, onInput }) {
  const searchNameFieldId = useId();
  return (
    <>
      <label htmlFor={searchNameFieldId}>Find contacts by name</label>
      <input
        type="text"
        name="searchName"
        id={searchNameFieldId}
        value={value}
        onChange={event => {
          onInput(event.target.value);
        }}
      />
      <p>{value}</p>
    </>
  );
}
