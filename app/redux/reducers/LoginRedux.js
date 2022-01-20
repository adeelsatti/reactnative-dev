import * as Action from '../../constants/reduxConstants';

const userInitialState = {
  users: [],
};

export const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case Action.CREATE_USER: {
      const duplicateEmail = state?.users?.find(
        user => user?.email === action?.payload?.email,
      );
      if (duplicateEmail) {
        return state;
      }
      return {...state, users: [...(state?.users ?? []), action?.payload]};
    }
    default: {
      return state;
    }
  }
};
