import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function App() {
  const [count, setCount] = useState(0)
  const myName = useRef();
  useGSAP(() => {

    gsap.set(myName.current, {
      scale: 0.5,
    });

    gsap.from(myName.current, {
      yPercent: 100,
      opacity: 0,
      duration: 0.6
    })

    gsap.to(myName.current, {
      scale: 1,  // Center scale     // Correct GSAP easing
      duration: 0.8,
      ease: "sine.inOut",
      delay: 0.5,
    })

    gsap.to(myName.current, {
      textShadow: "0 0 0px #ffffffaa",  // Center scale
      ease: "power3.out",        // Correct GSAP easing
      duration: 0.5,
      delay: 1.5,
    })

    gsap.to(myName.current, {
      textShadow: "0 0 15px #ffffffaa",  // Center scale
      ease: "power3.out",        // Correct GSAP easing
      duration: 0.5,
      delay: 2,
    })

    gsap.to(myName.current, {
      textShadow: "0 0 0px #ffffffaa",  // Center scale
      ease: "power3.out",        // Correct GSAP easing
      duration: 0.5,
      delay: 2.4,
    })

    gsap.to(myName.current, {
      textShadow: "0 0 40px #ffffffdd",  // Center scale
      ease: "power3.out",        // Correct GSAP easing
      duration: 0.8,
      delay: 2.8,
    })
  })

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className='yo will-change' ref={myName}>
        <h1 className='will-change'>PixelForge</h1>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
