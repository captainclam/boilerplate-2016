require('./style/main.styl')

import ReactDOM from 'react-dom'
import React from 'react'

class HelloWorld extends React.Component {
  render() {
    console.log(this.props)
    return <h1>Hello {this.props.person.getName()}!</h1>
  }
}

import Person from './person.ts'
let person = new Person('Guy')

document.addEventListener('DOMContentLoaded', (event) => {
  ReactDOM.render(<HelloWorld person={person} />, document.getElementById('mount-point'))
})


