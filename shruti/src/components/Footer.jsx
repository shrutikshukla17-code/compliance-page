import React from 'react'

export default function Footer() {
  return (
    <>
    
        <div className='footer'style={{display:'flex' ,backgroundColor:'#021B4D',listStyle:'none',color:'white',padding:'30px',gap:'50px',justifyContent:'space-between',alignItems:'flex-start'}}>
        <div style={{width:'28%',textAlign:'left'}}>
        <li><h3>About Prashant kumar</h3></li>
        <div style={{display:'flex',gap:'10px'}}>
        <img src="https://sccapital.in/images/directors/Prashant-Kumar-2.jpg" alt="Prashant Kumar" style={{height:'60px',width:'60px',borderRadius:'50%'}}/>
        <p>Compliance professional with 15+ years of experience in financial services, GIFT City regulations, and regulatory advisory.</p> </div>
        <li style={{color:'green',padding:'10px 0px 0px 70px'}}>know more --> </li>
        </div>
        <div style={{gap:'20px',display:'flex',width:'45%'}}>
        <div style={{display:'grid',width:'40%'}}>
          
        <h3>Quick Links</h3>
        <li>Updates</li>
        <li>Calendar</li>
        <li>Resources</li>
        <li>Guides</li>
        </div>
        <div  style={{display:'grid',width:'40%'}}>
            <h3>Company</h3>
            <li>About</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
        </div>
        <div  style={{display:'grid',width:'40%'}}>
          <h3>Connect</h3>
          <li><img src="https://static.vecteezy.com/system/resources/previews/022/424/463/non_2x/linkedin-logo-editorial-free-vector.jpg" alt="linkedin" style={{height:'20px'}}/>&nbsp;Linkedin</li>
          <li><img src="https://pngimg.com/uploads/email/email_PNG100751.png" alt="Email" style={{height:'20px'}} />&nbsp;&nbsp;Email</li>
          <li><img src="https://pngimg.com/uploads/whatsapp/whatsapp_PNG20.png" alt="Whatsapp" style={{height:'20px'}} />&nbsp;Whatsapp</li>
        </div>
        </div>
        <div style={{width:'15%'}}>
            <h3> Newsletter </h3>
            <p>Subscribe to get the latest updates and insights straight to your inbox</p>
            <input type="Email" placeholder='Enter your email' />
        </div>
        
      </div>
      <div style={{backgroundColor:'#021B4D',color:'white', padding:'10px'}}>
          <p>©2024 compliance intelligence. All rights reserved.</p>
        </div>
    
    </>
  )
}
