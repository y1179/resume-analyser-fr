
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
// import { useContext } from "react";
// import { AuthContext } from "../auth.context";
// import { login, register, logout, getMe } from "../services/auth.api";

// export const useAuth = () => {
//   const { user, setUser, loading, setLoading } = useContext(AuthContext);

//   // =========================
//   // LOGIN
//   // =========================
//   const handleLogin = async ({ email, password }) => {
//     setLoading(true);
//     try {
//       const data = await login({ email, password });
//       setUser(data.user);
//       return { success: true, message: "Login successful" };
//     } catch (err) {
//       return {
//         success: false,
//         message: err.response?.data?.message || "Login failed. Please check your credentials.",
//       };
//     } finally {
//       setLoading(false);
//     }
//   };

//   // =========================
//   // REGISTER
//   // =========================
//   const handleRegister = async ({ username, email, password }) => {
//     setLoading(true);
//     try {
//       const data = await register({ username, email, password });
//       setUser(data.user);
//       return { success: true, message: "" };
//     } catch (err) {
//       return {
//         success: false,
//         message: err.response?.data?.message || "Unable to create your account. Please try again.",
//       };
//     } finally {
//       setLoading(false);
//     }
//   };

//   // =========================
//   // LOGOUT
//   // =========================
//   const handleLogout = async () => {
//     setLoading(true);
//     try {
//       await logout();
//       setUser(null);
//       return { success: true, message: "" };
//     } catch (err) {
//       return {
//         success: false,
//         message: err.response?.data?.message || "Logout failed. Please try again.",
//       };
//     } finally {
//       setLoading(false);
//     }
//   };

//   return { user, loading, handleLogin, handleRegister, handleLogout };
// };

// import { useContext } from "react";
// import { AuthContext } from "../auth.context";
// import {
//     login,
//     register,
//     logout,
//     getMe,
// } from "../services/auth.api";

// export const useAuth = () => {
//     const {
//         user,
//         setUser,
//         loading,
//         setLoading,
//     } = useContext(AuthContext);

//     // =====================================================
//     // LOGIN
//     // =====================================================

//     const handleLogin = async ({ email, password }) => {
//         setLoading(true);

//         try {
//             const data = await login({
//                 email,
//                 password,
//             });

//             console.log("LOGIN RESPONSE:", data);

//             // -------------------------------------------------
//             // Get JWT token from backend response
//             // -------------------------------------------------

//             const token =
//                 data?.token ||
//                 data?.accessToken ||
//                 data?.data?.token ||
//                 data?.data?.accessToken;

//             if (!token) {
//                 console.error(
//                     "LOGIN RESPONSE DOES NOT CONTAIN TOKEN:",
//                     data
//                 );

//                 throw new Error(
//                     "Login successful, but authentication token was not received."
//                 );
//             }

//             // -------------------------------------------------
//             // IMPORTANT:
//             // Store token using the exact key expected by
//             // useInterview.js and other protected requests.
//             // -------------------------------------------------

//             localStorage.setItem("token", token);

//             console.log(
//                 "AUTH TOKEN STORED:",
//                 !!localStorage.getItem("token")
//             );

//             // -------------------------------------------------
//             // Store user
//             // -------------------------------------------------

//             if (data?.user) {
//                 setUser(data.user);
//             } else if (data?.data?.user) {
//                 setUser(data.data.user);
//             }

//             return {
//                 success: true,
//                 message: "Login successful",
//             };

//         } catch (err) {

//             console.error(
//                 "LOGIN ERROR:",
//                 err.response?.data || err
//             );

//             return {
//                 success: false,
//                 message:
//                     err.response?.data?.message ||
//                     err.message ||
//                     "Login failed. Please check your credentials.",
//             };

//         } finally {
//             setLoading(false);
//         }
//     };


//     // =====================================================
//     // REGISTER
//     // =====================================================

//     const handleRegister = async ({
//         username,
//         email,
//         password,
//     }) => {

//         setLoading(true);

//         try {

//             const data = await register({
//                 username,
//                 email,
//                 password,
//             });

//             console.log(
//                 "REGISTER RESPONSE:",
//                 data
//             );

//             // -------------------------------------------------
//             // Some backends return a token immediately after
//             // registration. Store it if available.
//             // -------------------------------------------------

//             const token =
//                 data?.token ||
//                 data?.accessToken ||
//                 data?.data?.token ||
//                 data?.data?.accessToken;

//             if (token) {
//                 localStorage.setItem(
//                     "token",
//                     token
//                 );
//             }

