import React from 'react'


function MyLinks() {
  let answer = localStorage.getItem("url") || []
  let result = localStorage.getItem('result') || [];
  return (
    <div className="container-links">
      <div className="header">
      <h1>Welcome to Your Links Page</h1>
      <p>These are the links you have shortened so far. Kindly thank my creator for these.</p>
      </div>      
      <table className="table-container">
        <th>Link</th>
        <th>Shortened Link</th>
        <tr>
          <td><a href="https://localhost.com/3000">https://localhost.com</a></td>
          <td><a href="https://chickenost.com/3000">https://localhost.com</a></td>
        </tr>
      </table>        
        <p>{result}</p>
    </div>
  )
}

export default MyLinks
