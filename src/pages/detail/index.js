import React,{PureComponent} from 'react';
import {DetailWrapper,Header,Content} from './style';
import {connect} from 'react-redux';
import {actionCreators} from './store';
import { useParams,withRouter } from "react-router-dom";

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
  }

class Detail extends PureComponent{
    render(){
        console.log(this.props)
        return(
            <DetailWrapper>
                <Header>
                    {this.props.title}
                </Header>
                <Content dangerouslySetInnerHTML={{__html:this.props.content}}>
                </Content>
            </DetailWrapper>
        )
    }
    componentDidMount(){
        this.props.getDetail(this.props.params.id);
    }
    
}

const mapState=(state)=>({
    title:state.get('detail').get('title'),
    content:state.get('detail').get('content'),
});

const mapDispatch=(dispatch)=>({
    getDetail(id){
        dispatch(actionCreators.getDetail(id));
    }
})
export default withParams(connect(mapState,mapDispatch)(withRouter(Detail)));