import styled from "styled-components";
import { Link } from "react-router-dom";

export const Main = styled.main`
  min-height: 100vh;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 32px 20px;

  background:
    radial-gradient(
      circle at 10% 10%,
      rgba(99, 102, 241, 0.14),
      transparent 30%
    ),
    radial-gradient(
      circle at 90% 90%,
      rgba(139, 92, 246, 0.12),
      transparent 30%
    ),
    #080b14;

  box-sizing: border-box;
`;

export const FormContainer = styled.div`
  width: 100%;
  max-width: 430px;
  padding: 40px;

  background: #0d1120;

  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 24px;

  box-shadow:
    0 20px 50px rgba(0, 0, 0, 0.35),
    0 4px 12px rgba(0, 0, 0, 0.2);

  box-sizing: border-box;

  @media (max-width: 500px) {
    padding: 30px 22px;
    border-radius: 20px;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 9px;

  margin-bottom: 30px;

  font-size: 22px;
  font-weight: 800;
  letter-spacing: -0.5px;

  color: #94a3b8;
  span span {
    color: #6366f1;
  }
`;

export const LogoIcon = styled.div`
  width: 38px;
  height: 38px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 11px;

  background: linear-gradient(
    135deg,
    #6366f1,
    #8b5cf6
  );
  color: white;

  box-shadow:
    0 8px 20px rgba(99, 102, 241, 0.25);
`;
export const Title = styled.h1`
  margin: 0;
  text-align: center;

  font-size: 30px;
  line-height: 1.2;
  font-weight: 750;
  letter-spacing: -0.8px;

  color: #f1f5f9;

  @media (max-width: 500px) {
    font-size: 26px;
  }
`;
export const Subtitle = styled.p`
  max-width: 350px;
  margin: 12px auto 30px;

  text-align: center;

  font-size: 14px;
  line-height: 1.6;

  color: #94a3b8;
   @media (max-width: 500px) {
    font-size: 6px;
  }
`;



export const InputGroup = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;

  margin-bottom: 8px;

  font-size: 13px;
  font-weight: 650;

  color: #334155;
`;

export const InputWrapper = styled.div`
  position: relative;

  .password-toggle {
    position: absolute;
    right: 13px;
    top: 50%;
    transform: translateY(-50%);

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 5px;

    border: none;
    background: transparent;

    color: #94a3b8;
    cursor: pointer;

    transition: color 0.2s ease;

    &:hover {
      color: #475569;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 48px;

  padding: 0 14px;

  box-sizing: border-box;

  border: 1px solid #e2e8f0;
  border-radius: 12px;

  background: #ffffff;

  color: #0f172a;

  font-size: 14px;

  outline: none;

  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    background 0.2s ease;

  &::placeholder {
    color: #a1aab8;
  }

  &:hover {
    border-color: #cbd5e1;
  }

  &:focus {
    border-color: #6366f1;

    box-shadow:
      0 0 0 3px rgba(99, 102, 241, 0.12);

    background: #ffffff;
  }

  &[type="password"] {
    padding-right: 48px;
  }

  &[type="text"] {
    padding-right: 48px;
  }
`;

export const Terms = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 9px;

  margin: 4px 0 22px;
`;

export const Checkbox = styled.input`
  width: 16px;
  height: 16px;

  margin-top: 2px;

  accent-color: #6366f1;

  cursor: pointer;

  flex-shrink: 0;
`;

export const TermsText = styled.label`
  font-size: 12px;
  line-height: 1.5;

  color: #64748b;

  cursor: pointer;
`;


export const Button = styled.button`
  width: 100%;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 9px;

  border: none;
  border-radius: 12px;

  background: linear-gradient(
    135deg,
    #6366f1,
    #7c3aed
  );

  color: white;

  font-size: 14px;
  font-weight: 650;

  cursor: pointer;

  box-shadow:
    0 8px 20px rgba(99, 102, 241, 0.22);

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    opacity 0.2s ease;

  &:hover:not(:disabled) {
    transform: translateY(-1px);

    box-shadow:
      0 12px 25px rgba(99, 102, 241, 0.28);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
    box-shadow: none;
  }

  .button-loader {
    width: 17px;
    height: 17px;

    border: 2px solid rgba(255, 255, 255, 0.4);
    border-top-color: white;

    border-radius: 50%;

    animation: spin 0.7s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  margin: 26px 0 20px;

  color: #cbd5e1;

  &::before,
  &::after {
    content: "";

    height: 1px;
    flex: 1;

    background: #e2e8f0;
  }

  span {
    font-size: 10px;
    font-weight: 650;
    color: #94a3b8;
  }
`;

export const DemoText = styled.p`
  margin: 0 0 5px;

  text-align: center;

  font-size: 13px;
  color: #64748b;
`;
export const FooterText = styled.div`
  text-align: center;
  font-size: 14px;

  .auth-link {
    color: #94a3b8;
    font-weight: 650;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: #4f47ee;
      text-decoration: underline;
    }
  }
`;

export const FullPageLoader = styled.div`
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #f8fafc;
`;

export const LoaderSpinner = styled.div`
  width: 35px;
  height: 35px;

  border: 3px solid #e2e8f0;
  border-top-color: #6366f1;

  border-radius: 50%;

  animation: spin 0.7s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;


export const AuthError = styled.div`
  margin-bottom: 20px;
  padding: 12px 14px;

  border: 1px solid #fecaca;
  border-radius: 10px;

  background: #fef2f2;
  color: #dc2626;

  font-size: 13px;
  line-height: 1.4;
`;

