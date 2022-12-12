import {configureStore} from '@reduxjs/toolkit'

import cardReducer from './cartSlice';

const store = configureStore({
    reducer:{
        cart:cardReducer,
    }
})

export default store;