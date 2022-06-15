import React from 'react';

const About = () => {
   return (
      <section id='about' className='about'>
         <div className='container' data-aos='fade-up'>
            <div className='row'>
               <div
                  className='col-lg-6 order-1 order-lg-2'
                  data-aos='fade-left'
                  data-aos-delay='100'
               >
                  <img
                     src='assets/img/about.jpg'
                     className='img-fluid'
                     alt=''
                  />
               </div>
               <div
                  className='col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content'
                  data-aos='fade-right'
                  data-aos-delay='100'
               >
                  <h3>
                     L'ASSOCIATION DES COMPETANCES POUR LE DEVELOPPEMENT ET
                     L'EMPLOI MATEUR
                  </h3>
                  <p className='font-italic'>
                     C’est une association indépendante des structures politique
                     et droits officiels, A but non lucratif, A ete crée à la
                     fin du février 2011 et a été publié au journal officiel
                     tunisien sous le numéro 20 le 17 février 2012.
                  </p>
                  <ul>
                     <li>
                        <i className='ri-check-double-line'></i> Lutter pour
                        défendre le droit des chercheurs de l’emploi pour
                        travailler avec dignité.
                     </li>
                     <li>
                        <i className='ri-check-double-line'></i> Le respect des
                        normes d’objectivité et l’équité dans les affectations
                        et les défendre.
                     </li>
                     <li>
                        <i className='ri-check-double-line'></i> Participation
                        dans la prise de décision dans l’emploi et de
                        recrutement.
                     </li>
                  </ul>
                  <p>
                     Nos activités concernant les diplômés supérieurs chômeurs,
                     elles consistent à organiser :
                  </p>
               </div>
            </div>
         </div>
      </section>
   );
};

export default About;
