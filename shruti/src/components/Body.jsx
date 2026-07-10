import React from 'react'

export default function Body() {
  return (
    <>
    <div style={{backgroundColor:'#041f57',padding:'30px',color:'white',display:'flex'}}>
    <div style={{width:'50%'}}>
        <h1 style={{color:'white',fontSize:'40px',lineHeight:'1.2',textAlign:'left'}} >Compliance clarity.<br />
        Action with <i style={{color:'green'}}>confidence.</i></h1><br />
        <p style={{marginTop:'1px',width:'90%',textAlign:'left'}}>Curated regulatory updates from IFSCA,RBI,SEBI,FEMA and 
          other regulators --- explained in plain English with clear
          action points for GIFT City professionals. </p>
          <div style={{display:'flex',gap:'15px',marginTop:'25px'}}>
        <button style={{backgroundColor:'green',color:'white',borderRadius:'8px',border:'none',padding:'12px 25px'}}>Join Free &#8594; </button>
        <button style={{backgroundColor:'transparent',color:'white',border:'1px solid white',borderRadius:'8px',padding:'12px 25px'}}> <img src="https://static.vecteezy.com/system/resources/previews/010/576/786/large_2x/calendar-icon-logo-illustration-calendar-symbol-template-for-graphic-and-web-design-collection-free-vector.jpg" alt="Calendar" style={{height:'15px',marginRight:'15px'}} />Explore Calendar</button> </div>
         <div style={{display:'flex',gap:'40px',marginTop:'40px'}}>
          <div> 
            <h3> 1,500+</h3>
            <p>Professionals</p>
          </div>
          <div>
            <h3>400+</h3>
            <p>Regulatory Updates</p>
          </div>
          <div>
            <h3>150+</h3>
            <p>Premium Resources</p>
          </div>
          <div>
            <h3>100+</h3>
            <p>Deadlines Tracked</p>
          </div>

       </div>
    </div>
    <div style={{width:'50%'}}>
      <img src="https://images6.alphacoders.com/423/423653.jpg" alt="city" style={{width:'100%',height:'100%',borderRadius:'20px',borderBottomLeftRadius:'80%'}}/>
        </div>




    </div>  
    </>

  )
}
