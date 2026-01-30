import React from 'react'
import gsap from 'gsap'
import {ScrollTrigger, SplitText} from 'gsap/all'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Cocktails from './components/Cocktails'

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
<main>
<Navbar/>
<Hero/>
<Cocktails/>
<About/>
  </main>
  )
}

export default App