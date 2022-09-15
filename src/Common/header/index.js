import React,{Component} from 'react';
import {HeaderWrapper,Logo,Nav,NavItem,NavSearch,Btn,Addition,SearchWrapper,SearchInfo,SearchinfoList,SearchInfoItem,SearchInfoTitle,SearchInfoSwitch} from './style.js';
import {CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux';
import {actionCreator} from './store/index.js';
import { get } from 'immutable';

class Header extends Component{
    getListArea(){
        const{focused,list,totalpage,page,mouseIn,handleMouseEnter,handleChangePage,handleMouseLeave}=this.props;
        const newList=list.toJS();
        const pageList=[];
        if(newList.length){
        for(let i=(page-1)*10;i<page*10;i++){
            pageList.push(<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>)
        }
    }
        if(focused ||mouseIn){
            return(
                <SearchInfo onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                <SearchInfoTitle>
                    Hot
                    <SearchInfoSwitch onClick={()=>handleChangePage(page,totalpage,this.spinIcon)}>
                    <span  ref={(icon)=>{this.spinIcon=icon}} className="iconfont spin">&#xe606;</span>
                    Switch
                    </SearchInfoSwitch>
                </SearchInfoTitle>
                <SearchinfoList>
                    {pageList}
                </SearchinfoList>
                </SearchInfo>
            )
        }else{
            return null;
        }
    }
    render(){
        const{focused,handleInputFocus,handleInputBlur,list}=this.props;
        return(
            <HeaderWrapper>
                <Logo href='/'/>
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    <NavItem className='right'>登录</NavItem>
                    <NavItem className='right'>
                    <span className="iconfont">&#xe636;</span>
                    </NavItem>
                    <SearchWrapper>
                    <CSSTransition in={focused} timeout={200} classNames="slide">
                    <NavSearch className={focused ? 'focused':''}
                    onFocus={()=>handleInputFocus(list)}
                    onBlur={handleInputBlur}></NavSearch>
                    </CSSTransition>
                    <span className={focused ? 'focused iconfont zoom':'iconfont zoom'}>&#xe623;</span>
                    {this.getListArea()}
                    </SearchWrapper>
                    
                </Nav>
                <Addition>
                    <Btn className='write'>
                        <span className="iconfont">&#xe600;</span>
                        写文章
                        </Btn>
                    <Btn className='reg'>注册</Btn>
                </Addition>
            </HeaderWrapper>
        );
    }
}


const mapStateToProps=(state)=>{
    return{
        focused: state.get('header').get('focused'),
        list:state.get('header').get('list'),
        page:state.get('header').get('page'),
        mouseIn:state.get('header').get('mouseIn'),
        totalpage:state.get('header').get('totalpage'),
    }
}

const mapDispathToProps=(dispatch)=>{
    return{
        handleInputFocus(list){
            if(list.size>0){
            dispatch(actionCreator.getlist());
            }
            dispatch(actionCreator.searchFocus());
        },
        handleInputBlur(){
            dispatch(actionCreator.searchBlur());
        },
        handleMouseEnter(){
            dispatch(actionCreator.mouseEnter());
        },
        handleMouseLeave(){
            dispatch(actionCreator.mouseLeave());
        },
        handleChangePage(page,totalpage,spin){ 
            let originAngle=spin.style.transform.replace(/[^0-9]/ig,'');
            if(originAngle){
                originAngle=parseInt(originAngle,10);
            }else{
                originAngle=0;
            }
            spin.style.transform='rotate('+(originAngle+360)+'deg)';
            if(page<totalpage){
                dispatch(actionCreator.changePage(page+1));
            }else{
            dispatch(actionCreator.changePage(1));
            }
        },
    }
}

export default connect(mapStateToProps,mapDispathToProps)(Header);