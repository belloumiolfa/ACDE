import React from 'react';
import Breadcrumbs from '../Commun/Breadcrumbs';
import CountUp from 'react-countup';

const PostDetails = () => {
   return (
      <main id='main'>
         <Breadcrumbs title='Blog' />

         <section className='container counts' data-aos='fade-up'>
            <div className='no-gutters'>
               <div
                  className='image d-flex align-items-stretch justify-content-center justify-content-lg-start'
                  data-aos='fade-right'
                  data-aos-delay='100'
               ></div>
               <div className='align-items-stretch'>
                  <div className='content d-flex flex-column justify-content-center'>
                     <h3>Voluptatem dignissimos provident quasi</h3>
                     <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Duis aute irure dolor in reprehenderit
                     </p>
                  </div>
               </div>

               <div
                  className='contact '
                  data-aos='fade-left'
                  data-aos-delay='100'
               >
                  <form className='row php-email-form '>
                     <div className='content d-flex flex-column justify-content-center'>
                        <div className='row'>
                           <div className='col-md-6 d-md-flex align-items-md-stretch'>
                              <div className='count-box'>
                                 <i className='icofont-like' type='button'></i>
                                 <CountUp start={0} end={12} duration={5} />
                              </div>
                           </div>
                           <div className='col-md-6 d-md-flex align-items-md-stretch'>
                              <div className='count-box'>
                                 <i
                                    className='icofont-comment'
                                    type='button'
                                    data-toggle='collapse'
                                    data-target='#multiCollapseExample2'
                                    aria-expanded='true'
                                    aria-controls='multiCollapseExample2'
                                 ></i>
                                 <CountUp start={0} end={18} duration={5} />
                              </div>
                           </div>
                        </div>
                     </div>

                     <div
                        className='row collapse php-email-form '
                        id='multiCollapseExample2'
                     >
                        <div className='form-group col-lg-10'>
                           <input
                              type='text'
                              className='form-control'
                              name='comment'
                              id='subject'
                              placeholder='Commentaire'
                              data-msg='Please enter at least 8 chars of subject'
                           />
                           <div className='validate'></div>
                        </div>
                        <div className='text-center col-lg-2'>
                           <button
                              type='submit'
                              style={{ marginRight: '20px' }}
                           >
                              <i className='icofont-verification-check'></i>
                           </button>
                           <button type='reset'>
                              <i className='icofont-close'></i>{' '}
                           </button>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </section>
      </main>
   );
};

export default PostDetails;
