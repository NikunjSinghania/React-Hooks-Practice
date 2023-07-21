import React, { useEffect, useState } from 'react'

function HookCounterInterval() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        let interval = setInterval(tick, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [])

    const tick = () => {
        setCount(prevCount => prevCount+1 )
    }

  return (
    <div>
        {count}
    </div>
  )
}

export default HookCounterInterval