import React,{Component} from 'react';
import Star from '../../../components/Star';
import './index.less'
export default class CommentItem extends Component{
    render(){
        let {username,comment,star} =this.props.data;
        return(
            <div className='comment-item'>
                <div>
                    <i className="iconfont icon-yonghufill"></i>
                    {username}
                </div>
                <Star count={star}/>
                <div>
                    {comment}
                </div>
            </div>
        )
    }
}