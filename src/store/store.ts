import {configureStore} from '@reduxjs/toolkit';
import json from './slice/json';

const store = configureStore({
	reducer: {
		json,
	},
});

export default store;