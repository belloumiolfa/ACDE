import React from 'react';
import { Link } from 'react-router-dom';

function FastContact() {
   return (
      <div className='col-lg-3 col-md-6'>
         <div className='footer-info'>
            <h3>
               ACDE<span>.</span>
            </h3>
            <p>
               Comité culturelle rue d'Algérie,
               <br />
               Bizerte, Mateur, 7030
               <br />
               <br />
               <strong>Télèphone:</strong> +216 52 284 697
               <br />
               <strong>Email:</strong> acemateur@gmail.com
               <br />
            </p>
            <div className='social-links mt-3'>
               <Link to='/' className='twitter'>
                  <i className='bx bxl-twitter'></i>
               </Link>
               <Link to='/' className='facebook'>
                  <i className='bx bxl-facebook'></i>
               </Link>
               <Link to='/' className='instagram'>
                  <i className='bx bxl-instagram'></i>
               </Link>
               <Link to='/' className='google-plus'>
                  <i className='bx bxl-skype'></i>
               </Link>
               <Link to='/' className='linkedin'>
                  <i className='bx bxl-linkedin'></i>
               </Link>
            </div>
         </div>
      </div>
   );
}

export default FastContact;
