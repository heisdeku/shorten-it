import React from 'react'


function MyLinks() {  
  let links = JSON.parse(localStorage.getItem('links')) || []
  console.log(links)
  return (
    <div className="container-links">
      <div className="header">
      <h1>Welcome to Your Links Page</h1>
      <p>These are the links you have shortened so far. Kindly thank my creator for these.</p>
      </div>      
      {
        links ? (
        <table className="table-container">
            <thead>
              <tr>
                <td>Link</td>
                <td>Shortened Link</td>    
              </tr>              
            </thead>  
            <tbody>
              {links.map((link, i) => (
              <tr key={i}>
                <td><a href={link.url}>{link.url}</a></td>
                <td><a href={link.resultUrl}>{link.resultUrl}</a></td>
              </tr>
            ))}
        </tbody>                  
        </table>  
        )
        : <p>You haven't used the platform</p>  
      }                        
    </div>
  )
}

export default MyLinks
