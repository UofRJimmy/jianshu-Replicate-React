import React,{PureComponent} from 'react';
import {HomeWrapper,HomeRight,HomeLeft} from './style';
import Topic from './component/Topic';
import List from './component/List';
import Recommend from './component/Recommend';
import Writer from './component/Writer';
import {actionCreators} from './store';
import {connect} from 'react-redux';
import {BackTop} from './style';
class Home extends PureComponent{

    handleScrollTop(){
        window.scrollTo(0,0);
    }
    render(){

        return(
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-image' src="https://upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"/>
                    <Topic/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writer/>
                </HomeRight>
                {this.props.showScroll?
                <BackTop onClick={this.handleScrollTop}>back top</BackTop>:null}
            </HomeWrapper>
        )
    }
    componentDidMount(){
       this.props.changeHomeData();
       this.bindEvents();
    }

    componentWillUnmount(){
        window.removeEventListener('scroll',this.props.changeScrollTopShow)
    }
       bindEvents(){
        window.addEventListener('scroll',this.props.changeScrollTopShow)
       }


    }


const mapState=(state)=>({
    showScrollTop:state.get('home').get('showScroll')
})

const mapDispatch=(dispatch)=>({
    changeHomeData(){
        const action=actionCreators.getHomeInfo();
        dispatch(action);
    },
    changeScrollTopShow(){
        if(document.documentElement.scrollTop>50){
            dispatch(actionCreators.toggleTopShow(true))
        }else{
            dispatch(actionCreators.toggleTopShow(false))
        }
    }
});

export default connect(mapState,mapDispatch)(Home);