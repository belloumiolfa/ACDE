import React, { useEffect } from 'react';

import { HashLink } from 'react-router-hash-link';
import { Link as RoutePath, withRouter } from 'react-router-dom';

import mobileNave from '../../Utils/Navigation';

import { logoutUser } from '../../Redux/Actions/authActions';
import { connect } from 'react-redux';

const Header = props => {
   useEffect(() => {
      mobileNave();
   }, []);

   const handleLogOut = () => {
      props.logoutUser(props.history);
   };

   return (
      <header id='header' className='fixed-top header-inner-pages'>
         <div className='container d-flex align-items-center justify-content-between'>
            <h1 className='logo'>
               {/*  if i prefer to use a text logo */}
               <RoutePath to='/'>
                  Acde<span>.</span>
               </RoutePath>
               {/*  <RoutePath  to='/#/' className='logo'>
                  <img src='/logo.png' alt='' className='img-fluid' />
               </RoutePath> */}
            </h1>
            <nav className='nav-menu d-none d-lg-block'>
               <ul>
                  <li className='active'>
                     <HashLink smooth='true' to='/#hero'>
                        Acceuil
                     </HashLink>
                  </li>
                  <li>
                     <HashLink className='active' to='/#about' smooth='true'>
                        Nous
                     </HashLink>
                  </li>

                  <li>
                     <HashLink className='active' smooth='true' to='/#services'>
                        Services
                     </HashLink>
                  </li>

                  <li>
                     <HashLink
                        className='active'
                        smooth='true'
                        to='/#portfolio'
                     >
                        Portfolio
                     </HashLink>
                  </li>
                  <li>
                     <HashLink className='active' smooth='true' to='/#team'>
                        Equipe
                     </HashLink>
                  </li>
                  {props.auth.isAuthenticated === true && (
                     <li>
                        <RoutePath
                           to='/blog/acceuil'
                           className='active'
                           smooth='true'
                        >
                           Blog
                        </RoutePath>
                     </li>
                  )}

                  <li>
                     <HashLink className='active' smooth='true' to='/#contact'>
                        Contact
                     </HashLink>
                  </li>
               </ul>
            </nav>

            {/* .nav-menu */}
            {props.auth.isAuthenticated === true ? (
               <div className='get-started-btn scrollto' onClick={handleLogOut}>
                  Déconnecter
               </div>
            ) : (
               <RoutePath
                  smooth='true'
                  to='/welcom/login'
                  className='get-started-btn scrollto'
               >
                  Connecter
               </RoutePath>
            )}
         </div>
      </header>
   );
};

const mapStateToProps = state => ({
   auth: state.auth,
   errors: state.errors,
});

const mapStateToActions = { logoutUser };

export default connect(mapStateToProps, mapStateToActions)(withRouter(Header));
