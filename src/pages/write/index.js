import React,{PureComponent} from 'react';
import { Navigate } from 'react-router-dom';
import {connect} from 'react-redux';



class Write extends PureComponent{
    render(){
        const {loginStatus}=this.props;
        if(loginStatus){
        return(
            <div>write page</div>
        )
    }else{
        return <Navigate to='/login'></Navigate>
    }
}
}


const mapState=(state)=>({
    loginStatus:state.get('login').get('login')
})


export default connect(mapState,null)(Write);