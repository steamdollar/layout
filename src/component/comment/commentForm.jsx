import React, { Component } from 'react'

class CommentForm extends Component {

    state = {
        value:''
    }

    handleChange = e => {
        const { value } = {...e.target}
        this.setState({
            value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state.value)

        // submit해서 값을 가지고 오는 것 까지 처리

        // App에 있는 list라는 값을 push해야 한다..
            // App 컴포넌트에서 상태를 바꿀 있는 함수 작성
            // 그 함수를 CommentForm 에서 props로 전달
            // 그 받은 함수는 handleSubmit 함수가 호출되었을 때 실행
            this.props.onSubmit(this.state.value)
            this.setState({
                value:''
            })
        
        // 여기서 db와 통신하고 싶다면 axios 사용
        // 결과물을 받으면 그때 상태를 바꾼다.
    }

    render() {
        // console.log('hhhh')
        // 상태가 바뀔때마다 render가 실행되서 이게 찍힘
        return(
            <li className='comment-form'>
                <form onSubmit={this.handleSubmit}>
                    <span className='ps_box'>
                        <input 
                            type ='text'
                            className='int'
                            placeholder='write comment'
                            onChange={this.handleChange}
                            value={this.state.value}
                        />
                    </span>
                    <input type='submit' className='btn' value='submit'/>
                </form>
            </li>
        )
    }
}

export default CommentForm