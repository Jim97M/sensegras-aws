import React from 'react'
import "../index.css";
import img from './sensegrass.png';

const Login = () => {
  return (
      <div className="container">
        <div className="card">
            <div className="form">
                <div className="leftside">
                    <div className='sensehead' >
                       <h3>SENSEGRASS</h3>
                    </div>
                    <form>
                        <div className="input_text">
                           <input className="" type="text" placeholder="Enter Email" name="email" />
                           <p><i className="fa fa-warning">Please enter a valid email address</i></p>
                        </div>
                        <div className="input_text">
                           <input className="" type="text" placeholder="Enter Password" name="password" />
                           <i className="fa-fa-eye"></i>
                        </div>
                        <div className="btn"> 
                          <button type="submit">Sign In</button>
                        </div>
                    </form>
                </div>
                <div className="right-side">
                   <img src={img} />
                </div>
            </div>
        </div>
      </div>
  )
}
export default Login;