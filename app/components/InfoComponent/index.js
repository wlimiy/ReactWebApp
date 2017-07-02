import React,{Component} from 'react';
import Star from '../../components/Star';
import './index.less';
export default class InfoComponent extends Component{
    render(){
        // console.log(this.props.data);
        let {img,title,desc,subTitle,star,price}=this.props.data;
        return(
            <div className='info-component'>
                <div className='info-list'>
                    <img src={img}/>
                <div>
                    <h3>{title}</h3>
                    <div className='info-star'>

                        <Star count={star}/><span>{price}</span>
                    </div>
                    <p>{subTitle}</p>
                </div>
                </div>
                <br/>
                <hr/>
                <div dangerouslySetInnerHTML={{__html:desc}}></div>
            </div>
        )
    }
}