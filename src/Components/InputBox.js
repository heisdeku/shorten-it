import React, { Component } from 'react';

class InputBox extends Component {
  
  render() {
    const { value, onChange } = this.props;
    return (
      <div className="input-box">
        <input 
          type="url" 
          placeholder="Shorten all your links with ease" 
          value={value}
          onChange={onChange}
          required
        />         
      </div>
    )
  }
}

export default InputBox;