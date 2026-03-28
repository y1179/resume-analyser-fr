// main{
//     min-height:100vh;
//     width:100vw;
//     display:flex;
//     flex-direction:column;
//     background-color:rgb(137, 107, 107) ;
//     justify-content:center;
//     align-items:center;
//  h1{
//     color:black;
//  }

//     .form-container{
//         background-color:rgb(255, 255, 255);
//         padding:2rem;
//         border-radius:0.7rem;
//         display:flex;
//         flex-direction:column;
//         gap:1rem;
//         min-width:400px;
//     }
//     form{
//         display:flex;
//         flex-direction:column;
//         gap:0.3rem;
//     }
//     .input-group{
//         display:flex;
//         flex-direction:column;
//         gap:0.75rem;
//     }
//         input{
//             border:none;
//             outline:none;
//             padding-inline:1rem;
//             padding-block:0.7rem;
//             border-radius:0.7rem;        }
//         }
//         .button{
//             border:none;
//             outline:none;
//             margin-top: 0.7rem;
//             padding-inline:1rem;
//             padding-block:0.7rem;
//             border-radius:0.7rem;
//             background-color: #007bff;
//             color: rgb(250, 247, 247);
//             cursor: pointer;
//         }
        
import { styled, keyframes } from "@stitches/react";

export const Main = styled("main", {
  minHeight: "100vh",
  width: "100vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "linear-gradient(135deg, #1e293b, #0f172a)",
});

export const FormContainer = styled("div", {
  backgroundColor: "#fff",
  padding: "2.5rem",
  borderRadius: "1rem",
  width: "380px",
  boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
});

export const Title = styled("h1", {
  textAlign: "center",
  fontSize: "1.8rem",
  fontWeight: "600",
  color: "#333",
});

export const InputGroup = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "0.4rem",
});

export const Label = styled("label", {
  fontSize: "0.9rem",
  color: "#555",
});

export const Input = styled("input", {
  padding: "0.8rem 1rem",
  borderRadius: "0.6rem",
  border: "1px solid #ddd",
  outline: "none",
  fontSize: "0.95rem",
  transition: "all 0.2s ease",

  "&:focus": {
    borderColor: "#667eea",
    boxShadow: "0 0 0 2px rgba(102,126,234,0.2)",
  },
});

// export const Button = styled("button", {
//   display: "block",
//    margin: "0.8rem auto 0 auto",
//   //marginTop: "0.8rem",
//   padding: "0.78rem  1.6rem",
//   borderRadius: "0.6rem",
//   border: "none",
//   background: "linear-gradient(135deg, #667eea, #764ba2)",
//   color: "white",
//   fontWeight: "600",
//   fontSize: "1.23rem",
//   cursor: "pointer",
//   transition: "all 0.2s ease",

//   "&:hover": {
//     transform: "translateY(-1px)",
//     boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
//   },
// });


const spin = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

export const Button = styled("button", {
  width: "100%",
  marginTop: "0.8rem",
  padding: "0.9rem",
  borderRadius: "0.6rem",
  border: "none",
  background: "linear-gradient(135deg, #667eea, #764ba2)",
  color: "white",
  fontWeight: "600",
  fontSize: "1rem",
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.5rem",

  "&:disabled": {
    opacity: 0.7,
    cursor: "not-allowed",
  },
});



export const FullPageLoader = styled("div", {
  height: "100vh",
  width: "100vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "linear-gradient(135deg, #667eea, #764ba2)",
});

export const LoaderSpinner = styled("div", {
  width: "40px",
  height: "40px",
  border: "4px solid white",
  borderTop: "4px solid transparent",
  borderRadius: "50%",
  animation: `${spin} 0.8s linear infinite`,
});

export const FooterText = styled("p", {
  textAlign: "center",
  fontSize: "0.9rem",
  color: "#555",
});

export const StyledLink = styled("span", {
  color: "#667eea",
  fontWeight: "500",
  cursor: "pointer",

  "&:hover": {
    textDecoration: "underline",
  },
});