import React, { Component } from 'react'

class CommentList extends Component {

    state = {
        value:'',
        update:null
    }

    handleClick = (i) => (e) => {
        // console.log(e.target.innerHTML, i)
        this.setState({
            ...this.state,
            value:e.target.innerHTML,
            update:i
        })
    }
    // js 고차함수에 대해 알아본다
    // 변수를 여러 개 주는 것과 뭐가 다르지?

    // handleClick = (i) => {
    //     const eventClick = e => {
    //         console.log(i)
    //         console.log(e)
    //     }
    //     return eventClick
    // }

    updateChange = (e) => {
        const {value} = {...e.target}

        this.setState({
            ...this.state,
            value
        })
    }

    updateKeyDown = (i) => (e) => {
        if(e.key !== 'Enter') return
        const { updateList, list } = this.props
        const newList = [...list]
        newList[i].content = this.state.value

        this.setState({
            ...this.state,
            update:null
        })

        updateList(newList)
        console.log(this.state.value)
    }
    // 여까지가 수정

    deleteClick = (k) => {
        const {list, updateList} = this.props
        const newList = [...list].filter ( ( v,i) => i !== k)
        console.log(newList)
        // const deleteArr = []
        
        // for (let i = 0; i <newList.length; i++) {
        //     if(i !== k) {
        //         deleteArr.push(newList[i])
        //     } 
        // }
        updateList(newList)
        // newList 로 App 컴포넌트 내의 상태를 바꿔준다.
    }

    // delete

    input = React.createRef()

    componentDidUpdate() {
        // 컴포넌트가 리렌더링 되었을 떄 = state가 바뀌었을 때
        console.log('updated')
        // App.jsx에서 componentDidMount가 실행될때 
    }

    componentDidMount () {
        // 최초로 렌더링이 완료되었을 때
        console.log('loaded')
        
    }

    componentWillUnmount() {
        // 컴포넌트가 사라 질때, 보통 소켓이랑 많이 연관되어 사용
        console.log('component deleted')
    }



    
    items = () => this.props.list.map((v,k) => {
        return (
            <ul className='comment-row' key={k}>
                <li className='comment-id'>{v.userid}</li>
                <li className='comment-content'>
                    {
                        this.state.update === k
                        ? <input 
                        type='text' 
                        value={this.state.value}
                        onChange={this.updateChange}
                        onKeyDown={this.updateKeyDown(k)}
                        className='comment-update-input'
                        />
                        :
                        <>
                            <span onClick={this.handleClick(k)}>{v.content}</span>
                            <span className='comment-delete-btn' onClick={ () => {this.deleteClick(k)}} >
                                X
                            </span>
                        </>
                    }

                    
                </li>
                
                <li className='comment-date'>{v.date}</li>
                
            </ul>
        )
    })

    render() {
        return(
            <li>
                {this.items()}
            </li>
        )
    }
}

export default CommentList