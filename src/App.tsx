/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import ShutterCalculator from "./components/ShutterCalculator";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-dark text-white font-sans overflow-x-hidden antialiased selection:bg-accent selection:text-dark">
      {/* Background radial spotlight flare representing high-end lens glow */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] pointer-events-none select-none z-0"></div>
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-accent/2 rounded-full blur-[180px] pointer-events-none select-none z-0"></div>

      {/* Main Orchestration */}
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <Portfolio />
        <Services />
        <ShutterCalculator />
        <Testimonials />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}

