import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

function LinksSecondList() {
   return (
      <div className='col-lg-3 col-md-6 footer-links'>
         <br />
         <br />
         <ul>
            <li>
               <i className='bx bx-chevron-right'></i>
               <Link to='/blog'>Blog</Link>
            </li>
            <li>
               <i className='bx bx-chevron-right'></i>
               <Link to='/login'>Login</Link>
            </li>
            <li>
               <i className='bx bx-chevron-right'></i>
               <Link to='/register'>Register</Link>
            </li>
            <li>
               <i className='bx bx-chevron-right'></i>
               <HashLink to='/#contact'>Contact</HashLink>
            </li>
         </ul>
      </div>
   );
}

export default LinksSecondList;
