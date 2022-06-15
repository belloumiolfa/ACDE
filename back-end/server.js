import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import passport from 'passport';
import cors from 'cors';
import bodyParser from 'body-parser';

import connectDB from './Config/db.js';
import PassportStrategy from './Config/passport.js';
import Post from './Routes/Post.js';
import User from './Routes/User.js';

//initialse dotenv
dotenv.config();

//initialse express
const app = express();

// Bodyparser middleware
app.use(cors());
// Bodyparser middleware
app.use(
   bodyParser.urlencoded({
      extended: false,
   })
);
app.use(bodyParser.json());
//connect db
connectDB();

//API testing
app.get('/', (req, res) => {
   res.send('API is running...');
});
app.get('/api/getData', (req, res) => {
   res.json({ user: 'olfa' });
});

// Passport middleware
app.use(passport.initialize());

// Passport config
PassportStrategy(passport);

// Routes
app.use('/users', User);
app.use('/posts', Post);

// process.env.port is Heroku's port if you choose to deploy the app there
const port = process.env.PORT || 5000;

app.listen(port, () =>
   console.log(
      `Server up and running ${process.env.NODE_ENV} mode on port ${port} !`
         .yellow.bold
   )
);
