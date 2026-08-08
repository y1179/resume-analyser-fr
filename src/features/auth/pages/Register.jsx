
// export default Register
// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { useAuth } from "../hooks/useAuth";
// import {
//   Main,
//   FormContainer,
//   Title,
//   InputGroup,
//   Label,
//   Input,
//   Button, FullPageLoader, LoaderSpinner,
//   FooterText,
//   StyledLink,
// } from "../auth.form.js";

// const Register = () => {
//   const navigate = useNavigate();

//   const { loading, handleRegister } = useAuth(); // ✅ FIXED

//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await handleRegister({ username, email, password });
//     navigate("/");
//   };

//   if (loading) {
//     return (
//          <FullPageLoader>
//              <LoaderSpinner />
//            </FullPageLoader>
//     );
//   }

//   return (
//     <Main>
//       <FormContainer>
//         <Title>Create Account 🚀</Title>

//         <form onSubmit={handleSubmit}>
//           <InputGroup>
//             <Label>Username</Label>
//             <Input
//               type="text"
//               placeholder="Enter username"
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//           </InputGroup>

//           <InputGroup>
//             <Label>Email</Label>
//             <Input
//               type="email"
//               placeholder="Enter email"
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </InputGroup>

//           <InputGroup>
//             <Label>Password</Label>
//             <Input
//               type="password"
//               placeholder="Enter password"
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </InputGroup>

//           <Button type="submit">
//             {loading ? "Creating..." : "Register"}
//           </Button>
//         </form>

//         <FooterText>
//           Already have an account?{" "}
//           <Link to="/login" style={{ textDecoration: "none" }}>
//             <StyledLink>Login</StyledLink>
//           </Link>
//         </FooterText>
//       </FormContainer>
//     </Main>
//   );
// };

// export default Register;



import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Sparkles, ArrowRight } from "lucide-react";
import { useAuth } from "../hooks/useAuth";

import {
  Main,
  FormContainer,
  Logo,
  LogoIcon,
  Title,
  Subtitle,
  InputGroup,
  Label,
  InputWrapper,
  Input,
  Button,
  Divider,
  FooterText,
  Terms,
  Checkbox,
  TermsText,
  AuthError,
} from "../auth.form.js";

const Register = () => {
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const { loading, handleRegister } = useAuth();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSubmit = async (e) => {
  e.preventDefault();

  setError("");

  if (!agreeTerms) {
    setError("Please agree to the Terms & Conditions.");
    return;
  }

  const result = await handleRegister({
    username,
    email,
    password,
  });

  if (result.success) {
    navigate("/");
  } else {
    setError(result.message);
  }
};

  return (
    <Main>
      <FormContainer>

        {/* Logo */}
        <Logo>
          <LogoIcon>
            <Sparkles size={20} />
          </LogoIcon>

          <span>
            Interview<span>AI</span>
          </span>
        </Logo>

        {/* Heading */}
        <Title>Create your account 🚀</Title>

        <Subtitle>
          Join InterviewAI and start preparing
          for your next interview with AI.
        </Subtitle>
            {error && (
                  
              <AuthError>
              {error}
            </AuthError>
            )}
        <form onSubmit={handleSubmit}>

          {/* Username */}
          <InputGroup>
            <Label htmlFor="username">
              Username
            </Label>

            <InputWrapper>
              <Input
                id="username"
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) =>
                  setUsername(e.target.value)
                }
                autoComplete="username"
                required
              />
            </InputWrapper>
          </InputGroup>

          {/* Email */}
          <InputGroup>
            <Label htmlFor="email">
              Email address
            </Label>

            <InputWrapper>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                autoComplete="email"
                required
              />
            </InputWrapper>
          </InputGroup>

          {/* Password */}
          <InputGroup>
            <Label htmlFor="password">
              Password
            </Label>

            <InputWrapper>
              <Input
                id="password"
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                placeholder="Create a strong password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                autoComplete="new-password"
                required
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                aria-label={
                  showPassword
                    ? "Hide password"
                    : "Show password"
                }
              >
                {showPassword ? (
                  <EyeOff size={19} />
                ) : (
                  <Eye size={19} />
                )}
              </button>
            </InputWrapper>
          </InputGroup>

          {/* Terms */}
          <Terms>
            <Checkbox
              type="checkbox"
              id="terms"
              checked={agreeTerms}
              onChange={(e) =>
                setAgreeTerms(e.target.checked)
              }
            />

            <TermsText htmlFor="terms">
              I agree to the{" "}
              <Link to="/terms" className="auth-link">
                Terms & Conditions
              </Link>{" "}
              and Privacy Policy.
            </TermsText>
          </Terms>

          {/* Register button */}
          <Button
            type="submit"
            disabled={loading || !agreeTerms}
          >
            {loading ? (
              <>
                <span className="button-loader" />
                Creating account...
              </>
            ) : (
              <>
                Create Account
                <ArrowRight size={18} />
              </>
            )}
          </Button>

        </form>

        {/* Divider */}
        <Divider>
          <span>OR</span>
        </Divider>

        {/* Login */}
        <FooterText>
          Already have an account?{" "}
          <Link to="/login" className="auth-link">
            Login
          </Link>
        </FooterText>

      </FormContainer>
    </Main>
  );
};

export default Register;

