import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const authAdapter = createEntityAdapter();

const initialState = authAdapter.getInitialState({
  login: 'developer21',
  password: '123456',
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
});

export const selectors = {
  getLogin: (state) => state.auth.login,
  getPassword: (state) => state.auth.password,
};

export default authSlice.reducer;
