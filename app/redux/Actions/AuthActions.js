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

export const is_Support = value => {
  return {
    type: Action.IS_SUPPORT,
    payload: value,
  };
};

export const resetError = error => {
  return {
    type: Action.RESET_ERROR,
    payload: error,
  };
};

export const recoverPassword = (email, key) => {
  return {
    type: Action.FORGOT_PASSWORD,
    payload: {[email]: key},
  };
};

export const block_User = values => {
  return {
    type: Action.BLOCKED_USER,
    payload: values,
  };
};
