import { configureStore } from '@reduxjs/toolkit';
import userInfo from './UserInfo';

const store = configureStore({
  reducer: {
    userInfo
  }
});

export default store;
