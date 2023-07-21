import React, { useState } from 'react'
import HookMouse from './HookMouse'

function ClassComp() {
    const [display, setDisplay] = useState(true)

  return (
    
    <div>
        <button onClick={() => setDisplay(!display)}>Change Display</button>
        {display && <HookMouse/>}
    </div>
  )
}

export default ClassComp