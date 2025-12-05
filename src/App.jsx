import { useState } from 'react'
import './App.css'
import Welcome from './components/Welcome';
import SidePanel from './components/SidePanel';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import CaseStudies from './components/CaseStudies.jsx';
import Process from './components/Process.jsx';
import Contact from './components/Contact.jsx';

function App() {
  const [count, setCount] = useState(0)
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const handleOpen = () => setIsPanelOpen(true);
  const handleClose = () => setIsPanelOpen(false);
  const userName = "Vite User";

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
    <Welcome name={userName} />
    <div className="p-6 rounded-lg shadow-xl bg-gray-100 dark:bg-gray-800 transition-colors duration-500">
          <p>
            The background and text of this card change when you toggle the theme. This is possible because we apply the **`dark:bg-gray-800`** and **`dark:text-white`** classes.
          </p>
          <p className="mt-4 text-sm text-red-600 dark:text-gray-400">
            Tailwind CSS automatically handles the context.
          </p>
        </div>
    <button
        onClick={handleOpen}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-150"
      >
        Learn More
      </button>
      <SidePanel isOpen={isPanelOpen} 
        onClose={handleClose}>
          <h2 className="text-xl font-semibold mb-4 border-b pb-2">Product Details</h2>
        <p>This is the content of your sliding side panel. You can put forms, navigation, or more details here.</p>
        <div className="mt-8">
          <button
            onClick={handleClose}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          >
            Close Panel
          </button>
        </div>
      </SidePanel>
    </>
  )
}

export default App
