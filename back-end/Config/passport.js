import { Strategy, ExtractJwt } from 'passport-jwt';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const opts = {};
import user from '../Models/User.js';

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';

const PassportStrategy = passport => {
   passport.use(
      new Strategy(opts, (jwt_payload, done) => {
         User.findById(jwt_payload.id)
            .then(user => {
               if (user) {
                  return done(null, user);
               }
               return done(null, false);
            })
            .catch(err => console.log(err));
      })
   );
};
export default PassportStrategy;
