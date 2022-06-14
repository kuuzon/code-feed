import { Fragment } from 'react';
import Link from "next/link";
import styles from './GameOver.module.scss'
import BoardGuesses from "../BoardGuesses";
import Button from '../../../common/Button'

function GameOver({ answer, guesses, children }) {
  return (
    <Fragment>
      <h1 className={styles.lead}>{children}</h1>
      <h2>
        The answer was <span className={styles.answer}>{answer}</span>
      </h2>
      <BoardGuesses guesses={guesses} answer={answer} />
      <Button href="/codle" wordle={true}>Play Again</Button>
    </Fragment>
  );
}

export default GameOver;