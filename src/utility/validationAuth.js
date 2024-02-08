// import validator from 'validator';


// export function validateUserInput(userData) {
//   const errors = {};

//   if (!userData.fullName || userData.fullName.trim() === '') {
//     errors.fullName = 'Please enter fullname.';
//   }

//   if (!validator.isEmail(userData.email)) {
//     errors.email = 'Please enter a valid email.';
//   }

//   if (!validator.isMobilePhone(userData.mobile, 'any', { strictMode: false })) {
//     errors.mobile = 'Please enter a valid mobile number.';
//   }

//   if (!userData.password || userData.password.trim() === '') {
//     errors.password = 'Please enter a password.';
//   }

//   return errors;
// }