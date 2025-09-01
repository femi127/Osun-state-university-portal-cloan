import Student_icon from '../Assect/Student_icon.jpg';
import '../App.css';
import { Link } from 'react-router-dom';
import myFile from "../Assect/Uniosun_webpay_guide.pdf";
function LeftPage() {
     const openPopup = () => {
        window.open("https://portal.uniosun.edu.ng/web_pay_tips.php", "_blank", "width=800,height=600");
  };
    return(
           <>
             <div className="welcome-container"> 
                <p className='STUdent_porTAL'>Student Portal</p>
                <div className='main_container' >
                        <div>
                            <img src={Student_icon} alt="important notice"/>
                        </div>
                        <div className='authent_Div'>
                            <p className='authenticantion'>Authentication required to use the Student Portal.</p>
                            <form action="" method="post">
                                <div className='row_Flex'>
                                    <div className='right-alignment'>
                                        <p for="Name" className='matric-utme-de' >Matric/UTME/DE Reg. No:</p>
                                        <p name='password' className='matric-utme-de' style={{fontWeight:'bold', color:'rgb(51,51,51)', fontSize:'12px'}}>Password</p>
                                    </div>
                                    <div>
                                        <input type="text" className='input-field'  name="name" required /> <br/>
                                        <input type="password" className='p-a-s-s-word' required /><br />
                                        <button type='submit' className='btn_login'>Login</button>
                                    </div>
                                </div>
                            </form>
                              <p className='if_passworForget'> If you forgot your password, <Link to={'/passwordReset'} className='mouse_over'>Click here </Link>  to recover it</p> 
                        </div>     
                </div>
                <p className='impot_not' >IMPORTANT NOTICE ON SCHOOL FEES PAYMENT:</p>
                <p className='note-hence'>&diams; Please note that payment of School Fees henceforth is by Remita Platform through the use of ATM cards.</p>
                <p className='note-hence'>&diams; Ensure you read the <a href={myFile} target="_blank" rel="noopener noreferrer" className='cusorBTN'>Step-By-Step UNIOSUN WebPAY Guide</a> as well as the <button className='cusorBTN' onClick={openPopup}> UPDATED UNIOSUN WebPAY FAQs/Tips</button> before you proceed.</p>
                <p className='note-hence'><span className='if-enquiry'>If you have any enquiry or difficulties please contact the Administrators by using the following information:</span>
                    <br />
                    <bold>Email Address:</bold> portal.support[at]uniosun.edu.ng <br />
                    (Note: Pls replace the [at] in the email address with the @ symbol ) <br />  
                </p>
                <p className='note-hence'> <b className='boldtext'>For issues on domain email account, contact <i>mail.admin[at]uniosun.edu.ng</i></b>  <br /> 
                    <b>Whatsapp Number:</b> 09119994001 (Strictly Whatsapp Only)
                </p>                
        </div>
           </>
    )
    }
export default LeftPage