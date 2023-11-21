import appContextActions from "./actions/actions";
import { parseToken } from "../utils/jwt";

export const initialState = {
  isUserAuthenticated: false,
  user: {},
};

export const appContextReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case appContextActions.signIn: {
      const token = actions.payload;
      const user = parseToken(token);
      return { ...state, isUserAuthenticated: true, user };
    }

    default:
      return state;
  }
};
