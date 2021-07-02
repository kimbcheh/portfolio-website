import './App.scss'
import Header from './components/Header'
import Projects from './components/Projects'
import About from './components/About'

function App() {
 return (
  <div>
   <Header />
   <main>
    <Projects />
    <About />
   </main>
   <footer>placeholder footer</footer>
  </div>
 )
}

export default App
