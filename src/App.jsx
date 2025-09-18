import Nav from "./Components/Nav";
import Home from "./sections/Home";
import Work from "./sections/Work";
import About from "./sections/About";
import Project from "./sections/Project";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {
  return (
    <div className="scroll-smooth bg-[linear-gradient(90deg,#090b0b,#0d1518)] h-auto">
      <Nav />
      <main>
        <section id="home" className="h-auto bg-white">
          <Home />
        </section>

        <section id="about" className="h-auto ">
          <About />
        </section>
        <section id="work" className="h-auto ">
          <Work />
        </section>
        <section id="project" className="h-auto ">
          <Project />
        </section>
        <section id="contact" className="h-auto ">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
