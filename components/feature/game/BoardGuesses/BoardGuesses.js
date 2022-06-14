import styles from './BoardGuesses.module.scss'
import { getLetterBackgroundColor } from './services';

function BoardGuesses({ guesses, answer }) {
  return (
    <div className={styles.board}>
      { guesses.map((guess, guessIndex) => (
        <div key={guessIndex} className={styles.row}>
          {guess.split("").map((letter, letterIndex) => (
            <span
              key={letterIndex}
              className={`${styles.tile} ${getLetterBackgroundColor(
                guess,
                letterIndex,
                answer
              )}`}
            >
              {letter}
            </span>
          ))}
        </div>
      )) }
    </div>
  );
}

export default BoardGuesses;