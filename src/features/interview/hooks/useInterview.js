// import { getAllInterviewReports, generateInterviewReport, getInterviewReportById, generateResumePdf } from "../services/interview.api"
// import { useContext, useEffect } from "react"
// import { InterviewContext } from "../interview.context"
// import { useParams } from "react-router"


// export const useInterview = () => {

//     const context = useContext(InterviewContext)
//     const { interviewId } = useParams()

//     if (!context) {
//         throw new Error("useInterview must be used within an InterviewProvider")
//     }

//     const { loading, setLoading, report, setReport, reports, setReports } = context

//     const generateReport = async ({ jobDescription, selfDescription, resumeFile }) => {
//         setLoading(true)
//         let response = null
//         try {
//             response = await generateInterviewReport({ jobDescription, selfDescription, resumeFile })
//             setReport(response.interviewReport)
//         } catch (error) {
//             console.log(error)
//         } finally {
//             setLoading(false)
//         }

//         return response.interviewReport
//     }

//     const getReportById = async (interviewId) => {
//         setLoading(true)
//         let response = null
//         try {
//             response = await getInterviewReportById(interviewId)
//             setReport(response.interviewReport)
//         } catch (error) {
//             console.log(error)
//         } finally {
//             setLoading(false)
//         }
//         return response.interviewReport
//     }

//     const getReports = async () => {
//         setLoading(true)
//         let response = null
//         try {
//             response = await getAllInterviewReports()
//             setReports(response.interviewReports)
//         } catch (error) {
//             console.log(error)
//         } finally {
//             setLoading(false)
//         }

//         return response.interviewReports
//     }

//     const getResumePdf = async (interviewReportId) => {
//         setLoading(true)
//         let response = null
//         try {
//             response = await generateResumePdf({ interviewReportId })
//             const url = window.URL.createObjectURL(new Blob([ response ], { type: "application/pdf" }))
//             const link = document.createElement("a")
//             link.href = url
//             link.setAttribute("download", `resume_${interviewReportId}.pdf`)
//             document.body.appendChild(link)
//             link.click()
//         }
//         catch (error) {
//             console.log(error)
//         } finally {
//             setLoading(false)
//         }
//     }

//     useEffect(() => {
//         if (interviewId) {
//             getReportById(interviewId)
//         } else {
//             getReports()
//         }
//     }, [ interviewId ])

//     return { loading, report, reports, generateReport, getReportById, getReports, getResumePdf }

// }


// import { 
//     getAllInterviewReports, 
//     generateInterviewReport, 
//     getInterviewReportById, 
//     generateResumePdf 
// } from "../services/interview.api"

// import { useContext, useEffect } from "react"
// import { InterviewContext } from "../interview.context"
// import { useParams } from "react-router"

// export const useInterview = () => {

//     const context = useContext(InterviewContext)
//     const { interviewId } = useParams()

//     if (!context) {
//         throw new Error("useInterview must be used within an InterviewProvider")
//     }

//     const { loading, setLoading, report, setReport, reports, setReports } = context

//     // ✅ GENERATE REPORT
//     const generateReport = async ({ jobDescription, selfDescription, resumeFile }) => {
//         setLoading(true)
//         try {
//             const response = await generateInterviewReport({ jobDescription, selfDescription, resumeFile })
//             setReport(response.interviewReport)
//             return response.interviewReport
//         } catch (error) {
//             console.log("Generate error:", error)
//             return null   // ✅ IMPORTANT
//         } finally {
//             setLoading(false)
//         }
//     }

//     // ✅ GET REPORT BY ID
//     const getReportById = async (id) => {
//         setLoading(true)
//         try {
//             const response = await getInterviewReportById(id)
//             setReport(response.interviewReport)
//             return response.interviewReport
//         } catch (error) {
//             console.log("Get report error:", error)
//             return null
//         } finally {
//             setLoading(false)
//         }
//     }

//     // ✅ GET ALL REPORTS
//     const getReports = async () => {
//         setLoading(true)
//         try {
//             const response = await getAllInterviewReports()
//             setReports(response.interviewReports)
//             return response.interviewReports
//         } catch (error) {
//             console.log("Get reports error:", error)
//             return []
//         } finally {
//             setLoading(false)
//         }
//     }

//     // ✅ DOWNLOAD PDF
//     const getResumePdf = async (interviewReportId) => {
//         setLoading(true)
//         try {
//             const response = await generateResumePdf({ interviewReportId })

//             const url = window.URL.createObjectURL(
//                 new Blob([response], { type: "application/pdf" })
//             )

//             const link = document.createElement("a")
//             link.href = url
//             link.setAttribute("download", `resume_${interviewReportId}.pdf`)
//             document.body.appendChild(link)
//             link.click()

//         } catch (error) {
//             console.log("PDF error:", error)
//         } finally {
//             setLoading(false)
//         }
//     }

//     // ✅ AUTO FETCH
//     useEffect(() => {
//         if (interviewId) {
//             getReportById(interviewId)
//         } else {
//             getReports()
//         }
//     }, [interviewId])

//     return { 
//         loading, 
//         report, 
//         reports, 
//         generateReport, 
//         getReportById, 
//         getReports, 
//         getResumePdf 
//     }
// }



