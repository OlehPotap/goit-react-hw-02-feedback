import React from 'react';

class Counter extends React.Component {

  static defaultProps = {
    initialValue: 0,
  }

    state = {
        value: this.props.initialValue,
    }

    // При передаче метода (name() {}) как колбека в обработчик события (onAction)
    // у объекта не привязывается контекст по умолчанию (this)
    // поетому создаем не метод объекта а публичое свойство (name =() => {})

  handleInc = event => {
    this.setState(actualState=> ({value: actualState.value + 1}))
    }

    handleDinc = event => {
      this.setState(actualState=> ({value: actualState.value - 1}))
    }

    render() {
      return (
        <div>
          <span className="cont">{this.state.value}</span>
          <button type="button" onClick={this.handleInc}>Increment by step</button>
          <button type="button" onClick={this.handleDinc}>Decrement by step</button>
        </div>
      );
    }
  }

  export default Counter;