import React,{Component} from 'react';
import Home from '../containers/Home';
import Detail from '../containers/Detail'
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
                    </Switch>
                </Router>
            </div>
    )
    }
}