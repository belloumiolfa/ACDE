import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
const router = express.Router();

// Load input validation
import validateRegisterInput from '../Validations/register.js';
import validateLoginInput from '../Validations/login.js';

// Load User model
import User from '../Models/User.js';

// @route POST users/register
// @desc Register user
// @access Public
router.post('/register', (req, res) => {
   // Form validation
   const { errors, isValid } = validateRegisterInput(req.body);
   // Check validation
   if (!isValid) {
      return res.status(400).json(errors);
   }

   User.findOne({ email: req.body.email }).then(user => {
      if (user) {
         errors.email = "L'email existe déjà";
         return res.status(400).json(errors);
      } else {
         const newUser = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password1: req.body.password1,
            password2: req.body.password2,
         });
         // Hash password before saving in database
         bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password1, salt, (err, hash) => {
               if (err) throw err;
               newUser.password1 = hash;
               newUser.password2 = hash;
               newUser
                  .save()
                  .then(user => res.json(user))
                  .catch(err => console.log(err));
            });
         });
      }
   });
});

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post('/login', (req, res) => {
   // Form validation
   const { errors, isValid } = validateLoginInput(req.body);

   // Check validation
   if (!isValid) {
      return res.status(400).json(errors);
   }

   const email = req.body.email;
   const password = req.body.password;
   // Find user by email

   User.findOne({ email }).then(user => {
      // Check if user exists
      if (!user) {
         errors.email = "L'email n'existe pas";
         return res.status(400).json(errors);
      }
      // Check password
      bcrypt.compare(password, user.password1).then(isMatch => {
         if (isMatch) {
            // User matched
            // Create JWT Payload
            const payload = {
               id: user.id,
               name: user.firstName,
               admin: user.admin,
            };
            // Sign token
            jwt.sign(
               payload,
               process.env.secretOrKey,
               {
                  expiresIn: 31556926, // 1 year in seconds
               },
               (err, token) => {
                  res.json({
                     success: true,
                     token: 'Bearer ' + token,
                  });
               }
            );
         } else {
            errors.password = 'Mot de passe incorrect';
            return res.status(400).json(errors);
         }
      });
   });
});

export default router;
