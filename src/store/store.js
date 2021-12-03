import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query';
import homeReducer from '../feature/homeSlice'
import { homeApi } from '../feature/homeApi'


export const store = configureStore({ 
	reducer: {
		[homeApi.reducerPath] : homeApi.reducer,
		list : homeReducer
	},
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware().concat([
			homeApi.middleware
		])
	}
 })

setupListeners(store.dispatch);

