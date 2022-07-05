import {
   BrowserRouter as Router,
   Redirect,
   Route,
   Switch,
} from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import $ from 'jquery';
import jwt_decode from 'jwt-decode';
import setAuthToken from './Utils/setAuthToken';

/* =========== Import Redux =========== */
import { Provider } from 'react-redux';
import store from './Redux/Store';
import { setCurrentUser, logoutUser } from './Redux/Actions/authActions';

/* =========== Import Components =========== */
import PrivateRoute from './Components/Commun/PrivateRoute';
import WelcomLayaout from './Components/WelcomLayaout/WelcomLayaout';
import BlogLayaout from './Components/Blog/BlogLayaout';
import AdminLayout from './Components/AdminLayaout/AdminLayout';

// Check for token to keep user logged in
if (localStorage.jwtToken) {
   // Set auth token header auth
   const token = localStorage.jwtToken;
   setAuthToken(token);
   // Decode token and get user info and exp
   const decoded = jwt_decode(token);
   // Set user and isAuthenticated
   store.dispatch(setCurrentUser(decoded));

   // Check for expired token
   const currentTime = Date.now() / 1000; // to get in milliseconds
   if (decoded.exp < currentTime) {
      // Logout user
      store.dispatch(logoutUser());
      // Redirect to login
      window.location.href = './welcom/login';
   }
}

const App = () => {
   useEffect(() => {
      //Small library to animate elements on your page as you scroll.
      AOS.init({
         duration: 1000,
         once: true,
      });

      // Preloader
      $(window).on('load', () => {
         if ($('#preloader').length) {
            $('#preloader')
               .delay(100)
               .fadeOut('slow', function () {
                  $(this).remove();
               });
         }
      });
   });

   return (
      <Provider store={store}>
         <div className='App'>
            <Router>
               <Switch>
                  <Route
                     path='/welcom'
                     render={props => <WelcomLayaout {...props} />}
                  />
                  <Route
                     path='/blog'
                     render={props => <BlogLayaout {...props} />}
                  />
                  <Route
                     path='/dashboard'
                     render={props => <AdminLayout {...props} />}
                  />
                  <Redirect from='/' to='/welcom/home' />
               </Switch>
            </Router>
         </div>
      </Provider>
   );
};

export default App;
