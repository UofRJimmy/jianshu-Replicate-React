import React,{PureComponent} from 'react';
import {WriterWrapper,WriterInfo} from '../style';
class Writer extends PureComponent{
    render(){
        return(
            <WriterWrapper>
                <WriterInfo>
                    <img className='pic' src='https://upload.jianshu.io/users/upload_avatars/7416466/fc1a1a0d-e3c7-4bca-9720-028c5c9914f3.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'/>
                    <a className=''>+关注</a>
                    
                </WriterInfo>
            </WriterWrapper>
        )
    }
}

export default Writer;