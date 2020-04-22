import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.onIncrease = this.onIncrease.bind(this)
        this.onDecrease = this.onDecrease.bind(this)

        this.state = {
             number : props.number
        }
    }
    
    onIncrease() {
        this.setState(prevState => {
            return {number : prevState.number + 1}
        })
    }

    onDecrease() {
        this.setState(prevState => {
            return {number : prevState.number - 1}
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.number !== this.state.number) {
            this.props.onCalculate((prevState.number > this.state.number) ? -1 : 1);
        }
    }

    componentWillUnmount() {
        this.props.onCalculate(-1 * this.state.number)
    }

    render() {
        return (
            <div>
                <button onClick = {this.onIncrease}>+</button>
                {this.state.number}
                <button onClick = {this.onDecrease}>-</button>
            </div>
        )
    }
}
