/**
 * Multer adds a body object and a file or files object to the request object.
 * The body object contains the values of the text fields of the form,
 * the file or files object contains the files uploaded via the form.
 */
import multer from 'multer';
import * as path from 'path';

// storage engine for multer
const storageEngine = multer.diskStorage({
   limits: {
      fileSize: 20000000, // 20000000 Bytes = 20 MB
   },
   destination: './uploads',
   filename: (req, file, callback) => {
      //generate filename
      const { originalname } = file;

      const fileExtension = (originalname.match(/\.+[\S]+$/) || [])[0];

      callback(null, `${file.fieldname}__${Date.now()}${fileExtension}`);
   },
});

// initialize multer
let upload = multer({
   storage: storageEngine,
   /*  limits: {
      fileSize: 20000000, // 20000000 Bytes = 20 MB
   }, */
});

export default upload;
