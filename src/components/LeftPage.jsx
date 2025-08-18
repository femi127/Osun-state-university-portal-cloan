import React  from 'react';
import Student_icon from '../Assect/Student_icon.jpg';
import '../App.css';
import { Link } from 'react-router-dom';
import myFile from "../Assect/Uniosun_webpay_guide.pdf";
// import TestingPage from '../components/Testing'
 
function Leftpage() {
     const openPopup = () => {
    window.open("https://portal.uniosun.edu.ng/web_pay_tips.php", "_blank", "width=800,height=600");
  };
    return(
           <>
             <div className="welcome-container"> 
                <p style={{
                    backgroundColor: 'rgb(216,237,180)',
                    padding: '2% 0 0 0',
                    borderBottom: '1px solid rgb(153,153,153)',
                    color: 'rgb(182,146,10)',
                    fontSize: '20px',
                    fontWeight: '500',
                }}>Student Portal</p>
                <div style={{alignItems: 'center', display:'flex',}}>
                        <div>
                            <img src={Student_icon} alt="important notice"/>
                        </div>
                        <div style={{margin:'0 0 0 10PX'}}>
                            <p style={{fontSize: '15px', fontWeight: 'bold', color: 'rgb(155,136,4)'}}>Authentication required to use the Student Portal.</p>
                            <div style={{display: 'flex', gap: '10px', marginTop: '10px'}}>
                                <div style={{textAlign: 'right'}}>
                                     <p for="Name" style={{fontWeight:'bold', color:'rgb(51,51,51)', fontSize:'12px'}}>Matric/UTME/DE Reg. No:</p>
                                     <p name='password' style={{fontWeight:'bold', color:'rgb(51,51,51)', fontSize:'12px'}}>Password</p>
                                </div>
                                <div>
                                    <input type="text" style={{backgroundColor:'rgb(232,240,254)', border:'1px solid black', width:'150px', padding:'6px 3px 6px 3px', borderRadius:'3px'}} name="name" required /> <br/>
                                    <input type="password" required style={{backgroundColor:'rgb(232,240,254)', border:'1px solid black', marginTop:'3px', width:'150px', padding:'6px 3px 6px 3px', borderRadius:'3px'}} /><br />
                                    <button type='submit' style={{padding:'5px', marginTop:'3px'}}>Login</button>
                                </div>
            
                            </div>
                              <p style={{fontSize:'12px'}}> If you forgot your password, <Link to={'/passwordReset'} className='mouse_over'>Click here </Link>  to recover it</p> 
                        </div>
                    
                </div>
                <p style={{fontWeight: 'bold', fontSize:'12px'}}>IMPORTANT NOTICE ON SCHOOL FEES PAYMENT:</p>
                <p style={{fontSize:'12px'}}>&diams; Please note that payment of School Fees henceforth is by Remita Platform through the use of ATM cards.</p>
                <p style={{fontSize:'12px'}}>&diams; Ensure you read the <a href={myFile} target="_blank" rel="noopener noreferrer" className='cusorBTN'>Step-By-Step UNIOSUN WebPAY Guide</a> as well as the <button className='cusorBTN' style={{backgroundColor:'inherit', border:'none', cursor:'pointer'}} onClick={openPopup}> UPDATED UNIOSUN WebPAY FAQs/Tips</button> before you proceed.</p>
                {/* <br /> */}
                <p style={{fontSize:'12px'}}><span style={{color:'#cc1626', fontWeight:'bold'}}>If you have any enquiry or difficulties please contact the Administrators by using the following information:</span>
                    <br />
                    <bold>Email Address:</bold> portal.support[at]uniosun.edu.ng <br />
                    (Note: Pls replace the [at] in the email address with the @ symbol ) <br />
                    
                </p>
                <p style={{fontSize:'12PX'}}> <b style={{color:'#cc1626'}}>For issues on domain email account, contact <span style={{fontStyle:'italic'}}>mail.admin[at]uniosun.edu.ng</span></b>  <br /> 
                    <b>Whatsapp Number:</b> 09119994001 (Strictly Whatsapp Only)
                </p>

                
        </div>
           </>
        
    )
        
    }

export default Leftpage