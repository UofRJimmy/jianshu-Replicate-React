import React,{PureComponent} from 'react';
import { Navigate } from 'react-router-dom';
import {LoginWrapper,LoginBox,Input, Button} from './style';
import {connect} from 'react-redux';
import {actionCreators} from './store';


class Login extends PureComponent{
    render(){
        const {login,loginStatus}=this.props;
        if(!loginStatus){
        return(
            <LoginWrapper><LoginBox>
                <Input placeholder='username' ref={(input)=>{this.account=input}}></Input>
                <Input placeholder='password' type='password' ref={(input)=>{this.password=input}}></Input>
                
                <Button onClick={()=>this.props.login(this.account,this.password)}>Login</Button>
                </LoginBox></LoginWrapper>
        )
    }else{
        return <Navigate to='/'></Navigate>
    }
}
}


const mapState=(state)=>({
    loginStatus:state.get('login').get('login')
})

const mapDispatch=(dispatch)=>({
    login(accountElem,passwordElem){
        dispatch(actionCreators.login(accountElem.value,passwordElem.value))
        
    }
    
})
export default connect(mapState,mapDispatch)(Login);