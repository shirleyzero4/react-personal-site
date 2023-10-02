import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Project from "./components/project/Project";
import Contact from "./components/contact/Contact";
import "./index.css" 

// Add components here
function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Home />
        <About />
        <Project />
        <Contact />
      </main>
    </div>
  );
}

export default App;
