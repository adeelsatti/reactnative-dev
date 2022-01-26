import * as yup from 'yup';

export const signUpValidationSchema = yup?.object()?.shape({
  fName: yup?.string()?.min(5)?.required('Please enter your first name'),
  lName: yup?.string()?.min(5)?.required('Please enter your last name'),
  email: yup?.string()?.email()?.required(),
  password: yup
    ?.string()
    ?.min(4)
    ?.max(10, 'Password should not exceed 10 chars.')
    ?.required(),
  confirmPassword: yup
    ?.string()
    .when('password', {
      is: val => (val.length > 0 ? true : false),
      then: yup
        ?.string()
        .oneOf([yup?.ref('password')], 'Both password need to be same'),
    })
    .required('Confirm Password Required'),
  gender: yup
    ?.boolean()
    ?.oneOf([0, 1], 'Selecting the gender field is required'),
  phone: yup?.string()?.min(11)?.required(),
  dob: yup?.string()?.required(),
});
