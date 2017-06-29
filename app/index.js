import React from 'react';
import {render} from 'react-dom';
import App from './containers';
import './assets/index.less';
import {Provider} from 'react-redux';
//导入store
import {configureStore} from './store';
let store = configureStore(
    // {
    //     userInfo:{cityName:'上海'}//可以在configureStore传入初始状态
    // }
);//生成store
render(
    <Provider store = {store}>
        <App/>
    </Provider>
    ,document.querySelector('#root')
);