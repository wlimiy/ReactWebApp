import React,{Component} from 'react';
import HeaderComponent from '../../components/HeaderComponent'
export default class User extends Component{
    render(){
        return(
            <div>
                <HeaderComponent title='用户' history={this.props.history}/>
            </div>
        )
    }
}