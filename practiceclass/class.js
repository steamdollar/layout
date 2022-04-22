<div id='root'>
    <App/>
</div>

// 리액트는 기본적으로 JS만으로 HTMl 을 만드는 기술이다. JS > Node > HTML (in browser)

class App extends React.Component{
    render() {
        return(
            <ul>
                <Item value={1}/>
                <Item value={2}/>
                <Item value={3}/>
                <Item value={4}/>
                <Item value={5}/>
            </ul>
        )
    }
}

class Item extends React.Component {
    render() {
        return(
            <li>{this.props.value}</li>
        )
    }
}
////////

/*

class는 왜 쓸까

객체를 생성하기 위해 사용한다.

함수로도 가능함

function ingoo(name) {
    this.name = name
}

const newObj = new ingoo('asdad')

console.log(newObj)

이 new라는 게 붙으면 객체를 새로 만든거다..



*/

function createObj (a,b,c,d) {
    this.name = a
    this.key = b
    this.gender = c
    this.birthday = d
}
