import Hero from './components/Hero'
import Footer from './components/Footer'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Career from "./components/Career";
import About from "./components/About";


export default function Home() {
  return (
    <>
      <Hero />
      <About/>
      <Projects />
      <Career />
      <Contact />
      <Footer />
    </>
  );
}
