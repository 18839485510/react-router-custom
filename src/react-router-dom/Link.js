import React, { Component } from 'react'
import { Consumer } from './context'

class Link extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <Consumer>
            {value => {
                return <div><a href="javascript:;" onClick={() => { value.history.push(this.props.to) }}>{this.props.children}</a></div>
            }}
        </Consumer>
    }
}

export default Link