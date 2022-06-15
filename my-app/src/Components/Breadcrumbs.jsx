import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumbs = props => {
   return (
      <section className='breadcrumbs'>
         <div className='container'>
            <div className='d-flex justify-content-between align-items-center'>
               <h2>{props.title}</h2>
               <ol>
                  <li>
                     <Link to='/'>Acceuil</Link>
                  </li>
                  <li>{props.title}</li>
               </ol>
            </div>
         </div>
      </section>
   );
};

export default Breadcrumbs;
