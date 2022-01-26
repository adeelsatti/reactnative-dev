import * as yup from 'yup';

export const ResetPasswordSchema = yup?.object?.shape({
  code: yup?.string()?.required('Please enter code'),
});
