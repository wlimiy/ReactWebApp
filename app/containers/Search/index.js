import React,{Component} from 'react';
import SearchHeader from '../../components/SearchHeader'
//可以从轮播图点击进来/seach/jingdian
//可以从搜索框内容进入，/search/all/keyword
export default class Search extends Component{
    render(){
        return(
            <div>
            <SearchHeader
                value={this.props.match.params.keyword||''}
                history={this.props.history}
                fn={this.toSearch.bind(this)}
            />
            </div>
        )
    }
    toSearch(value){
        this.props.history.push('/search/all/'+value);
    }
}