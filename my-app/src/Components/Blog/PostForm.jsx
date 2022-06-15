import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import Breadcrumbs from '../Commun/Breadcrumbs';
import { useForm } from 'react-hook-form';
import { addPost } from '../../Redux/Actions/postActions';

const PostForm = props => {
   const { register, handleSubmit } = useForm();
   const [errors, seterrors] = useState({});

   //validate image
   const validateImage = image => {
      let err = [];
      const types = ['image/png', 'image/jpeg', 'image/gif'];
      //testing image type
      if (image && !types.includes(image.type)) {
         err.push("Type de l'image incorrect, doit etre png or jpeg or gif");
      }
      seterrors(err);
      return err.length === 0;
   };
   useEffect(() => {
      if (isFirstRun.current) {
         isFirstRun.current = false;
         return;
      }
      seterrors(props.errors);
   }, [props.errors]);

   //submit data
   const onSubmit = data => {
      const newPost = {
         title: data.title,
         description: data.description,
         file: data.file[0],
         user: props.auth.user.id,
      };

      /*  //create formData
      const formData = new FormData();
      Object.keys(newPost).map(key => {
         console.log(key, newPost[key]);
         formData.append(key, newPost[key]);
      });
      console.log(formData.title);

      //test image validation
      const isValid = validateImage(newPost.file);
      if (isValid) {
         formData.append('file', newPost.file);
      }
 */
      props.addPost(newPost, props.history);
   };

   //check for errors
   const isFirstRun = useRef(true);

   useEffect(() => {
      if (isFirstRun.current) {
         isFirstRun.current = false;
         return;
      }
      seterrors(props.errors);
   }, [props.errors]);

   return (
      <main>
         {console.log(errors)}
         <Breadcrumbs title='Ajouter' />
         <section className='contact text-center' data-aos='fade-up'>
            <h1 className='content'>Ajouter une poste </h1>
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
                           name='title'
                           id='title'
                           placeholder='Titre'
                           {...register('title')}
                        />
                        {errors.title && (
                           <div className='validate'>{errors.title}</div>
                        )}
                        <br />
                        <textarea
                           type='text'
                           className='form-control'
                           name='description'
                           id='description'
                           placeholder='Description '
                           {...register('description')}
                        />
                        {errors.description && (
                           <div className='validate'>{errors.description}</div>
                        )}
                        <br />
                        <input
                           type='file'
                           className='form-control'
                           name='file'
                           id='file'
                           placeholder='file'
                           {...register('file')}
                        />
                        {errors.file && (
                           <div className='validate'>{errors.file}</div>
                        )}
                        <br />
                     </div>
                     <p>
                        Consulter toutes
                        <Link to='/blog'> les postes</Link>.
                     </p>
                     <div className='text-center'>
                        <button type='submit' style={{ marginRight: '20px' }}>
                           Ajouter
                        </button>

                        <button type='reset'>Annuler</button>
                     </div>
                     {errors.post && (
                        <div className='validate'>{errors.post}</div>
                     )}
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

const mapStateToActions = { addPost };

export default connect(
   mapStateToProps,
   mapStateToActions
)(withRouter(PostForm));
