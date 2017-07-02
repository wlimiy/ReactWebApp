import React,{Component} from 'react';
import './index.less'
export default class Star extends Component{
    constructor(props){
        super(props);//[true,true,true,false,false]
        // console.log(props.count);
        let arr=[];
        for(let i=1;i<=5;i++){
            if(i<=props.count){
                arr.push(true);
            }else{
                arr.push(false);
            }
        }
        // console.log(arr);//[true, true, true, true, false]
        this.state={
            arr
        }
    }
    render(){
        return(
            <div>
                {this.state.arr.map((item,index)=>(
                    item?
                <i className='iconfont icon-collection_fill font' key={index}></i>:
                <i className='iconfont icon-collection font' key={index}></i>
                ))}
            </div>
        )
    }
}