// import React, { useState } from 'react'
// import './CSS/LoginSignup.css'
// import { useLocation, useNavigate } from 'react-router-dom'
// const LoginSignup = ({topic}) => {

//   // const [state,setState] = useState(props);

//  const navigate = useNavigate();

//   const handleLogin = () => {
//     // Assume login is successful
//     // You can add actual auth logic here

//     if (topic) {
//       navigate('/quiz', { state: { props: topic } });
//     } else {
//       alert("No topic selected");
//     }
//   };


//  const [showLogin, setShowLogin] = useState(true);
//   const [selectedTopic, setSelectedTopic] = useState(null);

//   // const handleTopicClick = (topic) => {
//   //   setSelectedTopic(topic);
//   //   setShowLogin(true);
//   // };

//   const closeModal = () => {
//     setShowLogin(false);
//     setSelectedTopic(null);
//   };









//   // const [formData,setFormData] = useState({
//   //   username:"",
//   //   email:""
//   // })

//   // const changeHandler = (e) =>{
//   //   setFormData({...formData,[e.target.name]:e.target.value})
//   // }
//   // const navigate = new useNavigate();
//   // const location = new useLocation();
//   // const {props} = location.state;
  
//   // const change=()=>{

//   //   navigate('/quiz',{state:{props}});
//   // }
//   // const handleSubmit=(e)=>{
//   //   e.preventDefault();
//   //   if(formData.username && formData.email){
//   //     change();
//   //   }
//   //   else{
//   //     alert("Please fill the required details");
//   //   }
//   // }
//   return (
    
//     <div className='loginsignup'>
//       <div className="loginsignup-container">
//         <h1>Fill your Details</h1>
//         <button className="close-btn" onClick={closeModal}>X</button>
//         <form>
//         <div className="loginsignup-fields">
//           <input name='username' type="text" placeholder='Your Name'  required/>
          
//           <input name='email'  type="email" placeholder='Email Address'  required />
          
//         </div>
//         <button onClick={handleLogin} type='submit'>Start</button>
//         {/* {state==='Sign Up'
//         ?<p className="loginsignup-login">Already have an account? <span onClick={()=>{setState("Login")}}> Login here</span></p>
//         :<p className="loginsignup-login">Create an account? <span onClick={()=>{setState("Sign Up")}}>Click here</span></p>} */}
//         <div className="loginsignup-agree">
//           <input type="checkbox" id='' required />
//           <p>By continuing , I agree to the terms of use & privacy policy.</p>

//         </div>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default LoginSignup











import React, { useState } from 'react';
import './CSS/LoginSignup.css';
import { useNavigate } from 'react-router-dom';

const LoginSignup = ({ topic }) => {
  const navigate = useNavigate();

  const [showLogin, setShowLogin] = useState(true);

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent default form submission

    if (topic) {
      navigate('/quiz', { state: { props: topic } });
    } else {
      alert('No topic selected');
    }
  };

  const closeModal = () => {
    setShowLogin(false);
    navigate('/popular');
  };

  if (!showLogin) return null; // Hide the modal when closed

  return (
    <div className="loginsignup-overlay">
      <div className="loginsignup-container">
        
        <button className='close-btn' onClick={closeModal}>X</button> 
        <h1 className='mainHead'>Fill Your Details</h1>
        <form onSubmit={handleLogin}>
          <div className="loginsignup-fields">
            <input name="username" type="text" placeholder="Your Name" required />
            <input name="email" type="email" placeholder="Email Address" required />
          </div>
          <button type="submit">Start</button>
          <div className="loginsignup-agree">
            <input type="checkbox" id="agree" required />
            <p>By continuing, I agree to the terms of use & privacy policy.</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginSignup;
