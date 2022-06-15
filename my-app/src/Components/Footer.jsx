import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Copyrighting from './Copyrighting';

const Footer = () => {
   return (
      <footer id='footer'>
         <div className='footer-top'>
            <div className='container'>
               <div className='row'>
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
                           <HashLink
                              className='active'
                              to='/#about'
                              smooth={true}
                           >
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

                  <div className='col-lg-4 col-md-6 footer-newsletter'>
                     <h4>Notre journal</h4>
                     <p>
                        Saisissez votre adresse e-mail et recevez les toutes
                        dernières informations de ACED: conseils et
                        informations, offres, annonces d'équipe, et plus encore!
                     </p>
                     <form action='' method='post'>
                        <input type='email' name='email' />
                        <button type='submit'>S'inscrire</button>
                     </form>
                  </div>
               </div>
            </div>
         </div>
         <Copyrighting />
      </footer>
   );
};

export default Footer;
