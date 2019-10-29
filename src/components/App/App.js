import React, { Component } from 'react';
import { connect } from 'react-redux';


class App extends Component {

  State = {
    newElement: '',
  };

  
handleChange= (event) => {
  this.setState({
    newElement: event.target.value,
  })
}

handleClick = () => {
  this.props.dispatch({type: 'ADD_ELEMENT', payload: this.state.newElement});
  this.setState({newElement:''});
}
  render() {
    return (
      <div className="App">
        <h1> HELLO WORLD</h1>
        <input  onChange={this.handleChange}/>
        <button onClick={() => this.props.dispatch({type: 'BUTTON_ONE'})}> CLICKYCLICK </button>
        <button onClick={() => this.props.dispatch({type: 'BUTTON_TWO'})}> CLICK</button>
        <button onClick={this.handleClick}> Element</button>
        <pre>
         {JSON.stringify(this.props,null,2)}
       </pre>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return reduxState;
}
export default connect(mapReduxStateToProps)(App);
