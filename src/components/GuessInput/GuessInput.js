import React, { useState } from 'react';

function GuessInput({ handleSubmitGuess }) {
  const [newGuess, setNewGuess] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    console.info({ newGuess });

    handleSubmitGuess(newGuess);
    setNewGuess('');
  };
  return (
    <form className='guess-input-wrapper' onSubmit={e => handleSubmit(e)}>
      <label htmlFor='guess-input'>Enter guess: </label>
      <input
        id='guess-input'
        maxLength={5}
        pattern='[a-zA-Z]{5}'
        type='text'
        value={newGuess}
        title='Please enter a 5-letter word, using only the letters A-Z.'
        onChange={e => setNewGuess(e.target.value.toUpperCase())}
      />
      <div>Your answer: {newGuess}</div>
    </form>
  );
}

export default GuessInput;
