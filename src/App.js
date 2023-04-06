import './App.css';
import Navbar from './Navbar';
import About from './About';
import Home from './Home/Home';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
    </div>
  );
}

export default App;
