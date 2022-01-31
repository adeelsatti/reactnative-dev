import * as yup from 'yup';

export const createPostSchema = yup?.object()?.shape({
  title: yup?.string()?.min(5)?.required(),
  description: yup?.string()?.min(10)?.required(),
});
