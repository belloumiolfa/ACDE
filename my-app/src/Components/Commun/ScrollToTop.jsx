import React from 'react';
import { HashLink } from 'react-router-hash-link';

const ScrollToTop = () => {
   return (
      <div>
         <HashLink smooth to='/#hero' className='back-to-top'>
            <i className='ri-arrow-up-line'></i>
         </HashLink>
         <div id='preloader'></div>
      </div>
   );
};

export default ScrollToTop;
