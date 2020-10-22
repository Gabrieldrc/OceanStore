import { createSlice } from '@reduxjs/toolkit';
import UserService from '../../services/user.service';

export const isLoggedSlice = createSlice({
  name: 'isLogged',
  initialState: {
    value: UserService.getCurrentUser()? true : false,
  },
  reducers: {
    signin: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = true;
    },
    logout: state => {
      state.value = false;
    },
  },
});

export const { signin, logout } = isLoggedSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selector = state => state.counter.value;

export default isLoggedSlice.reducer;
