import React from 'react';

const Services = () => {
   return (
      <section id='services' className='services'>
         <div className='container' data-aos='fade-up'>
            <div className='section-title'>
               <h2>Services</h2>
               <p> NOS SERVICES </p>
            </div>

            <div className='row'>
               <div
                  className='col-lg-4 col-md-6 d-flex align-items-stretch'
                  data-aos='zoom-in'
                  data-aos-delay='100'
               >
                  <div className='icon-box'>
                     <div className='icon'>
                        <i className='fas fa-people-arrows'></i>
                     </div>
                     <h4>Comité sur le secteur public</h4>
                     <p>
                        Chercher les concours de la fonction public a l’échelle
                        régional et national et identifier les postes vacantes
                        locales.
                     </p>
                  </div>
               </div>

               <div
                  className='col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0'
                  data-aos='zoom-in'
                  data-aos-delay='200'
               >
                  <div className='icon-box'>
                     <div className='icon'>
                        <i className='fas fa-user-lock'></i>
                     </div>
                     <h4>Comité sur le secteur privé</h4>
                     <p>
                        Identifier les postes vacantes dans les secteurs privées
                        ainsi que coordonner entre diplômés chômeurs, les
                        entreprise et tous les organismes qui s’intéresse à
                        l’emploi.
                     </p>
                  </div>
               </div>

               <div
                  className='col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0'
                  data-aos='zoom-in'
                  data-aos-delay='300'
               >
                  <div className='icon-box'>
                     <div className='icon'>
                        <i className='fas fa-hand-holding-usd'></i>
                     </div>
                     <h4>Comité financière</h4>
                     <p>
                        Trouver des subventions, des dons, et organiser les
                        ressources financières.
                     </p>
                  </div>
               </div>

               <div
                  className='col-lg-4 col-md-6 d-flex align-items-stretch mt-4'
                  data-aos='zoom-in'
                  data-aos-delay='100'
               >
                  <div className='icon-box'>
                     <div className='icon'>
                        <i className='fas fa-project-diagram'></i>
                     </div>
                     <h4>Création des projets</h4>
                     <p>
                        Encourager des jeunes diplômés à monter leurs projets en
                        les accompagnant dans les études et les aides à trouver
                        les financements.
                     </p>
                  </div>
               </div>

               <div
                  className='col-lg-4 col-md-6 d-flex align-items-stretch mt-4'
                  data-aos='zoom-in'
                  data-aos-delay='200'
               >
                  <div className='icon-box'>
                     <div className='icon'>
                        <i className='fas fa-search'></i>
                     </div>
                     <h4>Comité de l’information</h4>
                     <p>
                        Présenter l’association, ses projets, ses objectifs et
                        ses principes d’interventions ainsi que les actions.
                     </p>
                  </div>
               </div>

               <div
                  className='col-lg-4 col-md-6 d-flex align-items-stretch mt-4'
                  data-aos='zoom-in'
                  data-aos-delay='300'
               >
                  <div className='icon-box'>
                     <div className='icon'>
                        <i className='far fa-address-card'></i>
                     </div>
                     <h4>Comité des contacts</h4>
                     <p>
                        Chercher des réseaux de contacte à l’échelles national
                        et international et assure la coordination entre nous et
                        les adhérentes.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Services;
