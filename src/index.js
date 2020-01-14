/**
 * Created by hongpao 2020.1.3
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './store/reducer'
// import {
//     Router,
//     Route,
//     IndexRoute,
//     browserHistory
// } from 'react-router'
import Routes from './routes'
import 'antd/dist/antd.css';
import './index.css';
import * as serviceWorker from './serviceWorker';

// import Home from './containers/Home/Home';
// import Main from './containers/Mine/MainMain';

// class App extends Component {
//     render() {
//         return ( 
//             <div>
//                 {this.props.children} 
//             </div>
//         )
//     }
// }

//创建store
const store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
        <Routes/>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();