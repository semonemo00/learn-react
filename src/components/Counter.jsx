import React, { useState } from 'react'

const Counter = ({step = 1, onIncreaseClick}) => {
  // logic
  // let count = 0;
  // state
  const [count, setCount] = useState(0)
  const MAX = 10
  const MIN = 0

  // 미션2: 최대 증가값: 10, 최대 감소값:0

  const handleIncrease = () => {
    // count += 1
    // count가 MAX보다 크거나 같다면 set하지 말기
        if(count >= MAX) return
        setCount(count+step)
        onIncreaseClick()
    console.log("🚀 ~ Counter ~ count:", count)
  }

  

  // 미션: -1 버튼 클릭시 count의 값이 1씩 감소되는 함수 연결
  const handleDecrease = () => {
    // count -= 1

        // setCount(count-1)
        if(count <= MIN) return
        setCount((prev) => count <= MIN ? count : prev - step)
    console.log("🚀 ~ Counter ~ count:", count)
  }

  
  

  // view
  return (
    <div>
      <h1>카운터</h1>
      <h2>{count}</h2>
      <div>
        <button type="button" onClick={handleIncrease}>+{step}</button>
        
        <button type="button" onClick={handleDecrease}>-{step}</button>
      </div>
    </div>
  )
}

export default Counter
