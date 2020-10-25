import React, { Component } from 'react';

class InputBox extends Component {
  
  render() {
    const { value } = this.props;
    return (
      <div className="input-box">
        <input 
          type="text" 
          placeholder="Shorten all your links with ease" 
          value={value}
        /> 
      </div>
    )
  }
}

export default InputBox;