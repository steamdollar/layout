import React, { Component } from 'react'

class CommentList extends Component {

    handleClick = (e) => {
        console.log(e.target.innerHTML)
    }

    items = () => this.props.list.map((v,k) => {
        return (
            <ul className='comment-row' key={k}>
                <li className='comment-id'>{v.userid}</li>
                <li className='comment-content'>
                    <span onClick={this.handleClick}>{v.content}</span>
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