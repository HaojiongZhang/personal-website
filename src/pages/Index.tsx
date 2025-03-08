import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="projects">
          <Projects />
        </section>
        <section id="experience">
          <Experience />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
