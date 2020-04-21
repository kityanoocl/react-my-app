import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             number : 0
        }
    }
    
    render() {
        return (
            <div>
                <button>+</button>
                {this.state.number}
                <button>-</button>
            </div>
        )
    }
}
