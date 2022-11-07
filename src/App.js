import './App.css';
import { useEffect, useState } from 'react';
import Card from './components/Card'

const App = () => {
  const [score, setScore] = useState(0)

  const cardArray = []
  for (let i = 0; i < 12; i++) {
    cardArray.push(<Card id={i} image={i} />)
  }

  const resetChosen = () => {

  }

  return (
    <div className="App">
      {cardArray.map((card, i) => {
        return <div key={i}>{card}</div>
      })}
    </div>
  );
}

export default App;
