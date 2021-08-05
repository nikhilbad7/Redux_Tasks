import {configureStore} from '@reduxjs/toolkit';
import userReducer from './user';
import authReducer from './auth';



const store = configureStore({
		reducer: {
			auth: authReducer,
			users: userReducer
		}
	});

export default store;