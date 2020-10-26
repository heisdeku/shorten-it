import React from 'react';
import { Link } from 'react-router-dom';
import Form from '../Components/Form';

import Result from '../Components/Results/Result';

class Home extends React.Component {
  state = {
    url: '',
    processing: true, 
    shortenedUrl: ''
  }
  updateInputBox = (e) => {
    let el = e.target;
    this.setState({ url: el.value });
  }
  shortenLink = (e) => {
    e.preventDefault()
    let url = this.state.url;
    console.log(url +' was shortened succesfully');
  }
  render() {
    const { shortenedUrl } = this.state;
    return (
      <div className="container">
        <div className="container__landing">
          <h2>Shorten <span className="bg">IT</span></h2>
          <p>Shorten all your links <span className="underline">with ease</span></p>
          <Form 
            url={this.state.url}
            onSubmit={this.shortenLink}
            updateBox={this.updateInputBox}
            />               
        </div>
        <div className="container__result">
          <h3>Work So Far</h3>
          { (shortenedUrl) ?
              <Result
                input='https://twitter.com/adeheka'
                output='https://shrt.web/35fd23'
            />
          : <p>You haven't used me yet<span role="img" aria-label="">😎</span></p>
          }          
        </div>  
        <p>
          <Link to="/mylinks">Check Out All Your Processed links</Link>
        </p>
      </div>
    )
}
}

export default Home

