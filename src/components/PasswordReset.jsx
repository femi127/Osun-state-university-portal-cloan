import HeaderIMG from './HeaderIMG';
import Footer from './Footer';
import Student_icon from '../Assect/Student_icon.jpg';
import '../App.css';

function PasswordReset() {
  return (
    <div className="PasswordReset_main_div">
      <HeaderIMG />
      <div className="body-div">
        <div className="left_div"></div>
        <div className="middle_div">
          <p className="student_portal_password">Student Portal Password Reset</p>
          <form action="" method="post">
            <div>
              <img src={Student_icon} className="studentICON" alt="student icon" />
            </div>
            <div>
              <p className="provide_email">
                Provide your email address in the box below
              </p>
              <div style={{ display: "flex" }} className="email_address_flex">
                <div>
                  <label className="Email_Address">Email Address:</label>
                </div>
                <div>
                  <input type="email" name="email" required />
                  <p className="youATexample">
                    e.g: you@example.com <br />
                    Please note that the email address required here is the email
                    address you submitted on your profile.
                  </p>
                  <button type="submit">Submit</button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div style={{ width: "30%" }}>
          <div className="side-bar">
            <div className="sideBar-top">&nbsp;</div>
            <ul className="sideBar-ul">
              <li><span className="Please_Log_in">Please Log in!</span></li>
            </ul>
            <div className="sideBar-bottom">&nbsp;</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PasswordReset;

// import HeaderIMG from './HeaderIMG';
// import Footer from './Footer';
// import Student_icon from '../Assect/Student_icon.jpg';
// import '../App.css';
// const PasswordReset = () => {
//   return (
//     <>
//         <div className='PasswordReset_main_div'>
//             {<HeaderIMG />}
//             <div className='body-div'>
//                 <div className='left_div'></div>
//                 <div className='middle_div'>  
//                   <div><p className='student_portal_password'>Student Portal Password Reset</p></div>
//                   <div>
//                     <form action="" method="post">
//                       <div>
//                         <img src={Student_icon} className='studentICON' alt="student icon" />
//                       </div>
//                       <div>
//                         <div><p className='provide_email'>Provide your email address in the box below</p> </div>
//                         <div style={{display:'flex'}} className='email_address_flex'>
//                           <div>
//                             <label className='Email_Address'>Email Address:</label>
//                             </div>
//                           <div>
//                             <div><input type="email" name="email"  required /></div>
//                             <div> <p className='youATexample'>
//                               e.g: you@example.com <br />
//                               Please note that the email address required here is the email<br />address you submitted on your profile.
//                             </p>
//                             <button type='submit'>Submit</button>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </form>
//                   </div>
//                 </div>
//                 <div style={{width:'30%',}}>
//                   <div className='side-bar'>    
//                      <div className='sideBar-top'>&nbsp;</div>
//                       <ul className='sideBar-ul'>
//                         <li><span className='Please_Log_in'>Please Log in!</span></li>
//                       </ul>
//                       <p>
//                         <br /><br /><br /><br /><br /><br />
//                       </p>
//                      <div className='sideBar-bottom'>&nbsp;</div> 
//                   </div>
//                </div>
//             </div> 
//             {<Footer/>}           
//         </div>
//     </>
//   )
// }

// export default PasswordReset
