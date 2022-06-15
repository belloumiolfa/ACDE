import React from 'react';
import ContactForm from './ContactForm';

const Contact = () => {
   return (
      <section id='contact' className='contact'>
         <div className='container' data-aos='fade-up'>
            <div className='section-title'>
               <h2>Contact</h2>
               <p>Contactez nous</p>
            </div>

            <div>
               <iframe
                  title='googleMap'
                  style={{ border: '0', width: '100%', height: '270px' }}
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3189.117085884304!2d9.659288951653494!3d37.03436189081505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e330e12657abcf%3A0xeb22bfa619463e14!2sMaison%20des%20Jeunes%20de%20Mateur%2C%20P11%2C%20Mateur!5e1!3m2!1sfr!2stn!4v1624477146441!5m2!1sfr!2stn'
                  frameBorder='0'
                  allowFullScreen
               ></iframe>
            </div>

            <div className='row mt-5'>
               <div className='col-lg-4'>
                  <div className='info'>
                     <div className='address'>
                        <i className='icofont-google-map'></i>
                        <h4>Adresse:</h4>
                        <p>
                           Comité culturelle rue d'Algérie, Bizerte, Mateur,
                           7030
                        </p>
                     </div>

                     <div className='email'>
                        <i className='icofont-envelope'></i>
                        <h4>Email:</h4>
                        <p>acemateur@gmail.com</p>
                     </div>

                     <div className='phone'>
                        <i className='icofont-phone'></i>
                        <h4>Télèphone:</h4>
                        <p>+216 52 284 697</p>
                     </div>
                  </div>
               </div>

               <ContactForm />
            </div>
         </div>
      </section>
   );
};

export default Contact;
