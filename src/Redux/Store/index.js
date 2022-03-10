import {configureStore, combineReducers} from '@reduxjs/toolkit'
import authReducer from '../Reducers/auth';

const store = configureStore({ 

    reducer : {

        SigninR : authReducer
    }

})

export default store;

