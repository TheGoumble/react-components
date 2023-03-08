import { useState } from "react"
import "./main.css"

const Main = () => {
  const [color, setColor] = useState(0)

  const changer = (x) => {
    return x === 1
      ? "maroon"
      : x === 2
      ? "blue"
      : x === 3
      ? "green"
      : x === 4
      ? "violet"
      : x === 5
      ? "gray"
      : ""
      
  }

  return (
    <div className={`main ${changer(color)}`}>
      <h2>This is the main content</h2>
      <span>
        <button onClick={setColor[1]}>Click me</button>
        <button onClick={setColor[2]}>Click me</button>
        <button onClick={setColor[3]}>Click me</button>
        <button onClick={setColor[4]}>Click me</button>
        <button onClick={setColor[5]}>Click me</button>
      </span>
    </div>
  )
}

export default Main
