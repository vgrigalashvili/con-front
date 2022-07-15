import React from 'react';
import ReactDOM from "react-dom/client";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import App from "./App";

import SignUp from "./routes/Signup";
import SignIn from "./routes/Signin";
import Contacts from "./routes/Contacts"

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import reducers from './reducers'
import { Provider } from 'react-redux';


const store = createStore(reducers, compose(applyMiddleware(thunk)))



const root = ReactDOM.createRoot(
    document.getElementById("root")
);
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="signin" element={<SignIn />} />
                    <Route path="signup" element={<SignUp />} />
                    <Route path="contacts" element={<Contacts />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </Provider>,
);