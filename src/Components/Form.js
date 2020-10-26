import React from 'react'
import Button from './Button';
import InputBox from './InputBox';
class Form extends React.Component {

  render() {
    const { onSubmit, url, updateBox } = this.props;
    return (
      <form onSubmit={onSubmit}>
        <InputBox 
            onChange={updateBox} 
            value={url} 
          />
        <Button />
      </form>
    )
  }

}

export default Form
