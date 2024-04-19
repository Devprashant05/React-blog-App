import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from './reducers/AuthReducer';

const store = configureStore({
    reducer: {
        authReducer: AuthReducer
    }
})

export default store;