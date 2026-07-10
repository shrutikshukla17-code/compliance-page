import React from 'react'

function Header() {
  return (
   <>
   <ul style={{display:'flex', gap:'10px', listStyle:'none' , backgroundColor:'#021B4D', padding:'15px 30px', alignItems:'center', margin:'0', justifyContent:'space-between'}}>
    <div style={{display:'flex', alignItems:'center'}}>
    <img src="https://www.uhy-fay.com/wp-content/uploads/2025/09/cmplnc-pic.png" alt="logo" style={{height:'50px'}}/>
     <span> <h3 style={{color:'white',lineHeight:'1.1'}}>Compliance Intelligence</h3>
    <p style={{color:'white',marginTop:'-25px',fontSize:'13px'}}>By Prashant Kumar</p></span>
    </div>
    <div style={{display:'flex', gap:'20px', listStyle:'none' , backgroundColor:'#021B4D', padding:'15px', alignItems:'right', margin:'0', justifyContent:'space-between', marginLeft:'100px', marginRight:'-6px'}} >
    <li style={{color:'white'}}>Home</li>
    <li style={{color:'white'}}>Updates</li>
    <li style={{color:'white'}}>Calendar</li>
    <li style={{color:'white'}}>Resources</li>
    <li style={{color:'white'}}>Guides</li>
    <li style={{color:'white'}}>About</li>
    <li style={{color:'white'}}>Contact</li>
    </div>
    <div style={{ display: "flex", gap: "10px" }}>
    <button style={{color:'white', backgroundColor:'transparent', borderRadius:'5px',border:'1px solid white', padding:'8px 18px'}}>Login</button>
    <button style={{backgroundColor:'green', color:'white',borderRadius:'5px',padding:'8px 18px', border:'none'}}>Join Free</button>
    </div>
   </ul>
    </>
  );
}

export default Header;