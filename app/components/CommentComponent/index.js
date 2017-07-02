import React,{Component} from 'react';
import CommentItem from '../../components/CommentComponent/CommentItem'
export default class CommentComponent extends Component{
    render(){
        return(
            <div>
            {this.props.data.map((item,index)=>(
                <CommentItem key={index} data={item}/>
            ))}
            CommentComponent
            </div>
        )
    }
}