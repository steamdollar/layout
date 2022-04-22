import React, { Component } from 'react'

class GuguForm extends Component {
    render() {
        return(
            <>
                <h2>몇단</h2>
                <form onSubmit={this.props.onSubmit}>
                    <input type='number' name='gugu' placeholder='숫자 입력'/>
                    <input type='submit' value='조회'/>
                </form>
            </>
        )
    }
}

export default GuguForm;