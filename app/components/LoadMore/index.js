import React,{Component} from 'react';
import './index.less'
export default class LoadMore extends Component{
    render(){
        return(
            <div className='has-more'>
            {this.props.hasMore?
                <div
                    ref='more'
                    onClick={this.loadMore.bind(this)}>加载更多</div>
                : <div>我是有底线的</div>
            }
            </div>
        )
    }
    componentDidMount(){
        this.fn=()=>{
            clearTimeout(this.timer);//清掉旧的定时器
            this.timer=setTimeout(()=>{
                // console.log('滚动')
                //先判断是否正在加载，直接return
                if(this.props.isLoading){
                    return
                }
                //判断按钮距离屏幕顶端的调试和可视窗口的高度
                let screen=window.screen.height;//可视窗口的高度
                // console.log(screen);
                let top=this.refs.more.getBoundingClientRect().top;//加载更多按钮距离屏幕项端高度
                // console.log(top);
                if(top<screen){//如果按钮进入可视窗口
                    this.props.loadMore();
                }
            },50);
        };
        //绑定滚动事件
        window.addEventListener('scroll',this.fn)
    }
    componentWillUnmount(){
        //移除滚动事件
        window.removeEventListener('scroll',this.fn);
    }
    loadMore(){//调用父级传递过来的加载更多
        if(this.props.isLoading){
            return;
        }
        this.props.loadMore();
    }

}