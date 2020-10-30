import React from 'react'
import './Result.css'
function Result(props) {
  return (
    <div className="result__inner">
      <div className="result__inner-input">
      <p>Link</p>
        <p className="input"><a target="_blank"href={props.input}>{props.input}</a></p>
      </div>
      <div className="result__inner-output">
        <p>Shortened Link</p>
        <p className="output">
          <a target="_blank" href={props.output}>{props.output}</a></p>
      </div>
    </div>
  )
}

export default Result;
