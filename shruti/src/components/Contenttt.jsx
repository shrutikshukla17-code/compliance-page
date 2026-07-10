import React from 'react'

export default function () {
  return (
    <>
    <div style={{width:'100%'}}>
    <div style={{padding:'20px',textAlign:'left',border:'1px solid #f5f2f2',borderRadius:'20px'}}>
      <h2><b>Premium Resource Library</b></h2>
      <p>Practical templates, checkslists, guides and more</p> <br />
      <div style={{gap:'15px',color:'black',display:'flex'}}>
       <div style={{width:'15%',border:'1px solid #f2efef',borderRadius:'10px'}}> 
        <h4><b>Checklists</b></h4>
        <p>Step-by-step compliance checklists</p> </div> 
         <div style={{width:'15%',border:'1px solid #f2efef',borderRadius:'10px'}}>
          <h4><b>Board Notes</b></h4>
          <p>Ready-to-use board notes & agendas</p>
        </div>
        <div style={{width:'15%',border:'1px solid #f2efef',borderRadius:'10px'}}> 
          <h4><b>Policies</b></h4>
          <p>Drafting guides & policy templates</p>
        </div>
        <div style={{width:'15%',border:'1px solid #f2efef',borderRadius:'10px'}}>
          <h4><b>Filing Guides</b></h4>
          <p>Regulatorwise filing & reporting guides</p>
        </div>
        <div style={{width:'18%',border:'1px solid #f2efef',borderRadius:'10px'}}>
          <h4><b>Presentation Decks</b></h4>
          <p>board & management presentation templates</p>
        </div>
        <div style={{width:'15%',border:'1px solid #f2efef',borderRadius:'10px'}}>
          <h4><b>FAQs</b></h4>
          <p>Answer to common compliance questions</p>  </div>
      </div>
    </div>
    <div style={{padding:'10px',display:'flex',color:'black',backgroundColor:'#f0fef0',textAlign:'left',gap:'40px',borderRadius:'20px'}}>
      <div style={{width:'21%',paddingLeft:'35px'}}>
        <h3><b>Curated & Simplified</b></h3>
        <p>Key updates, simplified for faster understanding</p>
      </div>
      <div  style={{width:'20%'}}>
        <h3><b>Actional Insights</b></h3>
        <p>Clear summary with applicability and actions</p> </div>
      <div style={{width:'20%'}}>
        <h3><b>Deadline Alerts</b></h3>
        <p>Email & WhatsApp alerts so you never miss any</p>
      </div>
      <div style={{width:'21%'}}>
        <h3><b>Expert Support</b></h3>
        <p>Ask Prashant your queries, get practical guidance</p>
      </div>  </div>
      <div style={{padding:'20px',textAlign:'left'}}>
        <h2><b>Simple Membership. Maximum Value. </b></h2>
        <div style={{display:'flex',gap:'20px'}}>
        <div style={{width:'25%',border:'1px solid #f7f4f4',borderRadius:'10px'}}>
          <h3>&nbsp;&nbsp;FREE</h3>
           &nbsp;<input type='checkbox' style={{accentColor:'green',height:'20px'}}></input>
                &nbsp;<label style={{fontSize:'15px'}}>Access to public articles</label><br />
                &nbsp;<input type='checkbox'style={{accentColor:'green',height:'20px'}}></input>
                &nbsp;<label style={{fontSize:'15px'}}>Limited regulatory</label> <br />
                &nbsp;<input type='checkbox'style={{accentColor:'green',height:'20px'}}></input>
                <label style={{fontSize:'15px'}}>Compliance calendar access</label><br />
                 &nbsp;<input type='checkbox'style={{accentColor:'green',height:'20px'}}></input>
                <label style={{fontSize:'15px'}}>Monthly email newsletter</label><br />
                <p style={{padding:'10px'}}><button style={{backgroundColor:'transparent',color:'black',borderRadius:'8px',border:' 1px solid #adabab99',width:'90%',height:'35px'}}>Join Free&nbsp;</button></p>   </div>
                <div style={{width:'46%',border:'1px solid #424141',borderRadius:'10px'}}>
        <div style={{display:'flex'}}>
          <div style={{width:'50%'}}>
            <h3>PREMIUM</h3>
             &nbsp;<input type='checkbox' style={{accentColor:'green',height:'15px'}}></input>
                &nbsp;<label style={{fontSize:'15px'}}>All regulatory updates</label><br />
                &nbsp;<input type='checkbox'style={{accentColor:'green',height:'15px'}}></input>
                &nbsp;<label style={{fontSize:'15px'}}>Compliance calendar & alerts</label> <br />
                &nbsp;<input type='checkbox'style={{accentColor:'green',height:'15px'}}></input>
                <label style={{fontSize:'15px'}}>WhatsApp deadline reminders</label><br />  </div>
          <div style={{padding:'20px',width:'44%'}}> 
           <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button style={{border:'0.1px solid #b9d4b9',backgroundColor:'#ddf4dd',color:'#067a06e0',borderRadius:'5px'}}>Best Value</button> </p> <br />
            &nbsp;<input type='checkbox' style={{accentColor:'green',height:'10px'}}></input>
                &nbsp;<label style={{fontSize:'15px'}}>Premium resource library</label><br />
                &nbsp;<input type='checkbox'style={{accentColor:'green',height:'10px'}}></input>
                &nbsp;<label style={{fontSize:'15px'}}>Ask Prashant-Query Desk</label> <br />
                &nbsp;<input type='checkbox'style={{accentColor:'green',height:'10px'}}></input>
                <label style={{fontSize:'15px'}}>Weekly email digest</label><br /> </div>
        </div> &nbsp;&nbsp;&nbsp;&nbsp;<button style={{width:'90%',height:'35px',backgroundColor:'#021948',color:'white',borderRadius:'8px'}}>Upgrade to Premium</button></div>
        <div style={{padding:'20px',width:'25%',border:'1px solid #f7f4f4',borderRadius:'10px',backgroundColor:'#f0fef0'}}>
          <h3>&nbsp;Secure.Reliable. Trusted.</h3>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;Your compliance partner for &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; GIFT City and beyond</p>
          </div> </div>    </div>
          <div style={{backgroundColor:'#041f57',borderRadius:'10px',display:'flex',padding:'20px 10px 0px 20px',marginLeft:'20px',marginRight:'20px',marginBottom:'-6px'}}>
            <div style={{width:'55%'}}>
              <h2 style={{color:'white'}}>Stay ahead with the weekly Compliance Digest</h2>
              <p style={{color:'white'}}>A 5-minute email with key updates, deadlines and insights every week.</p> <br /> </div>
            <div style={{width:'45%'}}>
              <input type="Email" placeholder='&nbsp;&nbsp;Enter your email' style={{height:'35%',width:'80%'}}/>
            </div>

          </div>

    
    </div>
    </>
  )
}
