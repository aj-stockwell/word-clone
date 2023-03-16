import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

const GuessInput = ( { guessList, setGuessList, answer, gameState, setGameState } ) => {
    
  const [ guess, setGuess ] = React.useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault(); 
    console.log({'guess': guess}); 
    setGuessList([...guessList, guess]); 
    setGuess('')

    if (guess === answer) {
      setGameState('Won')
    } else if (guess !== answer && guessList.length >= NUM_OF_GUESSES_ALLOWED-1) {
      setGameState('Lost')
    }
  }
  
  return (
      <form className="guess-input-wrapper" 
            onSubmit={(event) => 
            {handleFormSubmit(event)}}>
          <label htmlFor="guess-input">Enter guess:</label>
          <input 
              required
              pattern="[a-zA-Z]{5}"
              title="5 letter word"
              id="guess-input" 
              type="text"
              disabled={gameState === '' ? false : true}
              value={guess}
              onChange={(event) => {
                  let nextGuess = event.target.value.toUpperCase();
                  setGuess(nextGuess)}} />
      </form>
  )
}

export default GuessInput;