//             // -------------------------------------------------
//             // Store user
//             // -------------------------------------------------

//             if (data?.user) {
//                 setUser(data.user);
//             } else if (data?.data?.user) {
//                 setUser(data.data.user);
//             }

//             return {
//                 success: true,
//                 message: "Registration successful",
//             };

//         } catch (err) {

//             console.error(
//                 "REGISTER ERROR:",
//                 err.response?.data || err
//             );

//             return {
//                 success: false,
//                 message:
//                     err.response?.data?.message ||
//                     err.message ||
//                     "Unable to create your account. Please try again.",
//             };

//         } finally {
//             setLoading(false);
//         }
//     };


//     // =====================================================
//     // LOGOUT
//     // =====================================================

//     const handleLogout = async () => {

//         setLoading(true);

//         try {

//             const token =
//                 localStorage.getItem("token");

//             // -------------------------------------------------
//             // Call backend logout if your API requires it
//             // -------------------------------------------------

//             await logout();

//             // -------------------------------------------------
//             // Remove authentication data
//             // -------------------------------------------------

//             localStorage.removeItem("token");

//             setUser(null);

//             return {
//                 success: true,
//                 message: "Logout successful",
//             };

//         } catch (err) {

//             console.error(
//                 "LOGOUT ERROR:",
//                 err.response?.data || err
//             );

//             // Even if backend logout fails,
//             // remove local authentication data.

//             localStorage.removeItem("token");

//             setUser(null);

//             return {
//                 success: false,
//                 message:
//                     err.response?.data?.message ||
//                     err.message ||
//                     "Logout failed. Please try again.",
//             };

//         } finally {
//             setLoading(false);
//         }
//     };


//     // =====================================================
//     // RETURN
//     // =====================================================

//     return {
//         user,
//         loading,
//         handleLogin,
//         handleRegister,
//         handleLogout,
//     };
// };



import { useContext } from "react";
import { AuthContext } from "../auth.context";
import {
    login,
    register,
    logout,
    getMe,
} from "../services/auth.api";

export const useAuth = () => {
    const {
        user,
        setUser,
        loading,
        setLoading,
    } = useContext(AuthContext);

    // =====================================================
    // LOGIN
    // =====================================================

    const handleLogin = async ({ email, password }) => {
        setLoading(true);

        try {
            const data = await login({
                email,
                password,
            });

            console.log("LOGIN RESPONSE:", data);

            if (!data?.user) {
                throw new Error(
                    "Login succeeded but user information was not returned."
                );
            }

            // JWT is stored by backend in HTTP-only cookie.
            // We intentionally DO NOT use localStorage here.
            setUser(data.user);

            return {
                success: true,
                message: "Login successful",
            };

        } catch (err) {
            console.error(
                "LOGIN ERROR:",
                err.response?.data || err
            );

            return {
                success: false,
                message:
                    err.response?.data?.message ||
                    err.message ||
                    "Login failed. Please check your credentials.",
            };

        } finally {
            setLoading(false);
        }
    };


    // =====================================================
    // REGISTER
    // =====================================================

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

            console.log("REGISTER RESPONSE:", data);

            if (!data?.user) {
                throw new Error(
                    "Registration succeeded but user information was not returned."
                );
            }

            // Backend sets HTTP-only cookie automatically.
            setUser(data.user);

            return {
                success: true,
                message: "Registration successful",
            };

        } catch (err) {
            console.error(
                "REGISTER ERROR:",
                err.response?.data || err
            );

            return {
                success: false,
                message:
                    err.response?.data?.message ||
                    err.message ||
                    "Unable to create your account. Please try again.",
            };

        } finally {
            setLoading(false);
        }
    };


    // =====================================================
    // LOGOUT
    // =====================================================

    const handleLogout = async () => {
        setLoading(true);

        try {
            await logout();

            setUser(null);

            return {
                success: true,
                message: "Logout successful",
            };

        } catch (err) {
            console.error(
                "LOGOUT ERROR:",
                err.response?.data || err
            );

            // Clear local user state even if backend logout
            // request fails.
            setUser(null);

            return {
                success: false,
                message:
                    err.response?.data?.message ||
                    err.message ||
                    "Logout failed. Please try again.",
            };

        } finally {
            setLoading(false);
        }
    };


    // =====================================================
    // RETURN
    // =====================================================

    return {
        user,
        loading,
        handleLogin,
        handleRegister,
        handleLogout,
    };
};