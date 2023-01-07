import {configureStore} from '@reduxjs/toolkit'
import incdecReducer from './reducer/index'
export default configureStore({
    reducer:{
        number:incdecReducer,
    }
})