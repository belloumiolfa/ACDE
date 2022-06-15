import React from 'react';
import CountUp from 'react-countup';

const Count = () => {
   return (
      <section id='counts' className='counts'>
         <div className='container' data-aos='fade-up'>
            <div className='row no-gutters'>
               <div
                  className='image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start'
                  data-aos='fade-right'
                  data-aos-delay='100'
               ></div>
               <div
                  className='col-xl-7 pl-0 pl-lg-5 pr-lg-1 d-flex align-items-stretch'
                  data-aos='fade-left'
                  data-aos-delay='100'
               >
                  <div className='content d-flex flex-column justify-content-center'>
                     <h3>Voluptatem dignissimos provident quasi</h3>
                     <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Duis aute irure dolor in reprehenderit
                     </p>
                     <div className='row'>
                        <div className='col-md-6 d-md-flex align-items-md-stretch'>
                           <div className='count-box'>
                              <i className='icofont-simple-smile'></i>
                              <CountUp start={0} end={65} duration={5} />

                              <p>
                                 <strong>Happy Clients</strong> consequuntur
                                 voluptas nostrum aliquid ipsam architecto ut.
                              </p>
                           </div>
                        </div>

                        <div className='col-md-6 d-md-flex align-items-md-stretch'>
                           <div className='count-box'>
                              <i className='icofont-document-folder'></i>
                              <CountUp start={0} end={85} duration={5} />
                              <p>
                                 <strong>Projects</strong> adipisci atque cum
                                 quia aspernatur totam laudantium et quia dere
                                 tan
                              </p>
                           </div>
                        </div>

                        <div className='col-md-6 d-md-flex align-items-md-stretch'>
                           <div className='count-box'>
                              <i className='icofont-clock-time'></i>
                              <CountUp start={0} end={12} duration={5} />
                              <p>
                                 <strong>Years of experience</strong> aut
                                 commodi quaerat modi aliquam nam ducimus aut
                                 voluptate non vel
                              </p>
                           </div>
                        </div>

                        <div className='col-md-6 d-md-flex align-items-md-stretch'>
                           <div className='count-box'>
                              <i className='icofont-award'></i>
                              <CountUp start={0} end={15} duration={5} />
                              <p>
                                 <strong>Awards</strong> rerum asperiores dolor
                                 alias quo reprehenderit eum et nemo pad der
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Count;
