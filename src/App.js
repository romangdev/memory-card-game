import './App.css';
import { useEffect, useState } from 'react';
import Card from './components/Card'

const App = () => {
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)

  const parentCallbacks ={
    updateScore: () => setScore(score + 1),
    resetScore: () => setScore(0),
  }

  const cardArray = []
  for (let i = 0; i < 12; i++) {
    cardArray.push(<Card id={i} image={i} parentCallbacks={parentCallbacks} score={score} />)
  }

  useEffect(() => {
    if (score > bestScore) setBestScore(score)
  }, [score, bestScore])

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
        <div className='card-board'>
          {cardArray.map((card, i) => {
            return <div key={i}>{card}</div>
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
