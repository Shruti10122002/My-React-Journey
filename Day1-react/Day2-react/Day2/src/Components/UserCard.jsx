import React from 'react'



function UserCard() {
  return (
    <div className='user-container'>
        <p id='user-name'>Shruti Ranjan</p>
        <img id='user-img' src ='https://imgs.search.brave.com/XEoQoKEk2kl7Qrege1wstkdnsCsOA1GWrf_uaW_Wh8w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/ZGlmZmVyZW50LWNv/bG9yZWQtbG9sbGlw/b3BzLW9uLWJsYWNr/LmpwZz93aWR0aD0x/MDAwJmZvcm1hdD1w/anBnJmV4aWY9MCZp/cHRjPTA' alt='Shruti'></img>
        <p id ='user-desc'>Description of Shruti Ranjan</p>
      
    </div>
  )
}

export default UserCard
