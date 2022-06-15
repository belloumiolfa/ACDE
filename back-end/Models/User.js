import mongoose from 'mongoose';

const Schema = mongoose.Schema;
// Create Schema
const UserSchema = new Schema({
   firstName: {
      type: String,
      required: true,
   },
   lastName: {
      type: String,
      required: true,
   },
   email: {
      type: String,
      required: true,
   },
   password1: {
      type: String,
      required: true,
   },
   password2: {
      type: String,
      required: true,
   },
   admin: {
      type: Boolean,
      required: true,
      default: false,
   },
   date: {
      type: Date,
      default: Date().now,
   },
});
const User = mongoose.model('User', UserSchema);

export default User;
