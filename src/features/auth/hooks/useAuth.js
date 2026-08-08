
// import { useContext, useEffect } from "react";
// import { AuthContext } from "../auth.context";
// import { login, register, logout, getMe } from "../services/auth.api";

// export const useAuth = () => {

//     const context = useContext(AuthContext)
//     const { user, setUser, loading, setLoading } = context


//     const handleLogin = async ({ email, password }) => {
//         setLoading(true)
//         try {
//             const data = await login({ email, password })
//             setUser(data.user)
//             return true   // ✅ IMPORTANT
//         } catch (err) {
//             console.log("Login error:", err.response?.data?.message)
//             return false  // ❌ login failed
//         } finally {
//             setLoading(false)
//         }
//     }

//     const handleRegister = async ({ username, email, password }) => {
//         setLoading(true)
//         try {
//             const data = await register({ username, email, password })
//             setUser(data.user)
//             return true   // ✅
//         } catch (err) {
//             console.log("Register error:", err.response?.data?.message)
//             return false
//         } finally {
//             setLoading(false)
//         }
//     }

//     const handleLogout = async () => {
//         setLoading(true)
//         try {
//             await logout()
//             setUser(null)
//         } catch (err) {
//             console.log("Logout error:", err)
//         } finally {
//             setLoading(false)
//         }
//     }

//     useEffect(() => {

//         const getAndSetUser = async () => {
//             try {
//                 const data = await getMe()
//                 setUser(data.user)
//             } catch (err) {
//                 setUser(null) // ✅ important
//             } finally {
//                 setLoading(false)
//             }
//         }

//         getAndSetUser()

//     }, [])

//     return { user, loading, handleRegister, handleLogin, handleLogout }
// }


import { useContext, useEffect } from "react";
import { AuthContext } from "../auth.context";
import {
  login,
  register,
  logout,
  getMe,
} from "../services/auth.api";

export const useAuth = () => {
  const context = useContext(AuthContext);

  const {
    user,
    setUser,
    loading,
    setLoading,
  } = context;

  // =========================
  // LOGIN
  // =========================
  const handleLogin = async ({ email, password }) => {
  setLoading(true);

  try {
    const data = await login({ email, password });

    setUser(data.user);

    return {
      success: true,
      message: "Login successful",
    };
  } catch (err) {
    console.log(
      "Login error:",
      err.response?.data?.message
    );

    return {
      success: false,
      message:
        err.response?.data?.message ||
        "Login failed. Please check your credentials.",
    };
  } finally {
    setLoading(false);
  }
};

  // =========================
  // REGISTER
  // =========================
  const handleRegister = async ({
    username,
    email,
    password,
  }) => {
    setLoading(true);

    try {
      const data = await register({
        username,
        email,
        password,
      });

      setUser(data.user);

      return {
        success: true,
        message: "",
      };
    } catch (err) {
      const message =
        err.response?.data?.message ||
        "Unable to create your account. Please try again.";

      console.log("Register error:", message);

      return {
        success: false,
        message,
      };
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // LOGOUT
  // =========================
  const handleLogout = async () => {
    setLoading(true);

    try {
      await logout();

      setUser(null);

      return {
        success: true,
        message: "",
      };
    } catch (err) {
      const message =
        err.response?.data?.message ||
        "Logout failed. Please try again.";

      console.log("Logout error:", message);

      return {
        success: false,
        message,
      };
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // GET CURRENT USER
  // =========================
  useEffect(() => {
    const getAndSetUser = async () => {
      try {
        const data = await getMe();

        setUser(data.user);
      } catch (err) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    getAndSetUser();
  }, [setUser, setLoading]);

  return {
    user,
    loading,
    handleRegister,
    handleLogin,
    handleLogout,
  };
};

