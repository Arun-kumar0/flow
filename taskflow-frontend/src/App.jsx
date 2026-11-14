import { useEffect, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import api from './services/api'
function App() {
  const [message, setMessage] = useState("")

  useEffect(()=>{
    api.get("/test")
    .then(response=> setMessage(response.data))
    .catch(error => console.log(error));
  }, []);

  return (
    <>
      <h1>{message}</h1>
    </>
  )
}

export default App
