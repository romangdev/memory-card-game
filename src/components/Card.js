import { useEffect, useState } from "react"

const Card = ({ image, id, parentCallbacks, score }) => {
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
    <div onClick={handleClick}>{image}</div>
  )
}

export default Card