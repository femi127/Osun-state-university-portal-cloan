import React from 'react';
import '../App.css';
import Important from '../Assect/Important.jpg';
import Spacer from '../Assect/Space.jpg';
const styles = {
  backgroundImage: ` url(${Spacer})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '465px',
  width: '30%',
  border: '1px solid white',
  padding: '0px 4px 0px 4px',
  backgroundColor: '#fff',
  position: 'relative'
  
};
function AboutUs() {
    return (
        <div style={styles}>
            <div className="aboutus-container"  style={{   
                backgroundColor: 'rgb(255,255,235)',
                borderRadius: '10px',   
                padding: '10px 15px 10px 15px',            
                }}> 
                <p style={{color:'rgb(0,51,0)', fontSize:'18px', fontWeight:'bold', fontStretch: 'expanded'}}>WELCOME!</p>
                <p style={{lineHeight:'1.5', fontSize: '12px', margin:'0 0', textAlign: 'left', }}><strong>IMPORTANT NOTICE ON SCHOOL FEES PAYMENT:</strong><br/>
                &diams; Please note that payment of <strong>School Fees</strong> henceforth is by Remita Platform through the use of ATM cards.<br/><br/>
                &diams; Ensure you read the <a href="/feeqtech/public/uniosun_webpay_guide.pdf" target="blank" rel="noopener noreferrer" className='over_mouse'>Step-By-Step UNIOSUN WebPAY Guide</a> as well as the <a href='.' className='over_mouse'>UNIOSUN WebPAY FAQs/Tips</a> before you proceed. <br/><br/>
                <img src={Important} alt="important notice" style={{ display: 'block', margin: '0 auto', border: '1px solid rgb(0,102,0)', position: ''}} width={'181'} height={'auto'}/>
                </p>
                
            </div>
        </div>
    );
}

export default AboutUs 