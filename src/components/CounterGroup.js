import React, { Component } from 'react'
import { INIT_COUNTERS_SIZE, INIT_COUNTERS_SUM } from '../constants/Constants'
import Counter from './Counter'
import CounterApi from '../apis/CounterApi'

export default class CounterGroup extends Component {
    constructor(props) {
        super(props)

        this.onChange = this.onChange.bind(this)
        this.onCalculate = this.onCalculate.bind(this)

        this.state = {
            size: INIT_COUNTERS_SIZE,
            sum: INIT_COUNTERS_SUM
        }
    }

    componentDidMount() {
        CounterApi.getNumOfCounters().then(response => {
            console.log(response)
            const size = response.data.size
            this.setState({size : size})
        })
    }

    initArray(size) {
        return Array.from(Array(size).keys())
    }

    onChange(event) {
        const value = event.target.value.length > 0 ? parseInt(event.target.value) : 0
        CounterApi.setNumOfCounters(value).then(response => {
            console.log(response)
            const size = response.data.size
            this.setState({size : size})
        })
    }

    onCalculate(changeOfValue) {
        this.setState(prevState => ({sum : prevState.sum + changeOfValue}))
    }

    render() {
        let counters = this.initArray(this.state.size)
        return (
            <div>
                <form>
                    <input onChange={this.onChange} type="text" value={this.state.size}/>
                </form>
                <p>The sum of all counters is {this.state.sum}.</p>
                {counters.map((value) => {
                    return <Counter key={value} number={0} onCalculate={this.onCalculate}/>
                })}
            </div>
        )
    }
}