// import { useState } from "react";
// import axios from "axios";

// const API_URL = import.meta.env.VITE_API_BASE_URL;

// export const useInterview = () => {
//     const [report, setReport] = useState(null);
//     const [loading, setLoading] = useState(false);

//     const getReportById = async (interviewId) => {
//         try {
//             setLoading(true);

//             const token = localStorage.getItem("token");

//             const response = await axios.get(
//                 `${API_URL}/api/interview/${interviewId}`,
//                 {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 }
//             );

//             console.log("FULL INTERVIEW API RESPONSE:", response.data);

//             const interviewReport =
//                 response.data?.interviewReport;

//             if (!interviewReport) {
//                 throw new Error("Interview report not found");
//             }

//             // Normalize ATS values
//             const normalizedReport = {
//                 ...interviewReport,

//                 matchScore: Number(
//                     interviewReport.matchScore || 0
//                 ),

//                 atsBreakdown: {
//                     skillsMatch: Number(
//                         interviewReport.atsBreakdown?.skillsMatch || 0
//                     ),

//                     experienceMatch: Number(
//                         interviewReport.atsBreakdown?.experienceMatch || 0
//                     ),

//                     keywordMatch: Number(
//                         interviewReport.atsBreakdown?.keywordMatch || 0
//                     ),

//                     educationMatch: Number(
//                         interviewReport.atsBreakdown?.educationMatch || 0
//                     ),
//                 },

//                 technicalQuestions:
//                     Array.isArray(interviewReport.technicalQuestions)
//                         ? interviewReport.technicalQuestions
//                         : [],

//                 behavioralQuestions:
//                     Array.isArray(interviewReport.behavioralQuestions)
//                         ? interviewReport.behavioralQuestions
//                         : [],

//                 skillGaps:
//                     Array.isArray(interviewReport.skillGaps)
//                         ? interviewReport.skillGaps
//                         : [],

//                 preparationPlan:
//                     Array.isArray(interviewReport.preparationPlan)
//                         ? interviewReport.preparationPlan
//                         : [],
//             };

//             console.log(
//                 "NORMALIZED INTERVIEW REPORT:",
//                 normalizedReport
//             );

//             setReport(normalizedReport);

//         } catch (error) {
//             console.error(
//                 "GET INTERVIEW REPORT ERROR:",
//                 error.response?.data || error
//             );

//             setReport(null);

//         } finally {
//             setLoading(false);
//         }
//     };


//     // =====================================================
//     // DOWNLOAD ATS RESUME PDF
//     // =====================================================

//     const getResumePdf = async (interviewReportId) => {
//         try {
//             if (!interviewReportId) {
//                 throw new Error("Interview report ID is missing");
//             }

//             console.log(
//                 "Downloading resume for:",
//                 interviewReportId
//             );

//             const token = localStorage.getItem("token");

//             const response = await axios.get(
//                 `${API_URL}/api/interview/${interviewReportId}/resume-pdf`,
//                 {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },

//                     // VERY IMPORTANT
//                     responseType: "blob",
//                 }
//             );

//             console.log(
//                 "PDF response:",
//                 response
//             );

//             const contentType =
//                 response.headers["content-type"];

//             if (
//                 !contentType ||
//                 !contentType.includes("application/pdf")
//             ) {
//                 // Backend probably returned JSON error
//                 const text = await response.data.text();

//                 console.error(
//                     "PDF API returned non-PDF:",
//                     text
//                 );

//                 throw new Error(
//                     "Server did not return a PDF."
//                 );
//             }

//             const blob = new Blob(
//                 [response.data],
//                 {
//                     type: "application/pdf",
//                 }
//             );

//             const url =
//                 window.URL.createObjectURL(blob);

//             const link =
//                 document.createElement("a");

//             link.href = url;

//             link.download =
//                 `ATS_Resume_${interviewReportId}.pdf`;

//             document.body.appendChild(link);

//             link.click();

//             link.remove();

//             window.URL.revokeObjectURL(url);

//         } catch (error) {

//             console.error(
//                 "DOWNLOAD PDF ERROR:",
//                 error.response?.data || error
//             );

//             alert(
//                 "Failed to generate resume PDF. Please try again."
//             );
//         }
//     };


//     return {
//         report,
//         loading,
//         getReportById,
//         getResumePdf,
//     };
// };



// import { useState } from "react";
// import axios from "axios";

// const API_URL = import.meta.env.VITE_API_BASE_URL;

// export const useInterview = () => {
//     const [report, setReport] = useState(null);
//     const [loading, setLoading] = useState(false);

//     // =====================================================
//     // GENERATE INTERVIEW REPORT
//     // =====================================================

//     const generateReport = async (formData) => {
//         try {
//             setLoading(true);

//             const token = localStorage.getItem("token");

//             if (!token) {
//                 throw new Error("Authentication token is missing. Please log in.");
//             }

//             if (!formData) {
//                 throw new Error("Form data is missing.");
//             }

//             console.log("Generating interview report...");

//             const response = await axios.post(
//                 `${API_URL}/api/interview/generate-report`,
//                 formData,
//                 {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                         // DO NOT manually set Content-Type.
//                         // Axios automatically sets multipart/form-data
//                         // with the correct boundary for FormData.
//                     },
//                     timeout: 120000,
//                 }
//             );

