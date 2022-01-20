import {CREATE_USER} from '../../constants/reduxConstants';

export const addNewUser = values => {
  return {
    type: CREATE_USER,
    payload: values,
  };
};
