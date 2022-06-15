import mongoose from 'mongoose';

const Schema = mongoose.Schema;
// Create Schema
const PostSchema = new Schema({
   title: {
      type: String,
      required: true,
   },
   description: {
      type: String,
      required: true,
   },
   file: {
      type: String,
      required: false,
   },

   user: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      require: true,
   },

   date: {
      type: Date,
      default: Date().now,
   },
});
const Post = mongoose.model('Post', PostSchema);

export default Post;
/* likes: {
      type: [
         {
            user: {
               type: Schema.Types.ObjectId,
               ref: 'user',
            },
         },
      ],
   },
   comments: {
      type: [
         {
            user: {
               type: Schema.Types.ObjectId,
               ref: 'user',
            },
            comment: { type: String },
            addedAt: {
               type: Date,
               default: Date().now,
            },
         },
      ],
   }, */
