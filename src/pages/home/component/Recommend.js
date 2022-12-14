import React,{PureComponent} from 'react';
import {RecommendWrapper,RecommendItem} from '../style';
import {connect} from 'react-redux';
class Recommend extends PureComponent{
    render(){
        const {list}=this.props
        return(
            <RecommendWrapper>
                {list?.map((item)=>{
                    return <RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')}></RecommendItem>
                })}
            </RecommendWrapper>
        )
    }
}

const mapstate=(state)=>({
    list:state.get('home').get('recommendlist')
})

export default connect(mapstate,null)(Recommend);