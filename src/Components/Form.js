import React from 'react'
import Button from './Button';
import InputBox from './InputBox';
import PropTypes from 'prop-types';

class Form extends React.Component {
  static propTypes = {
    url: PropTypes.string,
  }
  render() {
    const { onSubmit, url, updateBox, onSubmitButtonClick } = this.props;
    return (
      <form onSubmit={onSubmit}>
        <InputBox 
            onChange={updateBox} 
            value={url} 
          />
        <Button
          buttonClick={onSubmitButtonClick}
        />
      </form>
    )
  }

}

export default Form
