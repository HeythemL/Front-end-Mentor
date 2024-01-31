import React from "react"
import Navbar from "./Components/UI/Navbar"
import Hero from "./Components/UI/Hero"
import pattern from "./images/bg-pattern-intro-desktop.svg"
import SectionI from "./Components/UI/SectionI"
import SectionII from "./Components/UI/SectionII"
import SectionIII from "./Components/UI/SectionIII"
import Footer from "./Components/UI/Footer"


function App() {

  return (
    <>
      <div className="bg-gradient-to-r from-lighter_red to-light_red -z-20 relative overflow-hidden rounded-bl-[100px] p-10 pb-20">
        <img src={pattern} className="absolute -z-10 left-72 scale-150 -top-[500px]" />
        <Navbar />
        <Hero />
      </div>
      <SectionI />
      <SectionII />
      <SectionIII />
      <Footer />
    </>
    )
}

export default App
