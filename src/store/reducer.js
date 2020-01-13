/**
 * 
 * @param {*} state 
 * @param {*} action 
 */

import Types from '../utils/types'

const stores = {
    main: {
        total: 100
    }
}

function updateObject(oldObject, newValues) {
    // 用空对象作为第一个参数传递给 Object.assign，以确保是复制数据，而不是去改变原来的数据
    return Object.assign({}, oldObject, newValues)
}

const reducer = (state = stores, action) => {
    switch (action.type) {
        case Types.TEST:
            return state += 100;
        case '扣工资':
            return state -= 100;
        default:
            return state;
    }
}

export default reducer