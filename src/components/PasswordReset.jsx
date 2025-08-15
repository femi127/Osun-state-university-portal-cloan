import React from 'react';
import HeaderIMG from './HeaderIMG';
import '../App.css';
const PasswordReset = () => {
  return (

    <>
        <div style={{width:'990px', margin:'0 auto', textAlign:'left'}}>
            {<HeaderIMG />}
            <div className='body-div'>
                <div style={{margin:'0 0 0 1%'}}>
                  <p style={{
                      backgroundColor: 'rgb(216,237,180)',
                      // padding: '2% 1% 0 0',
                      borderBottom: '1px solid rgb(153,153,153)',
                      color: 'rgb(182,146,10)',
                      fontSize: '20px',
                      fontWeight: '500',
                      }}>Student Portal Password Reset
                  </p>
                </div>
                <div style={{width:'30%'}}>
                  <div className='side-bar'>    
                     <div className='sideBar-top'>&nbsp;</div>
                      <ul>
                        <li><span>Please log in!</span></li>
                      </ul>
                     <div className='sideBar-bottom'>&nbsp;</div> 
                  </div>
               </div>
            </div>            
        </div>
    </>
  )
}

export default PasswordReset
