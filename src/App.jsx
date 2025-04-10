import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Works from './components/Works/Works'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import Resume from './components/resume/Resume'
function App() {

  return (
    <>
      <div className='content'>
        <Navbar />
        <Home />
        <Works />
        <Skills />
        <Contact />
      </div>
      <Resume />
    </>
  )
}

export default App
