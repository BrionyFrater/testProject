import { useRef, useState } from 'react'
import './App.css'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Bug, Tv, VenusAndMars, Atom, RefreshCw, CircleX, Briefcase } from 'lucide-react';

gsap.registerPlugin(useGSAP);


function App() {
  const [char, setChar] = useState({});
  const [error, setError] = useState('')

  const main = useRef();
  const myName = useRef();
  const heading = useRef();
  const img1 = useRef();
  const shine = useRef();
  const charRef = useRef();

  useGSAP(() => {

    gsap.set(myName.current, {
      scale: 0.5,
    });


    gsap.set(img1.current, {
      scale: 0,
    });


    const tl = gsap.timeline();

    // slide in + fade in
    tl.from(myName.current, {
      yPercent: 100,
      opacity: 0,
      duration: 0.6,
    });

    // scale up
    tl.to(myName.current, {
      scale: 1,
      duration: 0.8,
      ease: "expo.inOut",
    }, "-=0.2"); 
    
    
   

    tl.to(heading.current, {
      letterSpacing: "0.5rem",
      duration: 0.5,
      ease: "sine.inOut",
    }, "-=0.5");



    tl.to(img1.current, {
      scale: 1,
      duration: 0.8,
      rotateZ: -20,
    }, "<")

    tl.to(img1.current, {
      scale: 1,
      duration: 3,
      rotateY: -20,
      rotateZ: -10,
      yoyo: true,
      repeat: -1,
      yoyoEase: "sine.inOut"
    }, "-=0.4")

    tl.to(shine.current, {
      x: 500,       // move across
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    // textShadow pulsating
    tl.to(myName.current, {
      textShadow: "0 0 0px #ffffffaa",
      ease: "power3.out",
      duration: 0.5,
    }, "<");


    tl.to(myName.current, {
      textShadow: "0 0 15px #ffffffaa",
      ease: "power3.out",
      duration: 0.5,
    });

    tl.to(myName.current, {
      textShadow: "0 0 0px #ffffffaa",
      ease: "power3.out",
      duration: 0.5,
    });

    tl.to(myName.current, {
      textShadow: "0 0 40px #ffffff",
      ease: "power3.out",
      duration: 0.8,
    });

    
  }, { scope: main})

  useGSAP(()=>{
    gsap.from(charRef.current, {
      duration: 0.3,
      y: -40,
      scale: 0.8,
      ease: "sine.inOut"
    })
  }, {dependencies: [char], revertOnUpdate: true })

  const getCharacter = async () => {
    try {
 
      const response = await fetch("http://localhost:5000/api/aot")
      
      if (!response.ok) throw new Error("I'm sorry we couldn't get your character.")

      const character = await response.json()
      setChar(character)
      setError("")

    } catch (error) {
      setError(`${error}`)
      setChar({})
    }

  }


  return (
   

        <div  className='main-bg h-screen flex flex-col relative justify-center items-center'>
         <svg className="pointer-events-none absolute cursor-none">
      <filter id="grainy">
        <feTurbulence type="turbulence" baseFrequency="0.4"></feTurbulence>
        <feColorMatrix type="saturate" values="0.9"></feColorMatrix>
      </filter>
    </svg>
          <div  ref={img1}  className="absolute bottom-[10%] left-[10%] w-[25%] rounded-2xl z-[-3] overflow-clip">
            <img
              src="/sasha.jpg"
              alt=""
              className="w-full contrast-125 saturate-[120%] rounded-2xl"
            />
            <div className="absolute top-[-30%] left-0 w-full h-[150%] pointer-events-none">
              <div ref={shine} className=" mix-blend-hard-light absolute top-0 left-[-50%] w-1/2 h-full bg-gradient-to-r from-transparent  via-white/60 via-[40%] to-transparent to-[90%] rotate-12"></div>
            </div>
          </div>
          <div>
            <h5 ref={heading} className='text-white/90 font-semibold tracking-[0rem]'>Attack on Titan</h5>
          </div>
          <div className='yo will-change' ref={myName}>
            <h1 className='will-change'>Who Are You in AOT?</h1>
          </div>
          <div className="card mt-9">
              <button
              className='box1 flex items-center justify-center gap-2 rounded-full text-[#0f0f0f]
              px-5 py-2.5
              text-base font-semibold
              bg-gradient-to-r from-emerald-600 to-lime-400
              hover:from-lime-300 hover:to-lime-500
              cursor-pointer
              transition-all duration-200
              focus:outline-2 focus:outline-auto focus:outline-[#8a90fa]'
              onClick={getCharacter}
            >
              <RefreshCw />
              Get Character
            </button>
            {error && (
              <div className=' bg-red-400/10 border-[1px] border-red-600/20 p-5 rounded-2xl mt-3 flex gap-2 items-center justify-center'>
               
                <CircleX className='error' />
                <p className='error'>{error}</p>
              </div>
            )}
          </div>

          {Object.keys(char).length !== 0 && (
            <div ref={charRef} className=' z-10 bg-white p-5 rounded-2xl text-[#0f0f0f] flex items-center justify-center flex-col top-[20%] '>
              <div className='flex gap-2 items-center justify-center'>
                <h3 className='uppercase text-[#0f0f0f] font-bold text-2xl'>{char.name}</h3>

                <div className='uppercase font-bold text-sm px-3 py-1 rounded-full bg-[#42afe2] text-white'>{char.status}</div>
              </div>

              {char.img !== "" && (<img draggable={false}
              alt=""
              src={`http://localhost:5000/api/image?url=${char.img}`}
              className="w-[70%] contrast-125 shadow-[20_20_20_#000] saturate-[120%] rounded-2xl"/>)}

<div className='mt-3 flex gap-2 items-center justify-center'>
               
               <Atom  />
               <p className='font-semibold'>{char.species.join(", ")}</p>
             </div>

             <div className='mt-3 flex gap-2 items-center justify-center'>
               
             <VenusAndMars />
               <p className='font-semibold'>{char.gender}</p>
             </div>

             <div className='mt-3 flex gap-2 items-center justify-center'>
               
                <Briefcase />
                 <p className='font-semibold'>{char.occupation}</p>
               </div>
         
               <div className='mt-3 flex gap-2 items-center justify-center'>
               
               <Tv />
                <p className='font-semibold'>{char.episodes.length} Episodes</p>
              </div>

              </div>
          )}

        </div>

        
    
   
  )
}

export default App
