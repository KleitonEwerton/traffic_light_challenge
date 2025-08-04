import { Avatar, Container } from '@mui/material'
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
  const [direction, setDirection] = useState('column' as 'column' | 'row')


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

    <Container maxWidth="sm" sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: '100vh' }}>

    
      <Container
        sx={{
          display: 'flex',
          flexDirection: direction,
          padding: 4,
          borderRadius: 4,
          justifyContent: 'space-around',
          alignItems: 'center',
          backgroundColor: 'black'
        }}>

        <div className={activeLight === 'green' ? 'green' : 'greenOpacity'}></div>
        <div className={activeLight === 'yellow' ? 'yellow' : 'yellowOpacity'}></div>
        <div className={activeLight === 'red' ? 'red' : 'redOpacity'}></div>

      </Container>

      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 2,
          marginTop: 4
        }}>
        
        <button
          onClick={() => setDirection(direction === 'column' ? 'row' : 'column')}
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          <Avatar>T</Avatar>
        </button>
      </Container>
    </Container >


  )
}

export default App
