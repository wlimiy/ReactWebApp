import React,{Component} from 'react';
import HeaderComponent from '../../components/HeaderComponent';
import Info from '../../containers/Detail/subpage/Info';
import Comment from '../../containers/Detail/subpage/Comment';
//通过路由渲染的组件都会在this.props上增加很多属性，例如history,match等
export default class Detail extends Component{
    render(){
        // console.log(this.props);
        return(
            <div>
            {/*头部*/}
            <HeaderComponent title='商户详情' history={this.props.history}/>
            {/*商户信息*/}
            <Info id={this.props.match.params.id}/>
            {/*购买和收藏*/}
            <Buy/>
            {/*评论*/}
            <Comment id={this.props.match.params.id}/>
            </div>
        )
    }
}