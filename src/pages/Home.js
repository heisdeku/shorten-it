import React from 'react';
import { Link } from 'react-router-dom';
import Form from '../Components/Form';

import Result from '../Components/Results/Result';

class Home extends React.Component {
  state = {
    url: '',
    processing: false, 
    result_url: ''
  }
  updateInputBox = (e) => {
    let el = e.target;
    this.setState({ url: el.value });
  }
  shortenLink = (e) => {
    e.preventDefault();
    const { url } = this.state;
    let link = encodeURIComponent(url).replace(/%20/, '+');
    fetch('https://cleanuri.com/api/v1/shorten', {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",        
      },      
      body: 'url=' + link
    })
      .then(response => {
        if (response.status >= 400 && response.status <= 500) {
          console.log('Error while giving wrong parameter')
        }
        response.json()
      })
      .then(result => {
          console.log(result)
      })
      .catch(error => console.log(error))
  }
  render() {
    const { result_url, url, processing } = this.state;
    return (
      <div className="container">
        <div className="container__landing">
          <h2>Shorten <span className="bg">IT</span></h2>
          <p>Shorten all your links <span className="underline">with ease</span></p>
          <Form 
            url={url}
            onSubmit={this.shortenLink}
            updateBox={this.updateInputBox}
            />               
        </div>
        <div className="container__result">
          <h3>Work So Far</h3>
          { (result_url) ?
              <Result
                input={url}
                output={result_url}
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

