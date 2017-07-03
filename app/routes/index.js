import React,{Component} from 'react';
import Home from '../containers/Home';
import Detail from '../containers/Detail';
import Login from '../containers/Login';
import User from '../containers/User';
//路由两种类型 HashRouter BrowserRouter
import {
    HashRouter as Router,//提供一个路由容器
    Route,//单条路由
    Switch
} from 'react-router-dom';
export default class RouterMap extends Component{
    render(){
        return(
            <div>
                <Router>
                    <Switch>
                        /*exact 只有当path为/时，才匹配*/
                        <Route exact path='/' component={Home}/>
                        <Route path='/detail/:id' component={Detail}/>
                        {/*点击先跳转到登录页，登录后，再回到登录之前的页面，在login路径后可能需要保存上次点击login的路径*/}
                        <Route path='/login/:route?' component={Login}/>
                        <Route path='/user' component={User}/>
                    </Switch>
                </Router>
            </div>
    )
    }
}