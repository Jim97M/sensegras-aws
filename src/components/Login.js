import React, {useState} from 'react'
import { useNavigate} from "react-router-dom";
import "../index.css";
import UserPool from '../UserPool';
import img from './sensegrass.png';


const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


const onSubmit = (event) => {
  event.preventDefault();

  UserPool.signUp(email, password, [], null, (err, data) => {
    if(err){
      console.error(err);
    }
    console.log(data);
  })
}
  return (
      <div className="container">
        <div className="card">
            <div className="form">
                <div className="left-side">
                    <div className="sensehead">
                       <h3>SENSEGRASS</h3>
                       <h5>LOGIN TO SG ACCOUNT</h5>
                    </div>
                    <form onSubmit={onSubmit}>
                        <div className="input_text">
                           <input
                             value={email}
                             onChange={(event) => setEmail(event.target.value)}                             
                             className="" type="text" placeholder="Enter Email" name="email" />
                           <p><i className="fa fa-warning">Please enter a valid email address</i></p>
                        </div>
                        <div className="input_text">
                           <input
                            value={password} 
                            onChange={(event) => setPassword(event.target.value)}
                            className="" type="text" placeholder="Enter Password" name="password" />
                           <i className="fa fa-eye"></i>
                        </div>
                        <div className="btn"> 
                          <p>Forgot Password?</p>
                          <button type="submit" onClick={() => navigate("/home")}
                          >Sign In</button>
                        </div>
                    </form>
                    <div className="signup-header">
                         <h5> LETS GET STARTED</h5> 
                       </div>
                    <form>
                     <div className="input_textt">
                       <p id="agree">I agree with processing of my personal data with conformity with the Privacy Policy. When
                         Clicking on "Get Started". You also agree with the End User Licence Agreement</p>
                         <input className="" type="text" placeholder="Enter Your Email Ids" name="password" />
                     </div>
                     <div className="btn"> 
                          <button type="submit"
                          >Sign Up</button>
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