//             console.log(
//                 "GENERATE REPORT API RESPONSE:",
//                 response.data
//             );

//             const interviewReport =
//                 response.data?.interviewReport;

//             if (!interviewReport) {
//                 throw new Error(
//                     "Interview report was not returned by the server."
//                 );
//             }

//             // =================================================
//             // NORMALIZE REPORT
//             // =================================================

//             const normalizedReport = {
//                 ...interviewReport,

//                 matchScore: Number(
//                     interviewReport.matchScore ?? 0
//                 ),

//                 atsBreakdown: {
//                     skillsMatch: Number(
//                         interviewReport.atsBreakdown?.skillsMatch ?? 0
//                     ),

//                     experienceMatch: Number(
//                         interviewReport.atsBreakdown?.experienceMatch ?? 0
//                     ),

//                     keywordMatch: Number(
//                         interviewReport.atsBreakdown?.keywordMatch ?? 0
//                     ),

//                     educationMatch: Number(
//                         interviewReport.atsBreakdown?.educationMatch ?? 0
//                     ),
//                 },

//                 technicalQuestions:
//                     Array.isArray(
//                         interviewReport.technicalQuestions
//                     )
//                         ? interviewReport.technicalQuestions
//                         : [],

//                 behavioralQuestions:
//                     Array.isArray(
//                         interviewReport.behavioralQuestions
//                     )
//                         ? interviewReport.behavioralQuestions
//                         : [],

//                 skillGaps:
//                     Array.isArray(
//                         interviewReport.skillGaps
//                     )
//                         ? interviewReport.skillGaps
//                         : [],

//                 preparationPlan:
//                     Array.isArray(
//                         interviewReport.preparationPlan
//                     )
//                         ? interviewReport.preparationPlan
//                         : [],
//             };

//             console.log(
//                 "NORMALIZED GENERATED REPORT:",
//                 normalizedReport
//             );

//             setReport(normalizedReport);

//             // Return the complete API response
//             // so Home.jsx can navigate using the report ID.
//             return response.data;

//         } catch (error) {
//             console.error(
//                 "GENERATE REPORT ERROR:",
//                 error.response?.data || error
//             );

//             const message =
//                 error.response?.data?.message ||
//                 error.message ||
//                 "Failed to generate interview report.";

//             throw new Error(message);

//         } finally {
//             setLoading(false);
//         }
//     };


//     // =====================================================
//     // GET SINGLE INTERVIEW REPORT
//     // =====================================================

//     const getReportById = async (interviewId) => {
//         try {
//             setLoading(true);

//             if (!interviewId) {
//                 throw new Error(
//                     "Interview report ID is missing."
//                 );
//             }

//             const token = localStorage.getItem("token");

//             if (!token) {
//                 throw new Error(
//                     "Authentication token is missing. Please log in."
//                 );
//             }

//             const response = await axios.get(
//                 `${API_URL}/api/interview/${interviewId}`,
//                 {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                     timeout: 60000,
//                 }
//             );

//             console.log(
//                 "FULL INTERVIEW API RESPONSE:",
//                 response.data
//             );

//             const interviewReport =
//                 response.data?.interviewReport;

//             if (!interviewReport) {
//                 throw new Error(
//                     "Interview report not found."
//                 );
//             }

//             // =================================================
//             // NORMALIZE REPORT
//             // =================================================

//             const normalizedReport = {
//                 ...interviewReport,

//                 matchScore: Number(
//                     interviewReport.matchScore ?? 0
//                 ),

//                 atsBreakdown: {
//                     skillsMatch: Number(
//                         interviewReport.atsBreakdown?.skillsMatch ?? 0
//                     ),

//                     experienceMatch: Number(
//                         interviewReport.atsBreakdown?.experienceMatch ?? 0
//                     ),

//                     keywordMatch: Number(
//                         interviewReport.atsBreakdown?.keywordMatch ?? 0
//                     ),

//                     educationMatch: Number(
//                         interviewReport.atsBreakdown?.educationMatch ?? 0
//                     ),
//                 },

//                 technicalQuestions:
//                     Array.isArray(
//                         interviewReport.technicalQuestions
//                     )
//                         ? interviewReport.technicalQuestions
//                         : [],

//                 behavioralQuestions:
//                     Array.isArray(
//                         interviewReport.behavioralQuestions
//                     )
//                         ? interviewReport.behavioralQuestions
//                         : [],

//                 skillGaps:
//                     Array.isArray(
//                         interviewReport.skillGaps
//                     )
//                         ? interviewReport.skillGaps
//                         : [],

//                 preparationPlan:
//                     Array.isArray(
//                         interviewReport.preparationPlan
//                     )
//                         ? interviewReport.preparationPlan
//                         : [],
//             };

//             console.log(
//                 "NORMALIZED INTERVIEW REPORT:",
//                 normalizedReport
//             );

//             setReport(normalizedReport);

//             return normalizedReport;

//         } catch (error) {
//             console.error(
//                 "GET INTERVIEW REPORT ERROR:",
//                 error.response?.data || error
//             );

//             setReport(null);

//             throw error;

//         } finally {
//             setLoading(false);
//         }
//     };


//     // =====================================================
//     // DOWNLOAD ATS RESUME PDF
//     // =====================================================

