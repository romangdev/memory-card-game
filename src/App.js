import './App.css';
import { useEffect, useState, useMemo } from 'react';
import Card from './components/Card'

const App = () => {
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)

  const parentCallbacks ={
    updateScore: () => setScore(score + 1),
    resetScore: () => setScore(0),
  }

  const cards = []
  for (let i = 0; i < 12; i++) {
    cards.push(<Card id={i} image={i} parentCallbacks={parentCallbacks} score={score} />)
  }

  const [cardArray] = useState(cards)
  const [displayedCardOrder, setDisplayedCardOrder] = useState([])

  const setRandomCardOrder = (cardArray) => {
    let usedIndexes = []
    let randomIndex
    let displayedCardOrder = []

    for (let i = 0; i < cardArray.length; i++) {
      do {
        randomIndex = Math.floor(Math.random() * 12)
        if (!usedIndexes.includes(randomIndex)) {
          displayedCardOrder.push(cardArray[randomIndex])
        }
      } while (usedIndexes.includes(randomIndex))
      
      usedIndexes.push(randomIndex)
    }
    return displayedCardOrder
  }

  useEffect(() => {
    if (score > bestScore) setBestScore(score)
  }, [score, bestScore])

  useEffect(() => {
    setDisplayedCardOrder(setRandomCardOrder(cardArray))
  }, [cardArray, score])

  return (
    <div className="App">
      <header>
        <h1>Memory Game</h1>
        <div className='score-display'>
          <p>Score: {score}</p>
          <p>Best Score: {bestScore}</p>
        </div>
      </header>
      <main>
        <p>Click each image only once to earn points. Don't click any images more than once!</p>
        <div className='card-board'>
          {displayedCardOrder.map(card => {
            return <div key={card.props.id}>{card}</div>
          })}

          {/* {cardArray.map((card, i) => {
            console.log(card)
            return <div key={i}>{card}</div>
          })} */}
        </div>
      </main>
    </div>
  );
}

export default App;
