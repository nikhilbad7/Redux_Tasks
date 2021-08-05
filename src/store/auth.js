import {createSlice} from '@reduxjs/toolkit';

const initialAuthState = {
	username:"hruday@gmail.com",
 	password:"hruday123",

	isAuthenticated: false
};

const authSlice = createSlice({
	name: 'authentication',
	initialState: initialAuthState,
	reducers: {
		login(state) {
			state.isAuthenticated = true;
		},
		logout(state) {
			state.isAuthenticated = false;
		}
	}
});

export const authActions = authSlice.actions;

export default authSlice.reducer;