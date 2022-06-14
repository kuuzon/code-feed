import { Fragment } from 'react';
import { useEffect, useState } from "react";
import Head from 'next/head';
import axios from "axios";

// Import content / UI
import Container from '../../components/common/Container'
import WordleNav from '../../components/feature/complex/WordleNav';

function WordlePage() {
  return (
    <Fragment>
      <Head>
        <title>Code-Feed | Wordle</title>
        <meta 
          name='description'
          description='Play our complex Wordle clone, with all the bells &amp; whistles'
        />
      </Head>
      <Container codle={true}>
        <WordleNav />
      </Container>
    </Fragment>
  );
}

export default WordlePage;