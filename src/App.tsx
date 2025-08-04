import { Container } from '@mui/material'
import './App.css'
import { useEffect, useState } from 'react'

const traficSequence = {
  green: { nextColor: 'yellow', duration: 4000 },
  yellow: { nextColor: 'red', duration: 1000 },
  red: { nextColor: 'green', duration: 3000 }
}

type LightColor = keyof typeof traficSequence;

function App() {

  const [activeLight, setActiveLight] = useState('green')


  const getLight = (color: String, delay: number) => {
    setTimeout(() => {
      setActiveLight(color as LightColor)
      getLight(traficSequence[color as LightColor].nextColor, traficSequence[color as LightColor].duration)
    }, delay)

  }

  useEffect(() => {
    getLight(activeLight, 0)
  }, [])

  return (

    <Container maxWidth="sm" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center', height: '100vh' }}>

      {/* Vertical */}
      <Container sx={{ display: 'flex', padding: 2, borderRadius: 4, justifyContent: 'space-around', alignItems: 'center', backgroundColor: 'black' }}>

        <div className={activeLight === 'green' ? 'green' : 'greenOpacity'}></div>
        <div className={activeLight === 'yellow' ? 'yellow' : 'yellowOpacity'}></div>
        <div className={activeLight === 'red' ? 'red' : 'redOpacity'}></div>

      </Container>
    </Container>


  )
}

export default App
