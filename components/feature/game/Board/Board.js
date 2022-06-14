import styles from './Board.module.scss';
import { useState } from 'react';

function Board({ guesses, setGuesses }) {
  const [guess, setGuess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setGuesses([...guesses, guess]);
    setGuess("");
    
    if (guess.length !== 5) {
      return;
    }
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

export default Board;