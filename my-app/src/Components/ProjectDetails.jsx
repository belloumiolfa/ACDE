import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

/* ================= react-owl-carousel dependencices =================*/
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Breadcrumbs from './Breadcrumbs';

const ProjectDetails = () => {
   useEffect(() => {});
   return (
      <main id='main'>
         <Breadcrumbs title='Nom du projet' />

         <section id='portfolio-details' className='portfolio-details'>
            <div className='container' data-aos='fade-up'>
               <div className='portfolio-details-container'>
                  <OwlCarousel
                     className='portfolio-details-carousel'
                     data-ride='carousel'
                     autoPlay
                     dots
                     loop
                     items={1}
                  >
                     <div className='item active'>
                        <img
                           src='assets/img/portfolio/portfolio-details-1.jpg'
                           className=' img-fluid'
                           alt=''
                        />
                     </div>
                     <div className='item'>
                        <img
                           src='assets/img/portfolio/portfolio-details-2.jpg'
                           className=' img-fluid'
                           alt=''
                        />
                     </div>
                     <div className='item'>
                        <img
                           src='assets/img/portfolio/portfolio-details-3.jpg'
                           className=' img-fluid'
                           alt=''
                        />
                     </div>
                  </OwlCarousel>

                  <div className='portfolio-info'>
                     <h3>Information sur le projet</h3>
                     <ul>
                        <li>
                           <strong>Catégory</strong>: Web design
                        </li>
                        <li>
                           <strong>Bénéficiaire</strong>: ASU Company
                        </li>
                        <li>
                           <strong>Date</strong>: 01 March, 2020
                        </li>
                        <li>
                           <strong>URL</strong>:{' '}
                           <Link to='/'>www.example.com</Link>
                        </li>
                     </ul>
                  </div>
               </div>

               <div className='portfolio-description'>
                  <h2>Description détaillée de projet</h2>
                  <p>
                     Autem ipsum nam porro corporis rerum. Quis eos dolorem eos
                     itaque inventore commodi labore quia quia. Exercitationem
                     repudiandae officiis neque suscipit non officia eaque
                     itaque enim. Voluptatem officia accusantium nesciunt est
                     omnis tempora consectetur dignissimos. Sequi nulla at esse
                     enim cum deserunt eius.
                  </p>
               </div>
            </div>
         </section>
      </main>
   );
};

export default ProjectDetails;
