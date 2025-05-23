import Hero from "./components/Hero/Hero.jsx"
import Services from "./components/Services/Services.jsx"
import Plants from "./components/Plants/Plants.jsx"
import SectionThree from "./components/SectionThree/SectionThree.jsx"
import SectionFour from "./components/SectionFour/SectionFour.jsx"
import Footer from "./components/Footer/Footer.jsx"
let App = () => {
  return(
    <div>
      <Hero />
      <Services />
      <Plants />
      <SectionThree/>
      <SectionFour/>
      <Footer/>
    </div>
  )
}

export default App