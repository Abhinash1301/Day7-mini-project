import React from 'react'
import './createac.css';
function createac() {
  return (
    <body>
   <header class="header">
   </header>
    
    <div class="background"></div>
    <div class="container">
        <div class="item">
            <h2 class="logo"><i class='bx bxl-xing'></i></h2>
            <div class="text-item">
                <h1 className='heading'>Recruito<br/><span>
                    
                </span></h1>
                <p>"Unlock Your Potential: Join Our Winning Team!"</p>
            </div>
        </div>
        <div class="login-section">
            <div class="form-box login">
                <form action="">
                    <h2>CREATE AN ACCOUNT</h2>
                    <div class="input-box">
                        <span class="icon"><i class='bx bxs-envelope'></i></span>
                        <input type="text" placeholder='Name' required/>
                    </div>
                    <div class="input-box">
                        <span class="icon"><i class='bx bxs-envelope'></i></span>
                        <input type="text" placeholder='Username' required/>
                    </div>
                    <div class="input-box">
                        <span class="icon"><i class='bx bxs-lock-alt' ></i></span>
                        <input type="password" placeholder='Password'required/>
                    </div>
                    <div class="input-box">
                        <span class="icon"><i class='bx bxs-lock-alt' ></i></span>
                        <input type="confirm password" placeholder='confirm Password'required/>
                    </div>
                    <button class="btn">Sign Up</button>
                    <div class="create-account">
                        <p>Have already an account? <a href="#" class="register-link">Login Here</a></p>
                    </div>
                </form>
            </div>
            </div>
        </div>
    
</body>
    
  )
}

export default createac