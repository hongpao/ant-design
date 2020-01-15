import React, { Component } from 'react'
import { Icon } from 'antd'
// import Stores from '../../../store/reducer'
import '../mine.css';
import Part from './Part'

class MineMain extends Component {
    // 构造器
    // constructor(props) {
    //     super(props)
    // }
 
    render(){
        console.log(this.props.main, 'hongpao')
        return (
            <main>
                <div className="content">
                    <Icon type="smile" theme="outlined"/>
                    hongpao test ！
                    <Part store={this.props}/>
                </div>
            </main>
        )
    }
}

export default MineMain