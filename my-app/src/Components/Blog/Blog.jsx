import React from 'react';
import { Link as RoutePath, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Posts from './Posts';
import Breadcrumbs from '../Commun/Breadcrumbs';

const Blog = props => {
   return (
      <main id='main'>
         <Breadcrumbs title='Blog' />

         <section className='inner-page'>
            <div className='container'>
               {props.auth.user.admin === true && (
                  <div className='add-post-btn'>
                     <RoutePath to='/addPost' className='active' smooth='true'>
                        Nouveau post
                     </RoutePath>
                  </div>
               )}
               <Posts />
            </div>
         </section>
      </main>
   );
};

const mapStateToProps = state => ({
   auth: state.auth,
   errors: state.errors,
});

const mapStateToActions = {};

export default connect(mapStateToProps, mapStateToActions)(withRouter(Blog));
