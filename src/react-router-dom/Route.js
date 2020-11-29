import React, { Component } from 'react'
import { Consumer } from './context'
import { pathToRegexp } from 'path-to-regexp'

class Route extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <Consumer>
            {value => {
                const { path, component: Component, exact = false } = this.props
                const pathname = value.location.pathname
                const keys = []
                //根据组件上传来的path生成匹配规则
                const regexp = pathToRegexp(path, keys, { end: exact });
                //根据当前地址栏路由生成匹配结果
                const result = pathname.match(regexp)
                if (result) {
                    //处理参数
                    const names = keys.map(item => item.name)
                    const [url, ...values] = result
                    const params = {}
                    names.forEach((name, index) => {
                        params[name] = values[index]
                    })
                    const props = {
                        history: value.history,
                        location: value.location,
                        match: {
                            params,
                            path,
                            url,
                            isExact: exact
                        }
                    }
                    return <Component {...props} />
                }
                return null

            }}
        </Consumer>
    }
}

export default Route