// const React = require('react')
// const ReactDOM = require('react-dom')
// const App = require('./App')

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// class App extends React.Component {
//     state = {
//         value:'hello world'
//     }
//     render() {
//         return(
//             <>
//                 {this.state.value}
//             </>
//         )
//     }
// }

const container = document.querySelector('#root')
const root = ReactDOM.createRoot(container)
root.render(<App/>)

/*
    import vs require
    각각의 방법이 파일을 내보낼 떄의 방법이 다르다.
    export default App; vs module.export { }
 */