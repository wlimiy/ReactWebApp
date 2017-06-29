import React,{Component} from 'react';
import {getList} from '../../../fetch/home';
import ListComponent from '../../../components/ListComponent';
export default class List extends Component{
    constructor(){
        super();
        this.state={
            hasMore:true,
            data:[]

        }
    }
    render(){
        return(
            <div className='list'>
            {this.state.data.length?<ListComponent data={this.state.data}/>:<div>正在加载</div>}

            </div>
        )
    }
    componentDidMount(){
        this.processData(getList(this.props.cityName,0));
    }
    //处理成功后的逻辑
    processData(result){
        result.then(res=>res.json()).then(({hasMore,data})=>{
            // console.log(data);
            this.setState({
                hasMore,
                data
            })
        })
    }
}