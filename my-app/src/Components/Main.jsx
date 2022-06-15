import React from 'react';
/**
 * =========== Import Components ===================
 */
import About from './About';
import CallToAction from './CallToAction';
import Contact from './Contact';
import Count from './Count';
import Features from './Features';
import Hero from './Hero';
import Portefolio from './Portefolio';
import Services from './Services';
import Team from './Team';
import Testimonials from './Testimonials';
const Main = () => {
   return (
      <main id='main'>
         <Hero />
         <About />
         <Features />
         <Services />
         <CallToAction />
         <Portefolio />
         <Count />
         <Testimonials />
         <Team />
         <Contact />
      </main>
   );
};

export default Main;
