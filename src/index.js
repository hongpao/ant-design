// import React, {Component} from 'react';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
    Router,
    Route,
    IndexRoute,
    browserHistory
} from 'react-router'
// import routes from './routes'
import './index.css';
import * as serviceWorker from './serviceWorker';

import Home from './containers/Home/Home';

class App extends Component {
    render() {
        return ( 
            <div>
                {this.props.children} 
            </div>
        )
    }
}

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            {/* <Route path="/hp" component={Home}></Route> */}
        </Route>
    </Router>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();