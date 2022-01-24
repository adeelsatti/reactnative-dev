import * as Action from '../../constants/reduxConstants';

const InitialState = {
  users: [],
  is_LogIn: false,
  error: 'error duplicate email',
  is_Support: false,
};

export const userReducer = (state = InitialState, action) => {
  switch (action.type) {
    case Action.CREATE_USER: {
      const duplicateEmail = state?.users?.find(
        user => user?.email === action?.payload?.email,
      );

      if (duplicateEmail) {
        return {
          ...state,
          error: 'Email already Exist Kindly Signup with Different Email',
        };
      }

      if (!duplicateEmail) {
        return {...state, users: [...(state?.users ?? []), action?.payload]};
      }
    }
    case Action.IS_LOGIN: {
      return {
        ...state,
        is_Login: action?.payload,
      };
    }
    case Action.IS_SUPPORT: {
      return {
        ...state,
        is_Support: action?.payload,
      };
    }
    default: {
      return state;
    }
  }
};
