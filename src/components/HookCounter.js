import React, { useState } from 'react'

function HookCounter() {

 const [count, countChange] = useState(2)

  return (
    <>
        <button onClick={() => countChange(count+1)}>Click {count}</button>
    </>
  )
}

export default HookCounter