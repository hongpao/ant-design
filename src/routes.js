import React, {Component} from 'react';
import {
    Router,
    Route,
    IndexRoute,
    browserHistory
} from 'react-router';

import Header from './components/header/Header';
import Footer from './components/footer/Footer'

import Home from './containers/home/Home';
import Mine from './containers/mine/views/MineMain';

/**
 * 页面级父组件
 */
class App extends Component {
    render() {
        return (
            <div id="J-website">
                <Header/>
                {this.props.children}
                <Footer/>
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
                <IndexRoute component={Mine} />
                <Route path="/home" component={Home}/>
                <Route path="/mine" component={Mine}/>
            </Route>
        </Router>
    )
}

export default routes;