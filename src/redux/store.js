import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './greeting/greettingSlice';

const store = configureStore({
  reducer: {
    greeting: greetingReducer,
  },
});

export default store;
