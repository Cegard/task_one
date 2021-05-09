import React from 'react';
import {ErrorBoundary} from 'react-error-boundary';


const ErrMsgComponent = ({ error }) => {
  return (
    <div>
      <h1>An error occurred: {error.message}</h1>
    </div>
  );
};


class Counter extends React.Component {


  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }
  

  handleClick() {
    this.setState(({counter}) => ({
      counter: counter + 1
    }));
  }
  

  render() {
    if (this.state.counter === 5) {
      throw new Error('Crashed.');
    }
    return <h1 onClick={this.handleClick}>{this.state.counter}</h1>;
  }
}


function App() {
  const [thereWasAnError, setError] = React.useState(false)

  return (
    <div>

      <p>
        <b>
          Click on the numbers to increase the counters.
          <br />
          The counter is programmed to throw an error when it reaches 5. This simulates a JavaScript error in a component.
        </b>
      </p>
      
      <hr />

      <ErrorBoundary FallbackComponent={ErrMsgComponent}>
        <Counter />
      </ErrorBoundary>
      
      <ErrorBoundary FallbackComponent={ErrMsgComponent}>
        <Counter />
      </ErrorBoundary>

      <hr />
    </div>
  );
}

export default App;
