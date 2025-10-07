import { useRef, useState } from 'react'
import './App.css'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useEffect } from 'react';
import { Bug, RefreshCw, CircleX } from 'lucide-react';
function App() {
  const [char, setChar] = useState({});
  const [count, setCount] = useState(0)
  const [error, setError] = useState('')
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
      textShadow: "0 0 40px #ffffff",  // Center scale
      ease: "power3.out",        // Correct GSAP easing
      duration: 0.8,
      delay: 2.8,
    })
  })

  const getCharacter = async () => {
    try {
      throw new Error("broo");
      if (error != "") setError("")
    } catch (error) {
      setError(`I'm sorry we couldn't get you character. ${error}`)
    }

    setChar({})
  }

  useEffect(() => {

  }, [])

  return (
    <div className='flex flex-col h-screen justify-center items-center'>
      <div>
        <h5 className='text-white/90 font-normal tracking-tighter'>Attack on Titan</h5>
      </div>
      <div className='yo will-change' ref={myName}>
        <h1 className='will-change'>Who Are You in AOT?</h1>
      </div>
      <div className="card mt-9">
        <button className='flex items-center justify-center gap-2 rounded-full
  text-[#0f0f0f]
  px-5 py-2.5
  text-base font-semibold
  bg-gradient-to-r from-emerald-600 to-lime-400
  cursor-pointer
  transition-colors duration-200
   focus:outline-2 focus:outline-auto focus:outline-[#8a90fa]' onClick={getCharacter}>
          <RefreshCw />
          Get Character
        </button>
        {error && (
          <div className='mt-3 flex gap-2 items-center justify-center'>
            <CircleX className='error' />
            <p className='error'>{error}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
