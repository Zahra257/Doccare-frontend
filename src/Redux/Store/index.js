import {configureStore, combineReducers} from '@reduxjs/toolkit'
import authReducer from '../Reducers/auth';
import DashListReducer from '../Reducers/PendingConsultation'

const store = configureStore({ 

    reducer : {

        SigninR : authReducer,
        DashList : DashListReducer
    }

})

export default store;

