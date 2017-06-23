import React,{Component} from 'react';
import ReactSwipe from 'react-swipe';
import './index.less';
export default class Slider extends Component{
    constructor(){
        super();
        this.state={
            index:0
        }
    }
    render(){
        let opts={
            continuous:false,
            callback:(index)=>{
                this.setState({
                    index
                });
            }
        };

        return(
            <div>
                <ReactSwipe className="carousel" swipeOptions={opts}>
                    <div>
                        <ul>
                            <li><i className="iconfont icon-xuegao"></i><span>美食0</span></li>                                         <li><i className="iconfont icon-hanbaobao"></i><span>电影0</span></li>
                           <li><i className="iconfont icon-sanmingzhi"></i><span>酒店0</span></li>
                           <li><i className="iconfont icon-shutiao"></i><span>休闲0</span></li>
                           <li><i className="iconfont icon-tiantong"></i><span>外卖0</span></li>
                           <li><i className="iconfont icon-bingjiling"></i><span>火锅0</span></li>
                           <li><i className="iconfont icon-pijiu"></i><span>丽人0</span></li>
                           <li><i className="iconfont icon-guozhi"></i><span>周边0</span></li>
                           <li><i className="iconfont icon-jiangpai"></i><span>KTV0</span></li>
                           <li><i className="iconfont icon-yongquan"></i><span>摄影0</span></li>
                       </ul>
                    </div>
                    <div>
                        <ul>
                           <li><i className="iconfont icon-xuegao"></i><span>美食1</span></li>
                           <li><i className="iconfont icon-hanbaobao"></i><span>电影1</span></li>
                           <li><i className="iconfont icon-sanmingzhi"></i><span>酒店1</span></li>
                           <li><i className="iconfont icon-shutiao"></i><span>休闲1</span></li>
                           <li><i className="iconfont icon-tiantong"></i><span>外卖1</span></li>
                           <li><i className="iconfont icon-bingjiling"></i><span>火锅1</span></li>
                           <li><i className="iconfont icon-pijiu"></i><span>丽人1</span></li>
                           <li><i className="iconfont icon-guozhi"></i><span>周边1</span></li>
                           <li><i className="iconfont icon-jiangpai"></i><span>KTV1</span></li>
                           <li><i className="iconfont icon-yongquan"></i><span>摄影1</span></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li><i className="iconfont icon-xuegao"></i><span>美食2</span></li>
                            <li><i className="iconfont icon-hanbaobao"></i><span>电影2</span></li>
                            <li><i className="iconfont icon-sanmingzhi"></i><span>酒店2</span></li>
                            <li><i className="iconfont icon-shutiao"></i><span>休闲2</span></li>
                            <li><i className="iconfont icon-tiantong"></i><span>外卖2</span></li>
                            <li><i className="iconfont icon-bingjiling"></i><span>火锅2</span></li>
                            <li><i className="iconfont icon-pijiu"></i><span>丽人2</span></li>
                            <li><i className="iconfont icon-guozhi"></i><span>周边2</span></li>
                            <li><i className="iconfont icon-jiangpai"></i><span>KTV2</span></li>
                            <li><i className="iconfont icon-yongquan"></i><span>摄影2</span></li>
                        </ul>
                    </div>
                </ReactSwipe>
                <ul className='dots'>
                    <li className={this.state.index==0?"active":""}></li>
                    <li className={this.state.index==1?"active":""}></li>
                    <li className={this.state.index==2?"active":""}></li>
                </ul>
            </div>
    )
    }
}