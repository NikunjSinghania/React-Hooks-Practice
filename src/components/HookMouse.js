import React, {useState, useEffect} from 'react'

function HookMouse() {
  console.log('hook');
    const [x, mouseX] = useState(0)
    const [y, mouseY] = useState(0)

    const logMousePosition = e => {
        console.log('mousemove');
        mouseX(e.clientX)
        mouseY(e.clientY)
    }

    useEffect(() => {
        console.log('useffect called')
        window.addEventListener('mousemove', logMousePosition)

        return () => {
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, [])
  return (
    <div>
        Hook X = {x} Y = {y}
    </div>
  )
}

export default HookMouse