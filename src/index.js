import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'

const store = createStore(reducer, middleware)

// Provider comes from the react-redux package and makes it possible for components to access the store via the connect() function

ReactDOM.render(  
<Provider store = {store}> 
    <App />
</Provider>, document.getElementById('root'))