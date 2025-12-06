import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import CaseStudies from './components/CaseStudies.jsx';
import Process from './components/Process.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <>
    <div class="min-h-screen bg-slate-950 text-slate-50">
      <Header />
      <main class="mx-auto max-w-6xl px-4 pb-24 pt-12">
        <Hero />
        <Services />
        <CaseStudies />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
    </>
  )
}

export default App
