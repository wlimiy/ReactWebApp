import * as Types from '../action-types/store';
//actionCreator 是一个函数
export function add(id) {//updata修改的动作
    return {
        type:Types.ADD_STORE,
        data:id
    }
}
export function remove(id) {//updata修改的动作
    return {
        type:Types.REMOVE_STORE,
        data:id
    }
}