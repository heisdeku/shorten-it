import React from 'react'

function Button({buttonClick}) {
  return (
    <button 
      type="submit"
      onClick={buttonClick}
    >
      Shorten Link
    </button>
  )
}


export default Button