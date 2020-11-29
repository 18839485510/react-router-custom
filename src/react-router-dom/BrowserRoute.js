import React, { Component } from 'react'
import { Provider } from './context'


let pushState = window.history.pushState
window.history.pushState = (state, title, url) => {
    pushState.call(window.history, state, title, url)
    window.onstatechange && window.onstatechange()
}
class BrowserRouter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            location: {
                pathname: window.location.pathname
            }
        }
    }

    componentDidMount() {
        window.onstatechange = () => {
            this.setState({
                location: {
                    pathname: window.location.pathname
                }
            })
        }
    }
    render() {

        const value = {
            history: {
                push: (to) => {
                    window.history.pushState(null, '', to)
                }
            },
            location: this.state.location
        }
        return (<Provider value={value}>{this.props.children}</Provider>)
    }
}

export default BrowserRouter