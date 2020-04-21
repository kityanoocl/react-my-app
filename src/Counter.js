import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.onIncrease = this.onIncrease.bind(this)

        this.state = {
             number : 0
        }
    }
    
    onIncrease() {
        this.setState({
            number : this.state.number + 1
        })
    }

    render() {
        return (
            <div>
                <button onClick = {this.onIncrease}>+</button>
                {this.state.number}
                <button>-</button>
            </div>
        )
    }
}
