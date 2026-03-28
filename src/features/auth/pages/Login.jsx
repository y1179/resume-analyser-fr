// import React from 'react'
// import { useNavigate ,Link } from 'react-router';
// import "../auth.form.scss";
// import { useState } from 'react';
// import { useAuth } from '../hooks/useAuth';

// const Login = () => {
//   const { loading, handleLogin } = useAuth();
  
//   const navigate = useNavigate();


//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await handleLogin({ email, password });
//     navigate("/")
//   }
//    if(loading){
//     return <p>Loading...</p>
//    }
//   return (
//     <main>
//       <div className="form-container">
//         <h1>Login</h1>
//         <form onSubmit={handleSubmit}>
//           <div className="input-group">
//             <label htmlFor='email'>Email</label>
//             <input 
//                onChange={(e)=>{
//                  setEmail(e.target.value)
//                }}
//               type='email' 
//               id='email' 
//               name='email' 
//               placeholder="enter your email" 
//             />
//           </div>

//           <div className="input-group">
//             <label htmlFor='password'>Password</label>
//             <input 
//                onChange={(e)=>{
//                  setPassword(e.target.value)
//                }}
//               type='password' 
//               id='password' 
//               name='password' 
//               placeholder="enter your password" 
//             />
//           </div>

//           <button className='button primary-button'>
//             LogIn
//           </button>
//         </form>
//       </div>
//         <p>Don't have an account?<Link to={"/Register"}>Register</Link></p>
//     </main>
//   );
// };

// export default Login;

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import {
  Main,
  FormContainer,
  Title,
  InputGroup,
  Label,
  Input,
  Button,
  FullPageLoader, LoaderSpinner,
  FooterText,
  StyledLink,
} from "../auth.form.js";

const Login = () => {
  const { loading, handleLogin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleLogin({ email, password });
    navigate("/");
  };

  if (loading) {
    return <FullPageLoader>
      <LoaderSpinner />
    </FullPageLoader>;
  }

  return (
    <Main>
      <FormContainer>
        <Title>Welcome Back 👋</Title>

        <form onSubmit={handleSubmit}>
          <InputGroup>
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </InputGroup>

          <InputGroup>
            <Label>Password</Label>
            <Input
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </InputGroup>

          <Button type="submit">
            {loading ? "Logging in..." : "Login"}
          </Button>
        
 </form>

        <FooterText>
          Don't have an account?{" "}
          <Link to="/Register" style={{ textDecoration: "none" }}>
            <StyledLink>Register</StyledLink>
          </Link>
        </FooterText>
      </FormContainer>
    </Main>
  );
};

export default Login;