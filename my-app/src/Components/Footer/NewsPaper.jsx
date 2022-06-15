import React from 'react';

function NewsPaper() {
   return (
      <div className='col-lg-4 col-md-6 footer-newsletter'>
         <h4>Notre journal</h4>
         <p>
            Saisissez votre adresse e-mail et recevez les toutes dernières
            informations de ACED: conseils et informations, offres, annonces
            d'équipe, et plus encore!
         </p>
         <form action='' method='post'>
            <input type='email' name='email' />
            <button type='submit'>S'inscrire</button>
         </form>
      </div>
   );
}

export default NewsPaper;
