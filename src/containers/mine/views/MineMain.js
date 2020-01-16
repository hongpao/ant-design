import React, { Component } from 'react'
// import { Icon } from 'antd'
import store from '../../../store/reducer'
import '../mine.css';
import Part from './Part'

class MineMain extends Component {
    // 构造器
    constructor(props) {
        super(props)
        store.subscribe(() =>
            this.store = store.getState()
        )
        // this.store = props
    }

    componentDidMount(){
        // store.subscribe(() =>
        //     console.log(store.getState())
        // )
    }

    render(){
        // console.log(this.store, 'hongpao')
        return (
            <main>
                <div className="content">
                    {/* <Icon type="smile" theme="outlined"/> */}
                    hongpao test ！
                    <Part store={this.props}/>
                </div>
            </main>
        )
    }
}

export default MineMain