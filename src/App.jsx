// const React = require('react')
// const { Component } = React


//import React, { Component } from 'react'
// 1~2나 4나 똑같다

import React, {Component} from 'react'

import './assets/a.css'
import './assets/b.css'

///////////////

import styles from './assets/App.module.css'
import styless from './assets/test.module.css' 

///////////////

import styled from 'styled-components'

const Button = styled.button`
    background:#000;
    border:none;
    color:#fff;
    padding: 7px 14px;
`
// 여기서 css를 일부만 재활용하고 싶다면..

const HoverButton = styled(Button)` // Button css를 그대로 가져옴
    background: #007bff;
    :hover {
        background: #0069d9;
    }
`

// css에 변수 전달하는 것도 가능하다

const ActiveButton = styled(Button)`
    background: ${ (props) => props.background};
    display:${(props) => {
        let flag 
        if(props.background === '#333') flag = 'block'
        return flag;
    }};
`
///////////

import GuguClass from './component/GuguClass.jsx'

/* const display = (props) => {
    let flag;
    if (props.background === '#333') flag='block';
    return flag;
}

const ActiveButton = styled(Button) */

/////////

import Comment from './component/comment/comment.jsx'
import CommentForm from './component/comment/commentForm'
import CommentList from './component/comment/commentList' 


class App extends Component {
    state = {
        value: 'hello qweecvxbxcdfsdfcvsdfb',
        list:[
            // {userid:'web7722', content:'hello', date:'2022-04-21'}
        ]
        
    }

    componentDidMount() {
        console.log('didmount함수 실행')
        //
        this.setState({
            ...this.state,
            list:[ 
                {userid:'web7722', content:'hello2222222', date:'2022-04-21'}, 
                {userid:'web7722', content:'hello3333333', date:'2022-04-21'},
                {userid:'web7722', content:'hello444444', date:'2022-04-21'}]
        })
    }
    // 콘솔 로그가 찍히는 순서를 보면
    // 다른게 다 렌더링된다음 얘가 실행됨

    addList = (content) => {
        this.setState({
            list:[...this.state.list, {userid:'web7722', content:content, date:'2022-04-21'}]
        })
    }

    render() {
        const { list } = this.state
        console.log('hello sdfs')
        return (
            <>
            {gogo()}
            <Comment>
                <CommentForm
                onSubmit = { (content) => {this.addList(content) } }
                />
                <CommentList list={this.state.list}/>
            </Comment>

            <br/>
            <br/>
            <br/>
            <br/>
            <GuguClass/>
            <br></br>
            <br></br>
            <br></br>
            <div className='colors'>{this.state.value}</div>
            <div className={styles.colors}>여기는 App module css</div>
            <div className = {styless.colors}>여기는 test module css</div>

            <div>
            <Button> styled component </Button>
            <HoverButton> styled component2 </HoverButton>
            <ActiveButton background="#333"> variable in css </ActiveButton>
            </div>
            </>
        )
    }
}

function gogo () {
    console.log('gogo')
}

export default App;