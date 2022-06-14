import { Fragment } from 'react';
import { useEffect, useState } from "react";
import Head from 'next/head';
import axios from "axios";

// Import content / UI
import Container from '../../components/common/Container'
import Description from '../../components/feature/game/Description';
import Board from '../../components/feature/game/Board'
import BoardGuesses from '../../components/feature/game/BoardGuesses';
import GameOver from '../../components/feature/game/GameOver';

function CodlePage({ answer }) {
  const [guesses, setGuesses] = useState([]);

  useEffect(() => {
    setGuesses([]);
  }, [answer]);

  // Win & Lose Condition Variables
  const isWinner = guesses.length > 0 && guesses[guesses.length - 1] === answer;
  const isLoser = guesses.length >= 6 && guesses[guesses.length - 1] !== answer;

  // Winning Board
  if (isWinner) {
    return (
      <Container codle={true}>
        <GameOver guesses={guesses} answer={answer}>
          You win!
        </GameOver>
      </Container>
    );
  }

  // Losing Board
  if (isLoser) {
    return (
      <Container codle={true}>
        <GameOver guesses={guesses} answer={answer}>
          You Lose!
        </GameOver>
      </Container>
    );
  }

  // Default Board
  return (
    <Fragment>
      <Head>
        <title>Code-Feed | Codle</title>
        <meta 
          name='description'
          description='Play the Wordle designed for web developers, to test the very best of your coding syntax knowledge!'
        />
      </Head>
      <Container codle={true}>
        <Description />
        <Board guesses={guesses} setGuesses={setGuesses} />
        <BoardGuesses guesses={guesses} answer={answer} />
      </Container>
    </Fragment>
  );
}

export const getServerSideProps = async () => {
  const response = await axios.get(`${process.env.SERVER_NAME}/api/game/codle`);
  const data = await response.data;

  // NOTE: With our string array, we want to PLUCK a random entry.  We generate a random number (btw 0 & 1), multiple it by the number of array entries, and round it to an even number.  We then call this entry from our array & return as a prop
  const randomNum = Math.floor(Math.random() * data.length);
  const answer = data[randomNum];
  console.log(`Codle Answer: ${answer}`);

  return {
    props: { answer },
  };
};

export default CodlePage;