//     const getResumePdf = async (interviewReportId) => {
//         try {
//             if (!interviewReportId) {
//                 throw new Error(
//                     "Interview report ID is missing."
//                 );
//             }

//             console.log(
//                 "Downloading resume for:",
//                 interviewReportId
//             );

//             const token = localStorage.getItem("token");

//             if (!token) {
//                 throw new Error(
//                     "Authentication token is missing."
//                 );
//             }

//             const response = await axios.get(
//                 `${API_URL}/api/interview/${interviewReportId}/resume-pdf`,
//                 {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },

//                     responseType: "blob",

//                     timeout: 120000,
//                 }
//             );

//             console.log(
//                 "PDF response:",
//                 response
//             );

//             // =================================================
//             // CHECK CONTENT TYPE
//             // =================================================

//             const contentType =
//                 response.headers["content-type"] || "";

//             if (
//                 !contentType
//                     .toLowerCase()
//                     .includes("application/pdf")
//             ) {
//                 let errorMessage =
//                     "Server did not return a PDF.";

//                 try {
//                     const text =
//                         await response.data.text();

//                     console.error(
//                         "PDF API returned non-PDF:",
//                         text
//                     );

//                     try {
//                         const json =
//                             JSON.parse(text);

//                         errorMessage =
//                             json.message ||
//                             errorMessage;

//                     } catch {
//                         // Response wasn't JSON
//                     }

//                 } catch (blobError) {
//                     console.error(
//                         "Could not read PDF error response:",
//                         blobError
//                     );
//                 }

//                 throw new Error(errorMessage);
//             }

//             // =================================================
//             // CREATE PDF BLOB
//             // =================================================

//             const blob = new Blob(
//                 [response.data],
//                 {
//                     type: "application/pdf",
//                 }
//             );

//             if (blob.size === 0) {
//                 throw new Error(
//                     "The generated PDF is empty."
//                 );
//             }

//             console.log(
//                 "PDF size:",
//                 blob.size,
//                 "bytes"
//             );

//             // =================================================
//             // DOWNLOAD
//             // =================================================

//             const url =
//                 window.URL.createObjectURL(blob);

//             const link =
//                 document.createElement("a");

//             link.href = url;

//             link.download =
//                 `ATS_Resume_${interviewReportId}.pdf`;

//             document.body.appendChild(link);

//             link.click();

//             link.remove();

//             // Give browser time to start download
//             setTimeout(() => {
//                 window.URL.revokeObjectURL(url);
//             }, 1000);

//             return true;

//         } catch (error) {
//             console.error(
//                 "DOWNLOAD PDF ERROR:",
//                 error.response?.data || error
//             );

//             alert(
//                 error.message ||
//                 "Failed to generate resume PDF. Please try again."
//             );

//             return false;
//         }
//     };


//     // =====================================================
//     // RETURN
//     // =====================================================

//     return {
//         report,
//         loading,

//         generateReport,
//         getReportById,
//         getResumePdf,
//     };
// };


// import { useState } from "react";
// import axios from "axios";

// const API_URL = import.meta.env.VITE_API_BASE_URL;

// export const useInterview = () => {
//     const [report, setReport] = useState(null);
//     const [loading, setLoading] = useState(false);

//     // =====================================================
//     // GENERATE INTERVIEW REPORT
//     // POST /api/interview/
//     // =====================================================

//     const generateReport = async ({
//         resumeFile,
//         selfDescription = "",
//         jobDescription,
//     }) => {
//         try {
//             setLoading(true);

//             const token = localStorage.getItem("token");

//             if (!token) {
//                 throw new Error("Please log in again.");
//             }

//             if (!jobDescription || !jobDescription.trim()) {
//                 throw new Error("Job description is required.");
//             }

//             if (!resumeFile && !selfDescription.trim()) {
//                 throw new Error(
//                     "Please upload a resume or provide a self-description."
//                 );
//             }

//             // ---------------------------------------------
//             // FormData
//             // ---------------------------------------------

//             const formData = new FormData();

//             if (resumeFile) {
//                 formData.append("resume", resumeFile);
//             }

//             formData.append(
//                 "selfDescription",
//                 selfDescription
//             );

//             formData.append(
//                 "jobDescription",
//                 jobDescription
//             );

//             console.log(
//                 "Generating interview report..."
//             );

//             // ---------------------------------------------
//             // Backend route:
//             // POST /api/interview/
//             // ---------------------------------------------

//             const response = await axios.post(
//                 `${API_URL}/api/interview/`,
//                 formData,
//                 {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 }
//             );

//             console.log(
//                 "GENERATE REPORT RESPONSE:",
//                 response.data
//             );

//             const interviewReport =
//                 response.data?.interviewReport;

//             if (!interviewReport) {
//                 throw new Error(
//                     "Interview report was not returned by the server."
//                 );
//             }

//             // ---------------------------------------------
//             // Normalize report
//             // ---------------------------------------------

//             const normalizedReport =
//                 normalizeReport(interviewReport);

//             setReport(normalizedReport);

//             return normalizedReport;

//         } catch (error) {
//             console.error(
//                 "GENERATE REPORT ERROR:",
//                 error.response?.data || error
//             );

