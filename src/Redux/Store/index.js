import {configureStore, combineReducers} from '@reduxjs/toolkit'
import authReducer from '../Reducers/auth';
import DashListReducer from '../Reducers/PendingConsultation'
import ListPatientReducer from '../Reducers/Patients'

const store = configureStore({ 

    reducer : {

        SigninR : authReducer,
        DashList : DashListReducer,
        ListPatients : ListPatientReducer       
       
    }

})

export default store;

