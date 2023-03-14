import React, { useState } from 'react'
import './counter.css'
const Counter = () => {
  const [counter, setCounter] = useState(0)
  const handlePlusClick = () => {
    setCounter(counter + 1)
    console.log(counter)
  }
  const handleMinusClick = () => {
    if (counter == 0) {
      return
    }
    setCounter(counter - 1)
    console.log(counter)
  }
  return (
    <div className="counterContainer">
      <div onClick={handlePlusClick} style={{ marginRight: 10, fontSize: 30 }}>
        +
      </div>
      <div> {counter} </div>
      <div onClick={handleMinusClick} style={{ marginLeft: 10, fontSize: 30 }}>
        -
      </div>
    </div>
  )
}

export default Counter
