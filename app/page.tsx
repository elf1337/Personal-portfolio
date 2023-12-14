import Image from 'next/image'
import Hero from './components/Hero'
import { About } from './components/About'
import Cta from './components/Cta'


export default function Home() {
  
  return(
    <main>     
      <Hero/>
      <About />
      <Cta />
    </main>
  )
}
