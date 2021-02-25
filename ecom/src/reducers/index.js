import React from 'react'
import { combineReducers } from 'redux'
import gitHubReducer from './repoReducer'

export default combineReducers({
    repo:gitHubReducer
})