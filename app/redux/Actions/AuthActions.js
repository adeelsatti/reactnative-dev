import * as Action from '../../constants/reduxConstants';

export const addNewUser = values => {
  return {
    type: Action.CREATE_USER,
    payload: values,
  };
};

export const is_Login = value => {
  return {
    type: Action.IS_LOGIN,
    payload: value,
  };
};
