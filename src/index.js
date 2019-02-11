import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux";
import {Provider} from 'react-redux';
import MyApp from './MyApp';
import allReducers from './reducers/index';

const store = createStore(allReducers);



ReactDOM.render(<Provider store={store}>
    <MyApp/>
</Provider>, document.getElementById('root'));
