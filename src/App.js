import './App.scss'
import Header from './components/Header'
import Projects from './components/Projects'
import About from './components/About'
import Footer from './components/Footer'
import { linkData, projectData } from './data'

function App() {
 return (
  <div>
   <Header linkData={linkData} />
   <main>
    <Projects projectData={projectData} />
    <About />
   </main>
   <Footer />
  </div>
 )
}

export default App
