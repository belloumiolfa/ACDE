import { BrowserRouter as Router, Route } from 'react-router-dom';
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
import Home from './Components/Home';
import ProjectDetails from './Components/ProjectDetails';
import ScrollToTop from './Components/ScrollToTop';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Blog from './Components/Blog';
import PostDetails from './Components/PostDetails';
import Login from './Components/Login';
import Register from './Components/Register';
import PrivateRoute from './Components/PrivateRoute';
import PostForm from './Components/PostForm';

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
      window.location.href = './login';
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
               <Header />
               <Route exact path='/' component={Home} />
               <Route exact path='/project' component={ProjectDetails} />
               <Route exact path='/login' component={Login} />
               <Route exact path='/register' component={Register} />

               <PrivateRoute exact path='/blog' component={Blog} />
               <PrivateRoute exact path='/blog/:id' component={PostDetails} />
               <PrivateRoute exact path='/addPost' component={PostForm} />

               <Footer />
               <ScrollToTop />
            </Router>
         </div>
      </Provider>
   );
};

export default App;
