import Validator from 'validator';
import isEmpty from 'is-empty';

const ValidatePostInputs = data => {
   let errors = {};
   // Convert empty fields to an empty string so we can use validator functions
   data.title = !isEmpty(data.title) ? data.title : '';
   data.description = !isEmpty(data.description) ? data.description : '';
   data.file = !isEmpty(data.file) ? data.file : '';

   // Name checks
   if (Validator.isEmpty(data.title)) {
      errors.title = 'Le champ titre est obligatoire.';
   }
   if (Validator.isEmpty(data.description)) {
      errors.description = 'Le champ déscription est obligatoire.';
   }
   if (!Validator.isLength(data.title, { min: 6 })) {
      errors.title = 'Le titre doit étre une phrase.';
   }
   if (!Validator.isLength(data.description, { min: 20 })) {
      errors.description = 'La déscription doit étre une paragraphe.';
   }

   return {
      errors,
      isValid: isEmpty(errors),
   };
};
export default ValidatePostInputs;
