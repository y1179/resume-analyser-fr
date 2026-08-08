
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
//   Button,
//   FullPageLoader, LoaderSpinner,
//   FooterText,
//   StyledLink,
// } from "../auth.form.js";

// const Login = () => {
//   const { loading, handleLogin } = useAuth();
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await handleLogin({ email, password });
//     navigate("/");
//   };

//   if (loading) {
//     return <FullPageLoader>
//       <LoaderSpinner />
//     </FullPageLoader>;
//   }

//   return (
//     <Main>
//       <FormContainer>
//         <Title>Welcome Back 👋</Title>

//         <form onSubmit={handleSubmit}>
//           <InputGroup>
//             <Label>Email</Label>
//             <Input
//               type="email"
//               placeholder="Enter your email"
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </InputGroup>

//           <InputGroup>
//             <Label>Password</Label>
//             <Input
//               type="password"
//               placeholder="Enter your password"
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </InputGroup>
//           <input type="checkbox">Agree to terms and condition</input>
//           <Button type="submit">
//             {loading ? "Logging in..." : "Login"}
//           </Button>
        
//  </form>

//         <FooterText>
//           Don't have an account?{" "}
//           <Link to="/Register" style={{ textDecoration: "none" }}>
//             <StyledLink>Register</StyledLink>
//           </Link>
//         </FooterText>
//       </FormContainer>
//     </Main>
//   );
// };

// export default Login;


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, ArrowRight } from "lucide-react";
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
  DemoText,
  AuthError,
} from "../auth.form.js";

const Login = () => {
  const navigate = useNavigate();
  const { loading, handleLogin } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!agreeTerms) {
      setError("Please agree to the Terms & Conditions.");
      return;
    }

    const result = await handleLogin({
      email,
      password,
    });

    if (result?.success) {
      navigate("/");
    } else {
      setError(
        result?.message || "Invalid email or password."
      );
    }
  };

  return (
    <Main>
      <FormContainer>

        {/* Logo */}
        <Logo>
          <LogoIcon>✦</LogoIcon>

          <span>
            Resume<span>AI</span>
          </span>
        </Logo>

        {/* Heading */}
        <Title>Welcome back 👋</Title>

        <Subtitle>
          Sign in to continue analyzing your resume
          and preparing for your next interview.
        </Subtitle>

        {/* Error */}
        {error && (
          <AuthError>
            {error}
          </AuthError>
        )}

        <form onSubmit={handleSubmit}>

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
                placeholder="Enter your password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                autoComplete="current-password"
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
              <Link
                to="/terms"
                className="auth-link"
              >
                Terms & Conditions
              </Link>{" "}
              and Privacy Policy.
            </TermsText>
          </Terms>

          {/* Login button */}
          <Button
            type="submit"
            disabled={loading || !agreeTerms}
          >
            {loading ? (
              <>
                <span className="button-loader" />
                Logging in...
              
              </>
            ) : (
              <>
                Login
                <ArrowRight size={18} />
              </>
            )}
          </Button>

        </form>

        {/* Divider */}
        <Divider>
          <span>OR</span>
        </Divider>

        {/* Register */}
        <DemoText>
          Don't have an account yet?
        </DemoText>

        <FooterText>
          <Link
            to="/register"
            className="auth-link"
          >
            Create an account
          </Link>
        </FooterText>

      </FormContainer>
    </Main>
  );
};

export default Login;