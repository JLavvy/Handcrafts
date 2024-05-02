import React from 'react'

import './App.css'
import { Landing } from './components/Landing'
import { About } from './components/About'
import { Bestseller } from './components/best-seller'
import { Type } from './components/type'
import { Artists } from './components/artists'
import { Testimony } from './components/Testimony'
import { Contact } from './components/Contact'

function App() {
  return (
    <>
      <div className="App">
        
       <Landing />
       <About />
       <Type />
       <Artists />
       <Bestseller />
       <Testimony />
       <Contact />
       

      </div>
    </>
  )
}

export default App
