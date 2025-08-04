import { Container } from '@mui/material'
import './App.css'
import { useEffect, useState } from 'react'

function App() {

  const [activeLight, setActiveLight] = useState('green')

  const getSetLight = (light: string, delay: number) => {
    setTimeout(() => {
      if (light === 'green') {
        setActiveLight('yellow')
        getSetLight('yellow', 1000)
      } else if (light === 'yellow') {
        setActiveLight('red')
        getSetLight('red', 4000)
      } else if (light === 'red') {
        setActiveLight('green')
        getSetLight('green', 3000)
      }
    }, delay)
  }

  useEffect(() => {
    getSetLight('green', 4000)
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
