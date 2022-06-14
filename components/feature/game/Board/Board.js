import styles from './Board.module.scss';
import { useState } from 'react';

function Keyboard({ guesses, setGuesses }) {
  const [guess, setGuess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (guess.length !== 5) {
      return;
    }

    setGuesses([...guesses, guess]);
    setGuess("");
  }

  const handleChange = (e) => {
    console.log(e.target.value);
    setGuess(e.target.value.replace(/[^a-zA-Z]/g, "").toLowerCase());
  }

  return (
    <div className={styles.board}> 
      <form onSubmit={handleSubmit}>
        <input
          className={styles.row}
          type="text"
          onChange={handleChange}
          maxLength={5}
          value={guess}
          placeholder="Guess"
          required
        />
      </form>
    </div>
  );
}

export default Keyboard;