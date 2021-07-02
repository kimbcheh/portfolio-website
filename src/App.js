import './App.scss'
import Header from './components/Header'
import Projects from './components/Projects'
import About from './components/About'
import Footer from './components/Footer'

function App() {
 return (
  <div>
   <Header />
   <main>
    <Projects />
    <About />
   </main>
   <Footer />
  </div>
 )
}

export default App
