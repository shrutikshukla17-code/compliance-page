import React from 'react'

export default function Details() {
  return (
    <div>
        <section style={{backgroundColor:'#1d1b1b',color:'black', 
        backgroundImage: "url('https://www.britadventures.com/wp-content/uploads/2022/05/Feature-travel-budd.jpg')",
         backgroundSize:'cover', backgroundPosition:'center',padding:'20px'
         }}>
      <h2>Welcome to Tourism Buddy</h2>
      <div>
        <p>Tourism Buddy is a travel-based web application designed to simplify trip planning. 
        It helps users discover destinations, plan their itineraries, and find essential travel information in one place. </p>
        <h3>Why choose us</h3>
        <ul style={{listStyle:'none', display:'grid'}}>
          <li> Smart Destination Suggestions</li>
          <li>Real-time Updates</li>
          <li>Local Guide Integration</li>
          <li>Easy Collaboration</li>
        </ul>
      </div>
    </section>
    </div>
    
  )
}
