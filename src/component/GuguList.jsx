import React, { Component } from 'react'

class GuguList extends Component {

    list = (n) => {

        let arr = Array(9).fill(null)

        const result = arr.map( (v,k) => {
            return <li key={k}>{n}*{k+1} = {n*(k+1)}</li>
        })

        return (
            <ul>
                <li>{n}단입니다.</li>
                {result}
            </ul>
        )
    }


    render() {
        return(
            <>
                {this.props.value === null  ? '몇단을 구해볼까' : this.list(this.props.value) }
            </>
        )
    }
}

export default GuguList;