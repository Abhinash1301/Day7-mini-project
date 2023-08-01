import React from 'react'
import './Login.css';
// import identify from"./identify.png";
import './createac';
import {Link} from 'react-router-dom';
function Login() {
  return (
    <body>
   <header class="header">
   </header>
    
    <div class="background"></div>
    <div class="container">
        <div class="item">
            <h2 class="logo"><i class='bx bxl-xing'></i>
            </h2>
            <div class="text-item">
                <h1 className='heading'>Recruito<br/><span>
                    
                </span></h1>
                <p>"Unlock Your Potential: Join Our Winning Team!"</p>
            </div>
        </div>
        <div class="login-section">
            <div class="form-box login">
                <form action="">
                    <h2>Log In</h2>
                    <div class="input-box">
                        <span class="icon"><i class='bx bxs-envelope'></i></span>
                        <input type="text" placeholder='Username' required/>
                    </div>
                    <div class="input-box">
                        <span class="icon"><i class='bx bxs-lock-alt' ></i></span>
                        <input type="password" placeholder='Password'required/>
                    </div>
                    <div class="remember-password">
                        <label for=""><input type="checkbox"/>Remember Me</label>
                        {/* <a href="#">Forget Password</a> */}
                    </div>
                    <button class="btn">Log In</button>
                    <button class="google"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNBFaWfLGLcxy9wQ3jFfKa87DLrQ_rv7v2UQ&usqp=CAU" class='googleimg'></img>Sign In with Google</button>
                    <div class="create-account">
                        <p>Don't have an Account?<Link to="/createac"><a class="register-link">Sign Up</a></Link></p>
                    </div>
                </form>
            </div>
            
                   
               
            </div>
        </div>
    
</body>
    
  )
}

export default Login