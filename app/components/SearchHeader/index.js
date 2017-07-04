import React,{Component} from 'react';
import SearchInput from '../../components/SearchInput';
import './index.less'
export default class Home extends Component{
    back(){
        this.props.history.go(-1);
    }
    render(){
        return(
            <div className='back search-header'>
                <i className='iconfont icon-fanhui'
                    onClick={this.back.bind(this)}
                ></i>
                <div>
                    <SearchInput
                        value={this.props.value}
                        fn={this.props.fn}
                    />
                </div>
            </div>
        )
    }
}