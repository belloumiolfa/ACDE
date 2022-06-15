import React from 'react';

/* =========== Import Components =========== */
import About from './About';
import CallToAction from './CallToAction';
import Clients from './Clients';
import Contact from './Contact';
import Features from './Features';
import Hero from './Hero';
import Services from './Services';
import Team from './Team';
import Testimonials from './Testimonials';

export default function Home() {
   return (
      <main id='main'>
         <Hero />
         <About />
         <Features />
         <Clients />
         <Services />
         <CallToAction />
         <Team />
         {/*<Portefolio /> */}
         {/* <Count /> */}
         <Testimonials />
         <Contact />
      </main>
   );
}
