import React from 'react'

function MyLinks() {
  let answer = localStorage.getItem("url") || []
  let result = localStorage.getItem('result') || [];
  return (
    <div className="container">
      <h1>Welcome to Your Links Page</h1>
      <p>These are the links you have shortened so far. Kindly thank my creator for these.</p>
      <table>
        <th>Link</th>
        <th>shortened Link</th>
        <tr>
          <td>https://localhost.com</td>
          <td>https://chickenalhost.com</td>
        </tr>
      </table>        
        <p>{result}</p>
    </div>
  )
}

export default MyLinks
