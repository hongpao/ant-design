import React, {Component} from 'react';
import {
    Router,
    Route,
    IndexRoute,
    browserHistory
} from 'react-router';

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

const routes = () => {
    return (
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={App}/>
                <Route path="/hp" component={Home}/>
            </Route>
        </Router>
    )
}

export default routes;