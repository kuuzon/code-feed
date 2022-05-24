import { Fragment } from 'react';
import Head from 'next/head';
import Container from '../components/ui/Container'

function CodlePage() {
  return (
    <Fragment>
      <Head>
        <title>Code-Feed | Codle</title>
        <meta 
          name='description'
          description='Play the Wordle designed for web developers, to test the very best of your coding syntax knowledge!'
        />
      </Head>
      <Container>
        <div>
          <h1>Codle Game</h1>
          <p>The million-dollar Wordle, for insipred web developers!</p>
        </div>
      </Container>
    </Fragment>
  );
}

export default CodlePage;