import React from "react";
import router from './Routes'

// REDUX
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../reducers/store'


function App() {
    return (
        <Provider store={store}>
                <RouterProvider router={router} />
        </Provider>
    )
}

export default App