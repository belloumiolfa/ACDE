import React from 'react';
import { Link } from 'react-router-dom';

const Copyrighting = () => {
   return (
      <div className='container'>
         <div className='copyright'>
            &copy; Copyright
            <strong>
               <span> ACED</span>
            </strong>
            . Tous les droits sont réservés
         </div>
         <div className='credits'>
            Développé par <Link to='/'>Meke'it</Link>
         </div>
      </div>
   );
};

export default Copyrighting;
