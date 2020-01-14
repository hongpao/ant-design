/**
 * 页面逻辑处理
 * created by hongpao 2020.1.11
 */
import Types from '../../utils/types'

const actions = {
    /**
     * 
     * @param {*} params 
     */
    init(params) {
        console.log(123)
    },

    haha(dispatch) {
        dispatch({
            type: Types.TEST,
            df: 333
        })
        console.log(123321)
    }
}

export default actions