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