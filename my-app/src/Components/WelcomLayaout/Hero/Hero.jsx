import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
   return (
      <section
         id='hero'
         className='d-flex align-items-center justify-content-center'
      >
         <div className='container' data-aos='fade-up'>
            <div
               className='row justify-content-center'
               data-aos='fade-up'
               data-aos-delay='150'
            >
               <div className='col-xl-6 col-lg-8'>
                  <h1>
                     L'association tunisienne <span>ACDE</span>.
                  </h1>
                  <h2>
                     Association des compétences pour le développement et
                     l'emploi
                  </h2>
               </div>
            </div>

            <div
               className='row mt-5 justify-content-center'
               data-aos='zoom-in'
               data-aos-delay='250'
            >
               <div className='col-xl-2 col-md-4 col-6'>
                  <div className='icon-box'>
                     <i className='far fa-building'></i>
                     <h3>
                        <Link to='/'>Association</Link>
                     </h3>
                  </div>
               </div>
               <div className='col-xl-2 col-md-4 col-6 '>
                  <div className='icon-box'>
                     <i className='far fa-flag'></i>
                     <h3>
                        <Link to='/'>Tunisienne</Link>
                     </h3>
                  </div>
               </div>
               <div className='col-xl-2 col-md-4 col-6 mt-4 mt-md-0'>
                  <div className='icon-box'>
                     <i className='fab fa-angellist'></i>
                     <h3>
                        <Link to='/'>Independante</Link>
                     </h3>
                  </div>
               </div>
               <div className='col-xl-2 col-md-4 col-6 mt-4 mt-xl-0'>
                  <div className='icon-box'>
                     <i className='fas fa-gavel'></i>
                     <h3>
                        <Link to='/'>Non lucratif</Link>
                     </h3>
                  </div>
               </div>
               <div className='col-xl-2 col-md-4 col-6 mt-4 mt-xl-0'>
                  <div className='icon-box'>
                     <i className='fas fa-calendar-week'></i>
                     <h3>
                        <Link to='/'> 17/02/2012</Link>
                     </h3>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Hero;
