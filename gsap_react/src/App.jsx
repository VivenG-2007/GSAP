import React, { useRef, useState } from 'react'
import './App.css'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

export default function App() {
  const [xval, setXval] = useState(0)
  const [yval, setYval] = useState(0)
  const [rotate, setRotate] = useState(0)
  const box = useRef()

  const { contextSafe } = useGSAP()

  const rotateBox = contextSafe(() => {
    const ran1 = gsap.utils.random(-500, 500, 100)
    const ran2 = gsap.utils.random(-300, 300, 100)
    const ran3 = gsap.utils.random(-360, 360, 10)

    setXval(ran1)
    setYval(ran2)
    setRotate(ran3)

    gsap.to(box.current, { x: ran1, y: ran2, duration: 1, rotate: ran3 })
  })

  return (
    <main>
      <div ref={box} className="box" />
      <button onClick={rotateBox}>Animate</button>
    </main>
  )
}

