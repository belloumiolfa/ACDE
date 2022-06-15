import Validator from 'validator';
import isEmpty from 'is-empty';

const validateRegisterInput = data => {
   console.log(data);
   let errors = {};
   // Convert empty fields to an empty string so we can use validator functions
   data.firstName = !isEmpty(data.firstName) ? data.firstName : '';
   data.lastName = !isEmpty(data.lastName) ? data.lastName : '';
   data.email = !isEmpty(data.email) ? data.email : '';
   data.password = !isEmpty(data.password1) ? data.password1 : '';
   data.password2 = !isEmpty(data.password2) ? data.password2 : '';

   // Name checks
   if (Validator.isEmpty(data.firstName)) {
      errors.firstName = 'Le champ nom est obligatoire.';
   }
   if (Validator.isEmpty(data.lastName)) {
      errors.lastName = 'Le champ nom est obligatoire.';
   }

   // Email checks
   if (Validator.isEmpty(data.email)) {
      errors.email = 'Le champ email est obligatoire.';
   } else if (!Validator.isEmail(data.email)) {
      errors.email = 'Email est invalide.';
   }

   // Password checks
   if (Validator.isEmpty(data.password1)) {
      errors.password1 = 'Le champ password est obligatoire.';
   }
   if (Validator.isEmpty(data.password2)) {
      errors.password2 = 'Réécrivez vote mot de passe.';
   }
   if (!Validator.isLength(data.password1, { min: 6, max: 30 })) {
      errors.password1 = 'Le mot de passe doit être au moins de 6 caractères';
   }
   if (!Validator.equals(data.password1, data.password2)) {
      errors.password2 = 'les mots de passe doivent correspondre';
   }
   return {
      errors,
      isValid: isEmpty(errors),
   };
};
export default validateRegisterInput;
