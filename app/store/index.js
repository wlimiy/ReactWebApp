import {createStore} from 'redux';
import reducers from '../reducers';
export function configureStore(initState) {
    return createStore(reducers,initState,
    window.devToolsExtension?window.devToolsExtension():undefined)
}
//插件redux-tools：可以查看当前redux所有状态