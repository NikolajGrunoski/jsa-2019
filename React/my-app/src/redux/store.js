import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { userReducer } from './reducers/userReducer.js'
import { usersTableReducers } from './reducers/usersTableReducers.js'



const singleReducer = combineReducers({
    userReducer,
    usersTableReducers,
})

// Creates an empty store object = {}
const store = createStore(
    singleReducer,
    applyMiddleware(logger)
)

console.log(store.getState())

export default store