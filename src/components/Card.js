import { useEffect, useState } from "react"

const Card = ({ animal, id, parentCallbacks, score }) => {
  const [chosen, setChosen] = useState(false)

  const handleClick = () => {
    if (chosen === false) {
      setChosen(true)
      parentCallbacks.updateScore()
    } else {
      parentCallbacks.resetScore()
    }
  }

  useEffect(() => {
    if (score === 0) {
      setChosen(false)
    }
  }, [score])

  return (
    <div onClick={handleClick}>
      <img src={require(`./images/${animal.name}.jpg`)} alt=""></img>
      <h2>{animal.name}</h2>
    </div>
  )
}

export default Card