require('./style/main.styl')

import ReactDOM from 'react-dom'
import React from 'react'

class HelloWorld extends React.Component {
  render() {
    return <h1>Hello World!!!</h1>
  }
}

document.addEventListener('DOMContentLoaded', (event) => {
  ReactDOM.render(<HelloWorld />, document.getElementById('mount-point'))
})
