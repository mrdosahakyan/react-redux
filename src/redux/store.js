import { applyMiddleware, createStore } from "redux"
import { rootReducer } from "./redux/rootReducer"
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

 const store = createStore(rootReducer, composedEnhancer)

 export default store