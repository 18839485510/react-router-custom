import React, { Component } from 'react'
import { Consumer } from './context'
class Redirect extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <Consumer>
            {value => {
                value.history.push(this.props.to)
            }}
        </Consumer>
    }
}

export default Redirect