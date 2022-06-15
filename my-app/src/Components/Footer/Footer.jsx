import React from 'react';

/* import components */
import Copyrighting from './Copyrighting';
import FastContact from './FastContact';
import LinksFirstList from './LinksFirstList';
import LinksSecondList from './LinksSecondList';
import NewsPaper from './NewsPaper';

const Footer = () => {
   return (
      <footer id='footer'>
         <div className='footer-top'>
            <div className='container'>
               <div className='row'>
                  <FastContact />
                  <LinksFirstList />
                  <LinksSecondList />
                  <NewsPaper />
               </div>
            </div>
         </div>
         <Copyrighting />
      </footer>
   );
};

export default Footer;
