import * as yup from 'yup';

export const ResetPasswordSchema = yup?.object()?.shape({
  email: yup?.string().email()?.required('Please enter code'),
  code: yup?.string()?.required('Please enter code'),
});
