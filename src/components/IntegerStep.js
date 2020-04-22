import React, { Component } from 'react'
import { Slider, InputNumber, Row, Col } from 'antd';
import 'antd/dist/antd.css';

class IntegerStep extends React.Component {
  state = {
    inputValue: 2,
  };

  onChange = value => {
    this.setState({
      inputValue: value,
    }, this.props.onChange(value));
  };

  render() {
    const { inputValue } = this.state;
    return (
      <Row>
        <Col span={12}>
          <Slider
            min={1}
            max={100}
            onChange={this.onChange}
            value={typeof inputValue === 'number' ? inputValue : 0}
          />
        </Col>
        <Col span={4}>
          <InputNumber
            min={1}
            max={100}
            style={{ margin: '0 16px' }}
            value={inputValue}
            onChange={this.onChange}
          />
        </Col>
      </Row>
    );
  }
}

export default IntegerStep