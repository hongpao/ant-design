import React, {Component} from 'react';
import {
    Router,
    Route,
    IndexRoute,
    browserHistory
} from 'react-router';

import Home from './containers/Home/Home';
import Main from './containers/Mine/MainMain';

/**
 * 页面级父组件
 */
class App extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

/**
 * 页面路由配置表
 */
const routes = () => {
    return (
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home} />
                <Route path="/mine" component={Main}/>
            </Route>
        </Router>
    )
}

export default routes;