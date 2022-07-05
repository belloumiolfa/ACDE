import Dashboard from '../Components/AdminLayaout/Dashboard';
import Login from '../Components/Authentification/Login';
import Register from '../Components/Authentification/Register';
import Blog from '../Components/Blog/Blog';
import PostDetails from '../Components/Blog/PostDetails';
import PostForm from '../Components/Blog/PostForm';
import Home from '../Components/WelcomLayaout/Home';
import ProjectDetails from '../Components/WelcomLayaout/Portfolio/ProjectDetails';

const WelcomRoutes = [
   {
      private: false,
      path: '/home',
      component: Home,
      layout: '/welcom',
   },
   {
      private: false,
      path: '/project',
      component: ProjectDetails,
      layout: '/welcom',
   },
   {
      private: false,
      path: '/login',
      component: Login,
      layout: '/welcom',
   },
   {
      private: false,
      path: '/register',
      component: Register,
      layout: '/welcom',
   },
];
const BlogLayaout = [
   {
      private: true,
      path: '/acceuil',
      component: Blog,
      layout: '/blog',
   },
   {
      private: true,
      path: '/:id',
      component: PostDetails,
      layout: '/blog',
   },
   {
      private: true,
      path: '/addPost',
      component: PostForm,
      layout: '/blog',
   },
];
const dashboardRoutes = [
   {
      private: true,
      path: '/main',
      component: Dashboard,
      layout: '/dashboard',
   },
];

const routes = { WelcomRoutes, BlogLayaout, dashboardRoutes };
export default routes;
