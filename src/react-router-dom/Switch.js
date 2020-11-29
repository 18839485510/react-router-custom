import React, { Component } from 'react'
import { Consumer } from './context'
import { pathToRegexp } from 'path-to-regexp'
class Switch extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <Consumer>
            {value => {
                const children = this.props.children
                const pathname = value.location.pathname
                for (let i = 0, len = children.length; i < len; i++) {
                    const child = children[i]
                    const { path = '', exact = false } = child.props
                    const keys = []
                    const regexp = pathToRegexp(path, keys, { end: exact });
                    const result = pathname.match(regexp)
                    if (result) {
                        return child
                    }
                }
                return null
            }}
        </Consumer>
    }
}

export default Switch