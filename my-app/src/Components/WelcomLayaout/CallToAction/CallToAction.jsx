import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
   return (
      <section id='cta' className='cta'>
         <div className='container' data-aos='zoom-in'>
            <div className='text-center'>
               <h3>Appel à l'action</h3>
               <p>
                  « Les espèces qui survivent ne sont pas les espèces les plus
                  fortes, ni les plus intelligentes, mais celles qui s’adaptent
                  le mieux aux changements. » <br />{' '}
                  <span> - Charles darwin - </span>
               </p>
               <Link className='cta-btn' to='/register'>
                  Inscrivez vous
               </Link>
            </div>
         </div>
      </section>
   );
};

export default CallToAction;
