import React from 'react'
import Hero from './../Hero_Section/Hero'
import ParticleBackground from '../Hero_Section/ParticleBackground'

const Home = () => {
  return (
    <div>
      <section
        id="hero"
        className="relative min-h-screen bg-black text-white"
      >
        
        <Hero />
      </section>
      
    </div>
  )
}

export default Home
