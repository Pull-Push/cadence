import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import type { Unit, UnitStatus } from "./types/unit"
import DevelopmentStatus from './components/DevelopmentStatus'
import UnitCard from './components/UnitCard'
import  {sampleUnits} from "./data/units"
import AlertMap from './components/AlertMap'



function App() {
  const [count, setCount] = useState(0)
  const [isOperational, setIsOperational] = useState(false)
  const [units,  setUnits ] = useState<Unit[]>(sampleUnits)
  
  function updateUnitStatus( unitId: string, newStatus:UnitStatus){
    setUnits((previousUnits) =>
    previousUnits.map((unit): Unit =>{
      if(unit.id === unitId){
        return{...unit, status: newStatus}
      }
      return unit
    }))
  }
  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Welcome to CADence</h1>
          <DevelopmentStatus message={isOperational ? "Frontend Operational" : "System Idle"} />
          <button onClick={() => setIsOperational(!isOperational)}>{isOperational ? 'Set Idle' : 'Set Operational'}</button>
          <div>
            <p>Total Units: {units.length}</p>
            <button onClick={() => updateUnitStatus('unit-001', "dispatched")}>
              Dispatch Engine 4
            </button>
            <button onClick={() => updateUnitStatus('unit-002', 'on_scene')}>
              Medic 12 on scene
            </button>
            {units.map((unit) =>(
              <UnitCard
              key={unit.id}
              unit={unit}
              onStatusChange={updateUnitStatus}
              />
            ))}
          </div>
          <h2>Public Safety Alert Map</h2>
          <AlertMap/>

        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
