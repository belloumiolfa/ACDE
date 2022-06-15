import React from 'react';
import { HashLink } from 'react-router-hash-link';

function LinksFirstList() {
   return (
      <div className='col-lg-2 col-md-6 footer-links'>
         <h4> </h4>
         <ul>
            <li>
               <i className='bx bx-chevron-right'></i>
               <HashLink smooth to='/#hero'>
                  Acceuil
               </HashLink>
            </li>
            <li>
               <i className='bx bx-chevron-right'></i>
               <HashLink className='active' to='/#about' smooth={true}>
                  Nous
               </HashLink>
            </li>
            <li>
               <i className='bx bx-chevron-right'></i>
               <HashLink className='active' smooth to='/#services'>
                  Services
               </HashLink>
            </li>
            <li>
               <i className='bx bx-chevron-right'></i>
               <HashLink className='active' smooth to='/#portfolio'>
                  Portfolio
               </HashLink>
            </li>
            <li>
               <i className='bx bx-chevron-right'></i>
               <HashLink className='active' smooth to='/#team'>
                  Equipe
               </HashLink>
            </li>
         </ul>
      </div>
   );
}

export default LinksFirstList;
