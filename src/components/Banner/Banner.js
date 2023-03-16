import React from "react";

function Banner({ gameState, guessList, answer }) {
  const happyBanner = 
  <div className="happy banner">
    <p>
      <strong>Congratulations!</strong> Got it in
      <strong> {guessList?.length} guesses</strong>.
    </p>
  </div>

  const sadBanner = 
    <div className="sad banner">
      <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
    </div>

  const findBannerType = (gameState) => {
    if (gameState === 'Won') {
      return happyBanner
    } else if (gameState === 'Lost') {
      return sadBanner
    }
  }

  return (
    findBannerType(gameState)
  )
}

export default Banner
