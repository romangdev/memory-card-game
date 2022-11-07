import { useState } from "react"

const Card = ({ image, id }) => {
  const [chosen, setChosen] = useState(false)

  return (
    <div onClick={() => setChosen(true)}>{image}</div>
  )
}

export default Card