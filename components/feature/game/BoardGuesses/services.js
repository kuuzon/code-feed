import styles from './BoardGuesses.module.scss'

module.exports = {
  getLetterBackgroundColor(guess, index, answer) {
    if (answer[index] === guess[index]) {
      return styles.correct;
    }
  
    const countOfLetterOccuringInAnswer = answer
      .split("")
      .filter((letter) => letter === guess[index]).length;
  
    const countOfLetterOccuringInGuessBeforeCurrentIndex = guess
      .slice(0, index)
      .split("")
      .filter((letter) => letter === guess[index]).length;
  
    if (
      answer.includes(guess[index]) &&
      countOfLetterOccuringInAnswer >
        countOfLetterOccuringInGuessBeforeCurrentIndex
    ) {
      return styles.present;
    }
  
    return styles.empty;
  }
}