import axios from 'axios'

class CounterApi {
    static getNumOfCounters() {
        const MOCK_COUNTERS_URL = "https://5e9ed3a0fb467500166c47b3.mockapi.io/counters"
        return axios.get(MOCK_COUNTERS_URL)
    }

    static setNumOfCounters(numOfCounters) {
        const MOCK_COUNTER_ID_URL = "https://5e9ed3a0fb467500166c47b3.mockapi.io/counters/1"
        return axios.put(MOCK_COUNTER_ID_URL, {size : numOfCounters})
    }
}

export default CounterApi