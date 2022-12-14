import styled from "styled-components";
import logoPic from '../../static/logo.png'

export const HeaderWrapper=styled.div`
    z-index:1;
    position:relative;
    height:58px;
    border-bottom:1px solid #f0f0f0
`;

export const Logo=styled.a`
    height:56px;
    width:100px;
    display:block;
    position:absolute;
    top:0;
    left:0;
    background: url(${logoPic});
    background-size:contain;
`;

export const Nav=styled.div`
    width:960px;
    height:100%;
    padding-right:70px;
    box-sizing:border-box;
    margin:0 auto;
`;

export const NavItem=styled.div`
    line-height:56px;
    padding:0 15px;
    font-szie:17px;
    color:#333;
    &.left{
        float:left;
    }
    &.right{
        float:right;
        color:#969696;
    }
    &.active{
        color:orange;
    }
    
`;

export const SearchWrapper=styled.div`
    position:relative;
    float:left;
    .zoom{
        position:absolute;
        right:5;
        bottom:5px;
        width:30px;
        height:30px;
        line-height:30px;
        border-radius:15px;
        text-align:center;
        .&focused{
            background:#777;
            color:#fff;
        }
    }
    
`;

export const NavSearch=styled.input.attrs({placeholder:'Search'})`
    width:160px;
    height:38px;
    padding:0 20px;
    box-sizing:border-box;
    border:none;
    outline:none;
    border-radius:19px;
    background:#eee;
    margin-top:9px;-  
    font-size:14px;
    margin-left:20px;
    &::placeholder{
        color:#999;
    }
    &.focused{
        width:240px;
    }
    &.slide-enter{
        transition:all .2s ease-out
    }
    &.slide-enter-active{
        width:240px;
    }
    &.slide-exit{
        transition:all .2s ease-out
    }
    &.slide-exit-active{
       width:160px;
    }
`;

export const Addition=styled.div`
    position:absolute;
    right:0;
    top:0;
    height:56px;
`;

export const Btn=styled.div`
    float:right;
    line-height:38px;
    border-radius:19px;
    margin-top:9px;
    margin-right:20px;
    padding:0 30px 0 20px;
    border:1px solid #ec6149;
    font-size:14px;
    color:#666;
    &.reg{
        color:#ec6149;
    }
    &.write{
        color#fff;
        background:#ec6149;
    }
`;
export const SearchInfo =styled.div`
    position:absolute;
    left:0;
    top:56px;
    width:240px;
    padding:0 20px;
    box-shadow:0 0 8px rgba(0,0,0,.2);
    background:#fff;
`;

export const SearchInfoTitle=styled.div`
    margin-top:20px;
    margin-bottom:15px;
    line-height:20px;
    font-size:14px;
    color:#969696;
`;

export const SearchInfoSwitch=styled.span`
    float:right;
    font-size:13px;
    cursor:pointer;
    .spin{
        displau:block;
        float:left;
        font-size:12px;
        margin-right:2px;
        tansition:all .2s ease-in;
        transform-origin:center center;
    }
`;

export const SearchInfoItem=styled.a`
    display:block;
    float:left;
    marign-bottom:15px;
    margin-right:10px;
    font-size:12px;
    padding:0 5px;
    line-height:20px;
    border:1px solid #ddd;
    color:#333;
    border-radius:3px;
`;
export const SearchinfoList=styled.div`
    overflow:hidden;
`;
