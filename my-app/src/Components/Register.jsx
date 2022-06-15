import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs';
import { useForm } from 'react-hook-form';
import { registerUser } from '../Redux/Actions/authActions';

const Register = props => {
   const { register, handleSubmit } = useForm();
   const [errors, seterrors] = useState({});

   const onSubmit = data => {
      const newUser = {
         firstName: data.firstName,
         lastName: data.lastName,
         email: data.email,
         password1: data.password1,
         password2: data.password2,
      };
      console.log(newUser);
      props.registerUser(newUser, props.history);
   };

   //check for errors
   const isFirstRun = useRef(true);
   // If logged in and user navigates to Register page, should redirect them to dashboard
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

   return (
      <main>
         <Breadcrumbs title="S'inscrire" />

         <section className='contact text-center' data-aos='fade-up'>
            <h1 className='content'>Entrez vos coordonnées </h1>
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
                           type='text'
                           className='form-control'
                           name='firstName'
                           id='firstName'
                           placeholder='Nom'
                           {...register('firstName')}
                        />
                        {errors.firstName && (
                           <div className='validate'>{errors.firstName}</div>
                        )}
                        <br />
                        <input
                           type='text'
                           className='form-control'
                           name='lastName'
                           id='lastName'
                           placeholder='Prénom'
                           {...register('lastName')}
                        />
                        {errors.lastName && (
                           <div className='validate'>{errors.lastName}</div>
                        )}
                        <br />
                        <input
                           type='email'
                           className='form-control'
                           name='email'
                           id='emailLogin'
                           placeholder='Email'
                           {...register('email')}
                        />
                        {errors.email && (
                           <div className='validate'>{errors.email}</div>
                        )}
                        <br />
                        <input
                           type='password'
                           className='form-control'
                           name='password1'
                           id='password1'
                           placeholder='Mot de passe '
                           {...register('password1')}
                        />
                        {errors.password1 && (
                           <div className='validate'>{errors.password1}</div>
                        )}
                        <br />
                        <input
                           type='password'
                           className='form-control'
                           name='password2'
                           id='password2'
                           placeholder='Réécrivez votre mot de passe '
                           {...register('password2')}
                        />
                        {errors.password2 && (
                           <div className='validate'>{errors.password2}</div>
                        )}
                     </div>

                     <p>
                        Je suis déjà un membre
                        <Link to='/login'>Se connecter</Link>.
                     </p>
                     <div className='text-center'>
                        <button type='submit' style={{ marginRight: '20px' }}>
                           S'inscrire
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
};

const mapStateToProps = state => ({
   auth: state.auth,
   errors: state.errors,
});

const mapStateToActions = { registerUser };

export default connect(
   mapStateToProps,
   mapStateToActions
)(withRouter(Register));
