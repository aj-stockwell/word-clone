import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessList from '../GuessList/GuessList';
import Banner from '../Banner/Banner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [ guessList, setGuessList ] = React.useState([])
  const [gameState, setGameState ] = React.useState('')
  
  return (
  <div>
    <Banner gameState={gameState} guessList={guessList} answer={answer} />
    <GuessList guessList={guessList} answer={answer} />
    <GuessInput guessList={guessList} setGuessList={setGuessList} answer={answer} gameState={gameState} setGameState={setGameState}/>
  </div>
  )
}

export default Game;
