import express from 'express';
const router = express.Router();

// Load input validation
import ValidatePostInputs from '../Validations/post.js';

// Load Post model
import Post from '../Models/Post.js';

//import multer configuration
import upload from '../Config/multer.js';
//upload.single('image'),

// @route POST api/post/add
// @desc Add new post
// @access Public
router.post('/add', (req, res) => {
   // req.body will hold the text fields

   const { title, description, user } = req.body;

   // req.file will hold the file field
   //get the path of the file
   const imagePath = req.file ? req.file.path : '../uploads/counts-img.jpg';

   const newPost = new Post({
      title: title,
      description: description,
      user: user,
      file: imagePath,
   });
   // Form validation
   const { errors, isValid } = ValidatePostInputs(newPost);

   // Check validation
   if (!isValid) {
      return res.status(400).json(errors);
   }

   // search post with title
   Post.findOne({ title }).then(post => {
      //handle error if exist
      if (post) {
         errors.post = 'La Poste est dèja enregistré';
         return res.status(400).json(errors);
      } else {
         // Save post in the database
         newPost
            .save()
            .then(data => {
               console.log(data);
               res.json(data);
            })
            .catch(err => {
               console.log(err);
            });
      }
   });
});

export default router;
