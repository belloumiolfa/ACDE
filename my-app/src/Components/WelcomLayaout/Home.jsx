import React from 'react';

/* =========== Import Components =========== */
import About from './About/About';
import CallToAction from './CallToAction/CallToAction';
import Clients from './Clients/Clients';
import Contact from './Contact/Contact';
import Features from './Features/Features';
import Hero from './Hero/Hero';
import Services from './Services/Services';
import Team from './Team/Team';
import Testimonials from './Testimonials/Testimonials';

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
