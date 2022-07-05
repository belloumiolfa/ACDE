import React from 'react';

const Features = () => {
   return (
      <section id='features' className='features'>
         <div className='container' data-aos='fade-up'>
            <div className='row'>
               <div className='image col-lg-6' data-aos='fade-right'>
                  <img
                     src='/assets/img/features.jpg'
                     className='img-fluid'
                     alt=''
                  />
               </div>

               <div
                  className='col-lg-6'
                  data-aos='fade-left'
                  data-aos-delay='100'
               >
                  <div
                     className='icon-box mt-5 mt-lg-0'
                     data-aos='zoom-in'
                     data-aos-delay='150'
                  >
                     <i className='fas fa-user-shield'></i>
                     <h4> Diagnostique</h4>
                     <p>
                        Des études du marché afin de diagnostiquer les besoins
                        des employeurs.
                     </p>
                  </div>
                  <div
                     className='icon-box mt-5'
                     data-aos='zoom-in'
                     data-aos-delay='150'
                  >
                     <i className='fas fa-tasks'></i>
                     <h4> Préparation</h4>
                     <p>
                        Des formations qui visent à augmenter l’employabilité
                        des diplômés supérieur chômeurs
                     </p>
                  </div>
                  <div
                     className='icon-box mt-5'
                     data-aos='zoom-in'
                     data-aos-delay='150'
                  >
                     <i className='far fa-images'></i>
                     <h4> Evènements</h4>
                     <p>
                        Des séminaires, des forums dans le but de rapprocher les
                        diplômés chômeurs au marché de l’emploi.
                     </p>
                  </div>
                  <div
                     className='icon-box mt-5'
                     data-aos='zoom-in'
                     data-aos-delay='150'
                  >
                     <i className='fas fa-chart-line'></i>
                     <h4> Localité</h4>
                     <p>
                        Nos activités, évènements et action couvrent les villes
                        de Mateur et Ghazela.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Features;
