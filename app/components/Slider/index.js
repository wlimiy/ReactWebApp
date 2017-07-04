import React,{Component} from 'react';
import ReactSwipe from 'react-swipe';//轮播图插件
import './index.less';
import {Link} from 'react-router-dom'
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
                            <Link to='/search/jingdian'>
                                <li><i className="iconfont icon-coupons"></i><span>美食0</span></li>
                            </Link>
                            <Link to='/search/jingdian'>
                                <li><i className="iconfont icon-coupons"></i><span>电影0</span></li>
                            </Link>
                            <Link to='/search/jingdian'>
                                <li><i className="iconfont icon-coupons"></i><span>酒店0</span></li>
                            </Link>
                            <Link to='/search/jingdian'>
                                <li><i className="iconfont icon-coupons"></i><span>休闲0</span></li>
                            </Link>
                           <Link to='/search/jingdian'>
                                <li><i className="iconfont icon-coupons"></i><span>外卖0</span></li>
                            </Link>
                           <Link to='/search/jingdian'>
                                <li><i className="iconfont icon-coupons"></i><span>火锅0</span></li>
                            </Link>
                           <Link to='/search/jingdian'>
                                <li><i className="iconfont icon-coupons"></i><span>丽人0</span></li>
                            </Link>
                           <Link to='/search/jingdian'>
                                <li><i className="iconfont icon-coupons"></i><span>周边0</span></li>
                            </Link>
                           <Link to='/search/jingdian'>
                                <li><i className="iconfont icon-coupons"></i><span>摄影0</span></li>
                            </Link>
                       </ul>
                    </div>
                    <div>
                        <ul>
                           <Link to='/search/jiandian'><li><i className="iconfont icon-coupons"></i><span>美食1</span></li></Link>
                           <Link to='/search/jiandian'><li><i className="iconfont icon-coupons"></i><span>电影1</span></li></Link>
                           <Link to='/search/jiandian'><li><i className="iconfont icon-coupons"></i><span>酒店1</span></li></Link>
                           <Link to='/search/jiandian'><li><i className="iconfont icon-coupons"></i><span>休闲1</span></li></Link>
                           <Link to='/search/jiandian'><li><i className="iconfont icon-coupons"></i><span>外卖1</span></li></Link>
                           <Link to='/search/jiandian'><li><i className="iconfont icon-coupons"></i><span>火锅1</span></li></Link>
                           <Link to='/search/jiandian'><li><i className="iconfont icon-coupons"></i><span>丽人1</span></li></Link>
                           <Link to='/search/jiandian'><li><i className="iconfont icon-coupons"></i><span>周边1</span></li></Link>
                           <Link to='/search/jiandian'><li><i className="iconfont icon-coupons"></i><span>摄影1</span></li></Link>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <Link to='/search/jiandian'><li><i className="iconfont icon-coupons"></i><span>美食2</span></li></Link>
                            <Link to='/search/jiandian'><li><i className="iconfont icon-coupons"></i><span>电影2</span></li></Link>
                            <Link to='/search/jiandian'><li><i className="iconfont icon-coupons"></i><span>酒店2</span></li></Link>
                            <Link to='/search/jiandian'><li><i className="iconfont icon-coupons"></i><span>休闲2</span></li></Link>
                            <Link to='/search/jiandian'><li><i className="iconfont icon-coupons"></i><span>外卖2</span></li></Link>
                            <Link to='/search/jiandian'><li><i className="iconfont icon-coupons"></i><span>火锅2</span></li></Link>
                            <Link to='/search/jiandian'><li><i className="iconfont icon-coupons"></i><span>丽人2</span></li></Link>
                            <Link to='/search/jiandian'><li><i className="iconfont icon-coupons"></i><span>周边2</span></li></Link>
                            <Link to='/search/jiandian'><li><i className="iconfont icon-coupons"></i><span>摄影2</span></li></Link>
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