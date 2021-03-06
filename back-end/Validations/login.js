import Validator from 'validator';
import isEmpty from 'is-empty';

const validateLoginInput = data => {
   let errors = {};

   // Convert empty fields to an empty string so we can use validator functions
   data.email = !isEmpty(data.email) ? data.email : '';
   data.password = !isEmpty(data.password) ? data.password : '';

   // Email checks
   if (Validator.isEmpty(data.email)) {
      errors.email = 'Le champ e-mail est obligatoire.';
   } else if (!Validator.isEmail(data.email)) {
      errors.email = 'Le courriel est invalide.';
   }
   // Password checks
   if (Validator.isEmpty(data.password)) {
      errors.password = 'Le champ du mot de passe est obligatoire.';
   }
   return {
      errors,
      isValid: isEmpty(errors),
   };
};
export default validateLoginInput;
