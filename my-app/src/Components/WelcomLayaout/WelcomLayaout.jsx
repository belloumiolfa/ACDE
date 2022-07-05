import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from '../../Utils/routes';
import ScrollToTop from '../Commun/ScrollToTop';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function WelcomLayaout() {
   let getRoutes = routes => {
      return routes.map((prop, key) => {
         if (prop.layout === '/welcom') {
            return (
               <Route
                  path={prop.layout + prop.path}
                  render={props => <prop.component {...props} />}
                  key={key}
               />
            );
         } else {
            return null;
         }
      });
   };
   return (
      <div>
         {' '}
         <Header />
         <Switch>{getRoutes(routes.WelcomRoutes)}</Switch>
         <Footer />
         <ScrollToTop />
      </div>
   );
}

export default WelcomLayaout;
