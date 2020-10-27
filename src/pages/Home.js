import React from 'react';
import { Link } from 'react-router-dom';
import Form from '../Components/Form';

import Result from '../Components/Results/Result';

class Home extends React.Component {
  state = {
    url: '',
    processing: false, 
    shortenedUrl: 'https://shrt.web/213sd3d'
  }
  updateInputBox = (e) => {
    let el = e.target;
    this.setState({ url: el.value });
  }
  shortenLink = (e) => {
    e.preventDefault();
    const { url, shortenedUrl, processing } = this.state;
    
    fetch('https://cleanuri.com/api/v1/shorten', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: url,
    })
      .then(data => data.json())
      .then(result => {
        this.setState({ processing: true});
        console.log(result)
        this.setState({ processing: false})
      })
      .catch(error => console.log(error))
  }
  render() {
    const { shortenedUrl, url, processing } = this.state;
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
          { (shortenedUrl) ?
              <Result
                input={url}
                output={shortenedUrl}
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

