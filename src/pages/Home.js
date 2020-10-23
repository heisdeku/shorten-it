import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../Components/Button'
import InputBox from '../Components/InputBox';
import Result from '../Components/Results/Result';

const Home = () => 
  <div className="container">
    <div className="container__landing">
    <h2>Shorten <span class="bg">IT</span></h2>
      <p>Shorten all your links <span className="underline">with ease</span></p>
      <InputBox />
      <Button />
      <p>
        <Link to="/mylinks">Check Out All Your Processed links</Link>
      </p>
    </div>
      <div className="container__result">
        <Result />
      </div>  
  </div>


export default Home

