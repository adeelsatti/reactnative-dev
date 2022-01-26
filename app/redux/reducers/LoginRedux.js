import * as Action from '../../constants/reduxConstants';

const InitialState = {
  users: [],
  is_LogIn: false,
  error: 'error duplicate email',
  is_Support: false,
  recoveries: {},
};

export const userReducer = (state = InitialState, action) => {
  switch (action.type) {
    case Action.CREATE_USER: {
      const duplicateEmail = state?.users?.find(
        user => user?.email === action?.payload?.mail,
      );

      if (Boolean(duplicateEmail)) {
        return {
          ...state,
          error: 'Email already Exist Kindly Signup with Different Email',
        };
      }

      if (!duplicateEmail) {
        const id = state?.users?.length + 1;
        const addUser = {...action?.payload, id};
        return {...state, users: [...(state?.users ?? []), addUser]};
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
    case Action.RESET_ERROR: {
      return {
        ...state,
        error: '',
      };
    }
    case Action.FORGOT_PASSWORD: {
      const obj = action?.payload;
      const obj2 = state?.recoveries;
      let recover = {...obj2, ...obj};
      return {
        ...state,
        recoveries: recover,
      };
    }

    default: {
      return state;
    }
  }
};
