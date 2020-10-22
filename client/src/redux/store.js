import { configureStore } from '@reduxjs/toolkit';
import isLoggedReducer from './reducers/isLogged.reducer';
import currentUserReducer from './reducers/currentUser.reducer';

export default configureStore({
  reducer: {
    isLogged: isLoggedReducer,
    currenUser: currentUserReducer,
  },
});