import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from '../../Utils/routes';

function AdminLayout() {
   let getRoutes = routes => {
      return routes.map((prop, key) => {
         if (prop.layout === '/dashboard') {
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
   return <Switch>{getRoutes(routes.dashboardRoutes)}</Switch>;
}

export default AdminLayout;
