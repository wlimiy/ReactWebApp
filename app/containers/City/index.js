import React,{Component} from 'react';
import HeaderComponent from '../../components/HeaderComponent';
import {connect} from 'react-redux';
import CurrentCity from '../../components/CurrentCity';
import ChooseCity from '../../components/ChooseCity';
import * as Actions from '../../actions/userInfo';
import {bindActionCreators} from 'redux';
class City extends Component{
    changeCity(city){//city代表当前选择城市组件选择后的结果
        let oldInfo=this.props.userInfo;//取出原有的数据
        oldInfo.cityName=city;//更改成最新城市，将最新数据派发成动作
        this.props.userActions.update(oldInfo);
        //更改成功后，跳转到首页
        this.props.history.push('/');

    }
    render(){
        return(
            <div>
                {/*头*/}
                <HeaderComponent title='选择城市' history={this.props.history}/>
                {/*当前城市*/}
                <CurrentCity cityName={this.props.userInfo.cityName}/>
                {/*选择城市*/}
                <ChooseCity changeCity={this.changeCity.bind(this)}/>
            </div>
        )
    }
}
export default connect(
    state=>{
        return {userInfo:state.userInfo}
    },
    dispatch=>{
        return {userActions:bindActionCreators(Actions,dispatch)}
    }
)(City)