//             throw new Error(
//                 getErrorMessage(
//                     error,
//                     "Failed to generate interview report."
//                 )
//             );

//         } finally {
//             setLoading(false);
//         }
//     };


//     // =====================================================
//     // GET SINGLE INTERVIEW REPORT
//     // GET /api/interview/report/:interviewId
//     // =====================================================

//     const getReportById = async (interviewId) => {
//         try {
//             setLoading(true);

//             if (!interviewId) {
//                 throw new Error(
//                     "Interview report ID is missing."
//                 );
//             }

//             const token = localStorage.getItem("token");

//             if (!token) {
//                 throw new Error("Please log in again.");
//             }

//             const response = await axios.get(
//                 `${API_URL}/api/interview/report/${interviewId}`,
//                 {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 }
//             );

//             console.log(
//                 "FULL INTERVIEW API RESPONSE:",
//                 response.data
//             );

//             const interviewReport =
//                 response.data?.interviewReport;

//             if (!interviewReport) {
//                 throw new Error(
//                     "Interview report not found."
//                 );
//             }

//             const normalizedReport =
//                 normalizeReport(interviewReport);

//             console.log(
//                 "NORMALIZED INTERVIEW REPORT:",
//                 normalizedReport
//             );

//             setReport(normalizedReport);

//             return normalizedReport;

//         } catch (error) {
//             console.error(
//                 "GET INTERVIEW REPORT ERROR:",
//                 error.response?.data || error
//             );

//             setReport(null);

//             throw new Error(
//                 getErrorMessage(
//                     error,
//                     "Failed to load interview report."
//                 )
//             );

//         } finally {
//             setLoading(false);
//         }
//     };


//     // =====================================================
//     // GET ALL INTERVIEW REPORTS
//     // GET /api/interview/
//     // =====================================================

//     const getAllReports = async () => {
//         try {
//             setLoading(true);

//             const token = localStorage.getItem("token");

//             if (!token) {
//                 throw new Error("Please log in again.");
//             }

//             const response = await axios.get(
//                 `${API_URL}/api/interview/`,
//                 {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 }
//             );

//             console.log(
//                 "ALL INTERVIEW REPORTS:",
//                 response.data
//             );

//             return Array.isArray(
//                 response.data?.interviewReports
//             )
//                 ? response.data.interviewReports
//                 : [];

//         } catch (error) {
//             console.error(
//                 "GET ALL REPORTS ERROR:",
//                 error.response?.data || error
//             );

//             throw new Error(
//                 getErrorMessage(
//                     error,
//                     "Failed to load interview reports."
//                 )
//             );

//         } finally {
//             setLoading(false);
//         }
//     };


//     // =====================================================
//     // DOWNLOAD ATS RESUME PDF
//     //
//     // POST /api/interview/resume/pdf/:interviewReportId
//     // =====================================================

//     const getResumePdf = async (interviewReportId) => {
//         try {
//             if (!interviewReportId) {
//                 throw new Error(
//                     "Interview report ID is missing."
//                 );
//             }

//             const token = localStorage.getItem("token");

//             if (!token) {
//                 throw new Error("Please log in again.");
//             }

//             console.log(
//                 "Generating resume PDF for:",
//                 interviewReportId
//             );

//             // ---------------------------------------------
//             // IMPORTANT:
//             // Backend route is POST, NOT GET
//             // ---------------------------------------------

//             const response = await axios.post(
//                 `${API_URL}/api/interview/resume/pdf/${interviewReportId}`,
//                 {},
//                 {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },

//                     responseType: "blob",
//                 }
//             );

//             console.log(
//                 "PDF RESPONSE:",
//                 response
//             );

//             // ---------------------------------------------
//             // Check response
//             // ---------------------------------------------

//             const contentType =
//                 response.headers["content-type"] || "";

//             if (
//                 !contentType.includes(
//                     "application/pdf"
//                 )
//             ) {
//                 // Axios blob response may contain JSON
//                 // when backend returns an error.

//                 let errorMessage =
//                     "Server did not return a PDF.";

//                 try {
//                     const text =
//                         await response.data.text();

//                     console.error(
//                         "PDF API ERROR RESPONSE:",
//                         text
//                     );

//                     try {
//                         const json =
//                             JSON.parse(text);

//                         errorMessage =
//                             json.message ||
//                             errorMessage;

//                     } catch {
//                         if (text) {
//                             errorMessage = text;
//                         }
//                     }

//                 } catch (parseError) {
//                     console.error(
//                         "Could not parse PDF error:",
//                         parseError
//                     );
//                 }

//                 throw new Error(errorMessage);
//             }

//             // ---------------------------------------------
//             // Create PDF blob
//             // ---------------------------------------------

//             const blob = new Blob(
//                 [response.data],
//                 {
//                     type: "application/pdf",
//                 }
//             );

//             // ---------------------------------------------
//             // Create download URL
//             // ---------------------------------------------

//             const url =
//                 window.URL.createObjectURL(blob);

//             const link =
//                 document.createElement("a");

//             link.href = url;

//             link.download =
//                 `ATS_Resume_${interviewReportId}.pdf`;

//             document.body.appendChild(link);

//             link.click();

//             link.remove();

//             // ---------------------------------------------
//             // Release memory
//             // ---------------------------------------------

