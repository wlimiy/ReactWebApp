import React,{Component} from 'react';
import HeaderComponent from '../../components/HeaderComponent';
//通过路由渲染的组件都会在this.props上增加很多属性，例如history,match等
export default class Detail extends Component{
    render(){
        // console.log(this.props.history);
        return(
            <div>
            {/*头部*/}
            <HeaderComponent title='商户详情' history={this.props.history}/>
            {/*商户信息*/}
            {/*购买和收藏*/}
            {/*评论*/}
            </div>
        )
    }
}