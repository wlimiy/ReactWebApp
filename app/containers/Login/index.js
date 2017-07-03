import React,{Component} from 'react';
import HeaderComponent from '../../components/HeaderComponent';
import {connect} from 'react-redux';
import * as Actions from '../../actions/userInfo';//拿到所有actionCreator对象
import {bindActionCreators} from 'redux';
import LoginComponent from '../../components/LoginComponent';
class Login extends Component{
    constructor(){
        super();
        this.state={
            login:false//默认没有登录过，写一个方法校验是否登录，默认不显示登录组件
        }
    }
    render(){
        return(
            <div>
                <HeaderComponent title='登录' history={this.props.history}/>
                {/*如果登录过，显示登录组件，否则不显示直接跳转用户页面*/}
                {this.state.login?<LoginComponent
                    login={this.login.bind(this)}/>:<div></div>}
            </div>
        )
    }
    //在这里需要写一个方法，这个方法是登录的，目的是将用户名存入到redux里
    login(username){
        let info=this.props.userInfo;
        info.username=username;
        //更新redux中的state
        this.props.userActions.update(info);
        //登录成功跳转到用户页面
        if(this.props.match.params.route){
            this.props.history.push(decodeURIComponent(this.props.match.params.route))
        }else{
            this.props.history.push('/user')
        }

    }
    componentDidMount(){
        this.checkLogin();
    }
    checkLogin(){//检查是否登录，在redux中，state.userInfo是否有username,如果有，则登录过
        if(this.props.userInfo.username){
            this.props.history.push('/user');
        }
        this.setState({
            login:true,//显示登录组件
        })
    }
}
export default connect(
    state=>{
        return {userInfo:state.userInfo}
    },
    dispatch=>{
        return {userActions:bindActionCreators(Actions,dispatch)}
    }
)(Login)