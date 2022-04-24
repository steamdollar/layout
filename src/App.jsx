
import React, {Component} from 'react'

import Comment from './component/comment/comment.jsx'
import CommentForm from './component/comment/commentForm'
import CommentList from './component/comment/commentList' 


class App extends Component {
    state = {
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
                {userid:'web7722', content:'hello2222222', date:'2022-04-21', updateFlag: true}, 
                {userid:'web7722', content:'hello3333333', date:'2022-04-21', updateFlag: true},
                {userid:'web7722', content:'hello444444', date:'2022-04-21', updateFlag: true}]
        })
    }
    // 콘솔 로그가 찍히는 순서를 보면
    // 다른게 다 렌더링된다음 얘가 실행됨

    addList = (content) => {
        this.setState({
            ...this.state,
            list:[...this.state.list, {userid:'web7722', content:content, date:'2022-04-21', updateFlag: true}]
        })
    }

    updateList = (list) => {
        this.setState({
            ...this.state,
            list
        })
    }

    // deleteList = list => {
    //     this.setState({
    //         ...this.state,
    //         list
    //     })
    // }
    // 만들고 보니까 updateList랑 같다. 하나로 통합하자.
    // 

    render() {
        return (
            <>
            <Comment>
                <CommentForm
                onSubmit = { (content) => {this.addList(content) } }
                />
                <CommentList 
                    list={this.state.list}
                    updateList = {this.updateList}
                />
            </Comment>
            </>
        )
    }
}



export default App;