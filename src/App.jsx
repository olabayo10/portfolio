import { useState } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/project";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div>
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

            <main>
                <section>
                    <Hero menuOpen={menuOpen}/>
                </section>

                <section id="about">
                    <About />
                </section>

                <section id="skills">
                    <Skills />
                </section>

                <section id="projects">
                    <Projects />
                </section>

                <section id="contact">
                    <Contact />
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default App;
