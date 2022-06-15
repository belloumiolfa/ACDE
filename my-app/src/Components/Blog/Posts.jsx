import React from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';

const Posts = () => {
   return (
      <section className='container counts' data-aos='fade-up'>
         <Link to='/blog/:id'>
            <div className='row no-gutters'>
               <div
                  className='image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start'
                  data-aos='fade-right'
                  data-aos-delay='100'
               ></div>
               <div
                  className='col-xl-7 pl-0 pl-lg-5 pr-lg-1 '
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
                  </div>
                  <div className='text-right'>
                     <div className='row'>
                        <div className='col-md-2 '>
                           <div className='count-box'>
                              <i className='icofont-like' type='button'></i>
                              <CountUp start={0} end={12} duration={5} />
                           </div>
                        </div>
                        <div className='col-md-2 '>
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
               </div>
            </div>
         </Link>
      </section>
   );
};

export default Posts;
