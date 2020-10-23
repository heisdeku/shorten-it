import React from 'react'
import './Result.css'
function Result(props) {
  return (
    <div class="result__inner">
      <div className="result__inner-input">
      <p>Link</p>
        <p className="input"><a href={props.input}>{props.input}</a></p>
      </div>
      <div className="result__inner-output">
        <p>Shortened Link</p>
        <p className="output">
          <a href={props.output}>https://shrt.web/35fd23</a></p>
      </div>
    </div>
  )
}

export default Result;
