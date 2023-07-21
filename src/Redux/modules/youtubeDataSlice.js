import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  youtubeDatas: [],
  isLoading: false,
  isError: false,
  error: null
};

export const __getYoutubeData = createAsyncThunk('getYoutubeData', async (payload, thunkAPI) => {
  try {
    const response = await axios.get('http://localhost:4000/youtubeDatas');
    console.log(response.data);
    return thunkAPI.fulfillWithValue(response.data);
  } catch (error) {
    console.log('error', error);
    return thunkAPI.rejectWithValue();
  }
});

export const youtubeDataSlice = createSlice({
  name: 'youtubeData',
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [__getYoutubeData.fulfilled]: (state, action) => {
      console.log('완료');
      state.isLoading = true;
    },
    [__getYoutubeData.pending]: (state, action) => {
      console.log('처리중');
      state.isLoading = false;
      state.youtubeDatas = action.payload;
    },
    [__getYoutubeData.rejected]: (state, action) => {
      console.log('실패');
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    }
  }
});

export const {} = youtubeDataSlice.actions;
export default youtubeDataSlice.reducer;
