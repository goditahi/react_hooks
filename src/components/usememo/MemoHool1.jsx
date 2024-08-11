import React, { useMemo, useState } from 'react'

const MemoHool1 = () => {

    const [count,setCount]=useState(0)
    const [isVisible,setIsVisible]=useState(true)
    const calculation=useMemo(() => expensive(count), [count]);


 

  return (
    <div>MemoHool1

<button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide content' : 'Show content'}
      </button>
      {isVisible && (
        <div>
          <p>This is the content to show/hide.</p>
        </div>
      )}

        <h3>{count}</h3>
        <button onClick={()=>setCount(count+1)}>+Increment</button>

        <h2>Expensive Calculation</h2>
        {calculation}

    </div>
  )
}

const expensive = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
      num += 1;
    }
    return num;
  };


export default MemoHool1