//             setTimeout(() => {
//                 window.URL.revokeObjectURL(url);
//             }, 1000);

//             console.log(
//                 "PDF downloaded successfully."
//             );

//             return true;

//         } catch (error) {
//             console.error(
//                 "DOWNLOAD PDF ERROR:",
//                 error.response?.data || error
//             );

//             throw new Error(
//                 getErrorMessage(
//                     error,
//                     "Failed to generate resume PDF."
//                 )
//             );
//         }
//     };


//     // =====================================================
//     // RETURN
//     // =====================================================

//     return {
//         report,
//         loading,

//         generateReport,

//         getReportById,

//         getAllReports,

//         getResumePdf,
//     };
// };


// // =========================================================
// // NORMALIZE INTERVIEW REPORT
// // =========================================================

// function normalizeReport(interviewReport) {
//     const ats =
//         interviewReport?.atsBreakdown || {};

//     return {
//         ...interviewReport,

//         // ---------------------------------------------
//         // Overall score
//         // ---------------------------------------------

//         matchScore: normalizeScore(
//             interviewReport?.matchScore
//         ),

//         // ---------------------------------------------
//         // ATS breakdown
//         // ---------------------------------------------

//         atsBreakdown: {
//             skillsMatch: normalizeScore(
//                 ats.skillsMatch
//             ),

//             experienceMatch: normalizeScore(
//                 ats.experienceMatch
//             ),

//             keywordMatch: normalizeScore(
//                 ats.keywordMatch
//             ),

//             educationMatch: normalizeScore(
//                 ats.educationMatch
//             ),
//         },

//         // ---------------------------------------------
//         // Technical questions
//         // ---------------------------------------------

//         technicalQuestions:
//             Array.isArray(
//                 interviewReport?.technicalQuestions
//             )
//                 ? interviewReport.technicalQuestions.map(
//                     normalizeQuestion
//                 )
//                 : [],

//         // ---------------------------------------------
//         // Behavioral questions
//         // ---------------------------------------------

//         behavioralQuestions:
//             Array.isArray(
//                 interviewReport?.behavioralQuestions
//             )
//                 ? interviewReport.behavioralQuestions.map(
//                     normalizeQuestion
//                 )
//                 : [],

//         // ---------------------------------------------
//         // Skill gaps
//         // ---------------------------------------------

//         skillGaps:
//             Array.isArray(
//                 interviewReport?.skillGaps
//             )
//                 ? interviewReport.skillGaps
//                 : [],

//         // ---------------------------------------------
//         // Preparation plan
//         // ---------------------------------------------

//         preparationPlan:
//             Array.isArray(
//                 interviewReport?.preparationPlan
//             )
//                 ? interviewReport.preparationPlan.map(
//                     (day) => ({
//                         ...day,

//                         day: Number(day?.day || 0),

//                         focus:
//                             day?.focus || "",

//                         tasks:
//                             Array.isArray(day?.tasks)
//                                 ? day.tasks.map(
//                                     (task) =>
//                                         typeof task ===
//                                             "string"
//                                             ? task
//                                             : JSON.stringify(task)
//                                 )
//                                 : [],
//                     })
//                 )
//                 : [],
//     };
// }


// // =========================================================
// // NORMALIZE SCORE
// // =========================================================

// function normalizeScore(value) {
//     const number = Number(value);

//     if (!Number.isFinite(number)) {
//         return 0;
//     }

//     return Math.min(
//         100,
//         Math.max(
//             0,
//             number
//         )
//     );
// }


// // =========================================================
// // NORMALIZE QUESTION
// // =========================================================

// function normalizeQuestion(question) {
//     return {
//         question:
//             typeof question?.question === "string"
//                 ? question.question
//                 : "",

//         intention:
//             typeof question?.intention === "string"
//                 ? question.intention
//                 : "",

//         answer:
//             typeof question?.answer === "string"
//                 ? question.answer
//                 : "",
//     };
// }


// // =========================================================
// // ERROR MESSAGE HELPER
// // =========================================================

// function getErrorMessage(
//     error,
//     fallback
// ) {
//     if (
//         error?.response?.data?.message
//     ) {
//         return error.response.data.message;
//     }

//     if (
//         typeof error?.response?.data ===
//         "string"
//     ) {
//         return error.response.data;
//     }

//     if (error?.message) {
//         return error.message;
//     }

//     return fallback;
// }




import { useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_BASE_URL;

const api = axios.create({
    baseURL: API_URL,
    withCredentials: true,
});

export const useInterview = () => {
    const [report, setReport] = useState(null);
    const [loading, setLoading] = useState(false);

    // =====================================================
    // GENERATE INTERVIEW REPORT
    // POST /api/interview/
    // =====================================================

    const generateReport = async ({
        resumeFile = null,
        selfDescription = "",
        jobDescription = "",
    }) => {
        try {
            setLoading(true);

            // ---------------------------------------------
            // Validate input
            // ---------------------------------------------

            if (!jobDescription.trim()) {
                throw new Error(
                    "Job description is required."
                );
            }

            if (
                !resumeFile &&
                !selfDescription.trim()
            ) {
                throw new Error(
                    "Please upload a resume or provide a self-description."
                );
            }

            // ---------------------------------------------
            // Create FormData
            // ---------------------------------------------

            const formData = new FormData();

            if (resumeFile) {
                formData.append(
                    "resume",
                    resumeFile
                );
            }

            formData.append(
                "selfDescription",
                selfDescription.trim()
            );

            formData.append(
                "jobDescription",
                jobDescription.trim()
            );

            console.log(
                "GENERATING INTERVIEW REPORT..."
            );

            // ---------------------------------------------
            // IMPORTANT:
            // Do NOT manually send Authorization header.
            //
            // Backend authentication uses:
            // HTTP-only cookie named "token"
            //
            // withCredentials:true sends that cookie.
            // ---------------------------------------------

            const response = await api.post(
                "/api/interview/",
                formData
            );

            console.log(
                "GENERATE REPORT RESPONSE:",
                response.data
            );

            // ---------------------------------------------
            // Get report from response
            // ---------------------------------------------

            const interviewReport =
                response.data?.interviewReport;

            if (!interviewReport) {
                throw new Error(
                    "Interview report was not returned by the server."
                );
            }

            // ---------------------------------------------
            // Normalize report
            // ---------------------------------------------

            const normalizedReport =
                normalizeReport(
                    interviewReport
                );

            setReport(normalizedReport);

            return normalizedReport;

        } catch (error) {
            console.error(
                "GENERATE REPORT ERROR:",
                error.response?.data || error
            );

            throw new Error(
                getErrorMessage(
                    error,
                    "Failed to generate interview report."
                )
            );

        } finally {
            setLoading(false);
        }
    };


    // =====================================================
    // GET SINGLE INTERVIEW REPORT
    // GET /api/interview/report/:interviewId
    // =====================================================

    const getReportById = async (
        interviewId
    ) => {
        try {
            setLoading(true);

            if (!interviewId) {
                throw new Error(
                    "Interview report ID is missing."
                );
            }

            console.log(
                "FETCHING INTERVIEW REPORT:",
                interviewId
            );

            const response = await api.get(
                `/api/interview/report/${interviewId}`
            );

            console.log(
                "FULL INTERVIEW API RESPONSE:",
                response.data
            );

            const interviewReport =
                response.data?.interviewReport;

            if (!interviewReport) {
                throw new Error(
                    "Interview report not found."
                );
            }

            const normalizedReport =
                normalizeReport(
                    interviewReport
                );

            console.log(
                "NORMALIZED INTERVIEW REPORT:",
                normalizedReport
            );

            setReport(normalizedReport);

            return normalizedReport;

        } catch (error) {
            console.error(
                "GET INTERVIEW REPORT ERROR:",
                error.response?.data || error
            );

            setReport(null);

            throw new Error(
                getErrorMessage(
                    error,
                    "Failed to load interview report."
                )
            );

        } finally {
            setLoading(false);
        }
    };


    // =====================================================
    // GET ALL INTERVIEW REPORTS
    // GET /api/interview/
    // =====================================================

    const getAllReports = async () => {
        try {
            setLoading(true);

            console.log(
                "FETCHING ALL INTERVIEW REPORTS..."
            );

            const response = await api.get(
                "/api/interview/"
            );

            console.log(
                "ALL INTERVIEW REPORTS:",
                response.data
            );

            const reports =
                response.data?.interviewReports;

            return Array.isArray(reports)
                ? reports.map(normalizeReport)
                : [];

        } catch (error) {
            console.error(
                "GET ALL REPORTS ERROR:",
                error.response?.data || error
            );

            throw new Error(
                getErrorMessage(
                    error,
                    "Failed to load interview reports."
                )
            );

        } finally {
            setLoading(false);
        }
    };


    // =====================================================
    // DOWNLOAD ATS RESUME PDF
    //
    // POST /api/interview/resume/pdf/:interviewReportId
    // =====================================================

    const getResumePdf = async (
        interviewReportId
    ) => {
        try {
            if (!interviewReportId) {
                throw new Error(
                    "Interview report ID is missing."
                );
            }

            console.log(
                "GENERATING RESUME PDF FOR:",
                interviewReportId
            );

            // ---------------------------------------------
            // Backend route is POST
            // Authentication is cookie based
            // ---------------------------------------------

            const response = await api.post(
                `/api/interview/resume/pdf/${interviewReportId}`,
                {},
                {
                    responseType: "blob",
                }
            );

            console.log(
                "PDF RESPONSE:",
                response
            );

            // ---------------------------------------------
            // Check Content-Type
            // ---------------------------------------------

            const contentType =
                response.headers[
                    "content-type"
                ] || "";

            if (
                !contentType.includes(
                    "application/pdf"
                )
            ) {
                let errorMessage =
                    "Server did not return a PDF.";

                try {
                    const text =
                        await response.data.text();

                    console.error(
                        "PDF ERROR RESPONSE:",
                        text
                    );

                    try {
                        const json =
                            JSON.parse(text);

                        errorMessage =
                            json.message ||
                            errorMessage;

                    } catch {
                        if (text) {
                            errorMessage = text;
                        }
                    }

                } catch (parseError) {
                    console.error(
                        "PDF ERROR PARSE FAILED:",
                        parseError
                    );
                }

                throw new Error(
                    errorMessage
                );
            }

            // ---------------------------------------------
            // Create Blob
            // ---------------------------------------------

            const blob = new Blob(
                [response.data],
                {
                    type: "application/pdf",
                }
            );

            // ---------------------------------------------
            // Create download URL
            // ---------------------------------------------

            const url =
                window.URL.createObjectURL(
                    blob
                );

            // ---------------------------------------------
            // Create download link
            // ---------------------------------------------

            const link =
                document.createElement("a");

            link.href = url;

            link.download =
                `ATS_Resume_${interviewReportId}.pdf`;

            document.body.appendChild(link);

            link.click();

            link.remove();

            // ---------------------------------------------
            // Cleanup
            // ---------------------------------------------

            setTimeout(() => {
                window.URL.revokeObjectURL(
                    url
                );
            }, 1000);

            console.log(
                "PDF DOWNLOADED SUCCESSFULLY"
            );

            return true;

        } catch (error) {
            console.error(
                "DOWNLOAD PDF ERROR:",
                error.response?.data || error
            );

            throw new Error(
                getErrorMessage(
                    error,
                    "Failed to generate resume PDF."
                )
            );
        }
    };


    // =====================================================
    // RETURN
    // =====================================================

    return {
        report,
        loading,

        generateReport,
        getReportById,
        getAllReports,
        getResumePdf,
    };
};


// =========================================================
// NORMALIZE INTERVIEW REPORT
// =========================================================

function normalizeReport(
    interviewReport
) {
    if (!interviewReport) {
        return null;
    }

    const ats =
        interviewReport.atsBreakdown || {};

    return {
        ...interviewReport,

        // ---------------------------------------------
        // Overall ATS score
        // ---------------------------------------------

        matchScore: normalizeScore(
            interviewReport.matchScore
        ),

        // ---------------------------------------------
        // ATS breakdown
        // ---------------------------------------------

        atsBreakdown: {
            skillsMatch:
                normalizeScore(
                    ats.skillsMatch
                ),

            experienceMatch:
                normalizeScore(
                    ats.experienceMatch
                ),

            keywordMatch:
                normalizeScore(
                    ats.keywordMatch
                ),

            educationMatch:
                normalizeScore(
                    ats.educationMatch
                ),
        },

        // ---------------------------------------------
        // Technical Questions
        // ---------------------------------------------

        technicalQuestions:
            Array.isArray(
                interviewReport.technicalQuestions
            )
                ? interviewReport
                    .technicalQuestions
                    .map(normalizeQuestion)
                : [],

        // ---------------------------------------------
        // Behavioral Questions
        // ---------------------------------------------

        behavioralQuestions:
            Array.isArray(
                interviewReport.behavioralQuestions
            )
                ? interviewReport
                    .behavioralQuestions
                    .map(normalizeQuestion)
                : [],

        // ---------------------------------------------
        // Skill Gaps
        // ---------------------------------------------

        skillGaps:
            Array.isArray(
                interviewReport.skillGaps
            )
                ? interviewReport.skillGaps.map(
                    (gap) => ({
                        skill:
                            typeof gap?.skill ===
                            "string"
                                ? gap.skill
                                : "",

                        severity:
                            ["low", "medium", "high"]
                                .includes(
                                    gap?.severity
                                )
                                ? gap.severity
                                : "low",
                    })
                )
                : [],

        // ---------------------------------------------
        // Preparation Plan
        // ---------------------------------------------

        preparationPlan:
            Array.isArray(
                interviewReport.preparationPlan
            )
                ? interviewReport
                    .preparationPlan
                    .map(
                        (day) => ({
                            day:
                                Number(
                                    day?.day
                                ) || 0,

                            focus:
                                typeof day?.focus ===
                                "string"
                                    ? day.focus
                                    : "",

                            tasks:
                                Array.isArray(
                                    day?.tasks
                                )
                                    ? day.tasks.map(
                                        (task) =>
                                            typeof task ===
                                            "string"
                                                ? task
                                                : JSON.stringify(
                                                    task
                                                )
                                    )
                                    : [],
                        })
                    )
                : [],
    };
}


// =========================================================
// NORMALIZE SCORE
// =========================================================

function normalizeScore(value) {
    const number =
        Number(value);

    if (
        !Number.isFinite(
            number
        )
    ) {
        return 0;
    }

    return Math.min(
        100,
        Math.max(
            0,
            number
        )
    );
}


// =========================================================
// NORMALIZE QUESTION
// =========================================================

function normalizeQuestion(
    question
) {
    return {
        question:
            typeof question?.question ===
            "string"
                ? question.question.trim()
                : "",

        intention:
            typeof question?.intention ===
            "string"
                ? question.intention.trim()
                : "",

        answer:
            typeof question?.answer ===
            "string"
                ? question.answer.trim()
                : "",
    };
}


// =========================================================
// ERROR MESSAGE HELPER
// =========================================================

function getErrorMessage(
    error,
    fallback
) {
    // Axios JSON error
    if (
        error?.response?.data?.message
    ) {
        return error.response.data.message;
    }

    // Axios string error
    if (
        typeof error?.response?.data ===
        "string"
    ) {
        return error.response.data;
    }

    // Normal JS error
    if (
        error?.message
    ) {
        return error.message;
    }

    return fallback;
}