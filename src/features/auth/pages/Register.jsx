
// import {useNavigate} from 'react-router';
// import { Link } from 'react-router';
// import { useState } from 'react';
// import { useAuth } from '../hooks/useAuth';

// const Register = () => {


//   const navigate = useNavigate();
//   const [username,setUsername]=useState("")
//   const [email,setEmail]=useState('')
//   const[password ,setPassword]=useState('')

//   const [loading,handleRegister] = useAuth();
//   const handleSubmit=async (e)=>{
//     e.preventDefault()
//     await handleRegister({username,email,password})
//     navigate("/")
//   }

//   if(loading){
//     return(<main><h1>Registering...</h1></main>)
//   }
//   return (
//     <main>
//       <div className="form-container">
//         <h1>Register</h1>
//         <form onSubmit={handleSubmit}>
//            <div className="input-group">
//             <label htmlFor='username'>Username</label>
//             <input 
//              onChange={(e)=>{
//               setUsername(e.target.value)
//              }}
//               type='text' 
//               id='username' 
//               name='username' 
//               placeholder="enter your username" 
//             />
//           </div>
//           <div className="input-group">
//             <label htmlFor='email'>Email</label>
//             <input 
//               onChange={(e)=>{
//               setEmail(e.target.value)
//              }}
//               type='email' 
//               id='email' 
//               name='email' 
//               placeholder="enter your email" 
//             />
//           </div>

//           <div className="input-group">
//             <label htmlFor='password'>Password</label>
//             <input 
//             onChange={(e)=>{
//               setPassword(e.target.value)
//              }}
//               type='password' 
//               id='password' 
//               name='password' 
//               placeholder="enter your password" 
//             />
//           </div>

//           <button className='button primary-button'>
//             Register
//           </button>
//         </form>
//         </div>
//         <p>Already have an account?<Link to={"/login"}>Login</Link></p>
      
//     </main>
//   )
// }

// export default Register
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
  Button, FullPageLoader, LoaderSpinner,
  FooterText,
  StyledLink,
} from "../auth.form.js";

const Register = () => {
  const navigate = useNavigate();

  const { loading, handleRegister } = useAuth(); // ✅ FIXED

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleRegister({ username, email, password });
    navigate("/");
  };

  if (loading) {
    return (
         <FullPageLoader>
             <LoaderSpinner />
           </FullPageLoader>
    );
  }

  return (
    <Main>
      <FormContainer>
        <Title>Create Account 🚀</Title>

        <form onSubmit={handleSubmit}>
          <InputGroup>
            <Label>Username</Label>
            <Input
              type="text"
              placeholder="Enter username"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </InputGroup>

          <InputGroup>
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </InputGroup>

          <InputGroup>
            <Label>Password</Label>
            <Input
              type="password"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </InputGroup>

          <Button type="submit">
            {loading ? "Creating..." : "Register"}
          </Button>
        </form>

        <FooterText>
          Already have an account?{" "}
          <Link to="/login" style={{ textDecoration: "none" }}>
            <StyledLink>Login</StyledLink>
          </Link>
        </FooterText>
      </FormContainer>
    </Main>
  );
};

export default Register;