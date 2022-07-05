import React from 'react';
/* ================= react-owl-carousel dependencices =================*/
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Clients = () => {
   const responsive = {
      0: {
         items: 2,
      },
      768: {
         items: 4,
      },
      900: {
         items: 6,
      },
   };
   return (
      <section id='clients' className='clients'>
         <div className='container' data-aos='zoom-in'>
            <OwlCarousel
               className=' clients-carousel'
               autoplay
               dots
               loop
               responsive={responsive}
            >
               <img
                  className='item'
                  src='/assets/img/clients/client-1.png'
                  alt=''
               />
               <img
                  className='item'
                  src='/assets/img/clients/client-2.png'
                  alt=''
               />
               <img
                  className='item'
                  src='/assets/img/clients/client-3.png'
                  alt=''
               />
            </OwlCarousel>
         </div>
      </section>
   );
};

export default Clients;
