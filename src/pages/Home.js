import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../Components/Button'
import InputBox from '../Components/InputBox';
import Result from '../Components/Results/Result';

class Home extends React.Component {
  state = {
    url: '',
    processing: false,
    shortenedUrl: ''
  }
  render() {
    return (
      <div className="container">
        <div className="container__landing">
          <h2>Shorten <span class="bg">IT</span></h2>
          <p>Shorten all your links <span className="underline">with ease</span></p>
          <InputBox value={this.state.url} />
          <Button />      
        </div>
        <div className="container__result">
          <h3>Work So Far</h3>
          { if (shortenedUrl) {
              <Result
              input='https://twitter.com/adeheka'
              output='https://shrt.web/35fd23'
            />
          } else {
            return null;
          } }          
        </div>  
        <p>
        <Link to="/mylinks">Check Out All Your Processed links</Link>
      </p>
  </div>
    )
}
}

export default Home

