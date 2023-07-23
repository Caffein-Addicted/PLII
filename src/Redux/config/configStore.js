import { configureStore } from '@reduxjs/toolkit';
import youtubeDataSlice from '../modules/youtubeDataSlice';

const store = configureStore({
  reducer: {
    youtubeDataSlice
  }
});

export default store;
