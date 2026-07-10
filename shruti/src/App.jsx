import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'
import Details from './components/Details'
import Footer from './components/Footer'
import Body from './components/Body'
import Content from './components/Content'
import Contenttt from './components/Contenttt'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section style={{backgroundColor:'neavyblue', color:'white'}}>
        <ul style={{listStyleType:'none',display:'flex'}}>
          <div></div>
        </ul>

      </section>

     <Header/>
     <Body></Body>
     <Content></Content>
     <Contenttt></Contenttt>
     <Footer></Footer>

    </>
  )
}

export default App
