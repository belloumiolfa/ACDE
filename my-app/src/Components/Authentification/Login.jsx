import React, { useState, useEffect, useRef } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Breadcrumbs from '../Commun/Breadcrumbs';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { loginUser } from '../../Redux/Actions/authActions';

function Login(props) {
   const { register, handleSubmit } = useForm();
   const [errors, seterrors] = useState({});

   //check for errors
   const isFirstRun = useRef(true);

   // If logged in and user navigates to Login page, should redirect them to dashboard
   useEffect(() => {
      if (props.auth.isAuthenticated) {
         props.history.push('/');
      }
   }, [props.auth.isAuthenticated, props.history]);

   useEffect(() => {
      if (isFirstRun.current) {
         isFirstRun.current = false;
         return;
      }
      seterrors(props.errors);
   }, [props.errors]);

   const onSubmit = data => {
      const user = {
         email: data.email,
         password: data.password,
      };
      props.loginUser(user, props.history);
   };

   return (
      <main>
         <Breadcrumbs title='Connecter' />
         <section className='contact text-center' data-aos='fade-up'>
            <h1 className='content'>Entrez votre email et mot de passe </h1>
            <br />
            <div className=' row'>
               <div className='col-lg-3'></div>
               <div className='col-lg-6'>
                  <form
                     className='php-email-form'
                     onSubmit={handleSubmit(onSubmit)}
                  >
                     <div className='form-group'>
                        <input
                           type='email'
                           className='form-control'
                           name='email'
                           id='emailLogin'
                           placeholder='Email'
                           data-rule='minlen:4'
                           {...register('email')}
                        />
                        {errors.email && (
                           <div className='validate'>{errors.email}</div>
                        )}
                        <br />
                        <input
                           type='password'
                           className='form-control'
                           name='password'
                           id='passwordLogin'
                           placeholder='Mot de passe '
                           data-rule='minlen:4'
                           {...register('password')}
                        />
                        {errors.password && (
                           <div className='validate'>{errors.password}</div>
                        )}
                     </div>

                     <p>
                        Je ne suis pas un membre{' '}
                        <Link to='/welcom/register'>S'inscrire içi</Link>.
                     </p>
                     <div className='text-center'>
                        <button type='submit' style={{ marginRight: '20px' }}>
                           Connecter
                        </button>

                        <button type='reset'>Annuler</button>
                     </div>
                  </form>
               </div>
               <div className='col-lg-3'></div>
            </div>
         </section>
      </main>
   );
}

const mapStateToProps = state => ({
   auth: state.auth,
   errors: state.errors,
});

const mapStateToActions = { loginUser };

export default connect(mapStateToProps, mapStateToActions)(withRouter(Login));
