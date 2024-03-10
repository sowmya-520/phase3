import { createSlice } from '@reduxjs/toolkit';

export const LoginSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isAuthenticated: false,
    error: null,
  },
  reducers: {
    loginUserSuccess: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.error = null;
    },
    loginUserFailure: (state, action) => {
      state.user = null;
      state.isAuthenticated = false;
      state.error = true;
    },
    
    logoutUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;
    }
  }
});


export const loginUser = ({ username, password }) => async dispatch => {
  try {
    const response = await fetch('http://16.171.4.184:8000/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });

    if (response.ok) {
      const user = await response.json();
      dispatch(loginUserSuccess(user));
    } else {
      const errorData = await response.json();
      dispatch(loginUserFailure(errorData.message));
    }
  } catch (error) {
    dispatch(loginUserFailure(error.message));
  }
};

export const { loginUserSuccess, loginUserFailure, registerUserSuccess, registerUserFailure, logoutUser } = LoginSlice.actions;
export const LoginReducer= LoginSlice.reducer;