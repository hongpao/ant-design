import React, { Component } from 'react'
import { connect } from 'react-redux';
// import Store from '../../../store/reducer'
import Actions from '../actions'
import { Icon } from 'antd'
import '../mine.css';
import Part from './Part'

class MineMain extends Component {
    // constructor(props) {
    //     super(props)
    //     this.store = createStore(reducer)
    // }
    componentDidMount(){
        //订阅事件
        // Store.subscribe(() =>
        //     console.log(Store.getState())
        // );
        console.log('hongpao test')
        console.log(this.props)
    }

    //操作
    takeChange(){
        Actions.init()
    }

    render(){
        // console.log(Store.getState())
        return (
            // <Provider>
                <main>
                    <div className="content">
                        <Icon type="smile" theme="outlined"/>
                        hongpao test ！
                        <Part props={this.props}/>
                    </div>
                </main>
            // </Provider>
        )
    }
}

//需要渲染什么数据
function mapStateToProps(state) {
    return {
        state
    }
}
//需要触发什么行为
function mapDispatchToProps(dispatch) {
    return {
        PayIncrease: () => dispatch({ type: '涨工资' }),
        PayDecrease: () => dispatch({ type: '扣工资' })
    }
}

export default MineMain = connect(mapStateToProps, mapDispatchToProps)(MineMain)