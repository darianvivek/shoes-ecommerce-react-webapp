import {configureStore} from '@reduxjs/toolkit';
import userreducer from './slices/userslice'
export const store=configureStore({
    reducer:{
        user:userreducer
    }
})