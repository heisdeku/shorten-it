import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../Components/Button'
import InputBox from '../Components/InputBox';

const Home = () => 
  <div className="container">
      <h2>Shorten It</h2>
      <p>Shorten all your links <span className="underline">with ease</span></p>
      <InputBox />
      <Button />
      <p>
        <Link to="/mylinks">Check Out All Your Processed links</Link>
      </p>
      
  </div>


export default Home

