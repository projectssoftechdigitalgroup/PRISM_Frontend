import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// @ts-ignore: Importing from a JavaScript file
import { BASE_URL } from "../BASE_URL/BASE_URL";

// CSS for animations
const styles = {
  fadeIn: {
    opacity: 1,
    transition: "opacity 0.3s ease-in",
  },
  fadeOut: {
    opacity: 0,
    transition: "opacity 0.3s ease-out",
  },
};

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [question, setQuestion] = useState<string>("");
  const [progress, setProgress] = useState<Record<string, number>>({});
  const [answer, setAnswer] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [fadeAnimation, setFadeAnimation] = useState<string>("fade-in");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isComplete, setIsComplete] = useState<boolean>(true);

  // Function to handle question transitions with animation
  const updateQuestionWithAnimation = (newQuestion: string) => {
    setFadeAnimation("fade-out");

    // After fade out completes, update the question and fade back in
    setTimeout(() => {
      setQuestion(newQuestion);
      setFadeAnimation("fade-in");
    }, 300);
  };
  const startInterview = async () => {
    setIsLoading(true);
    // Try different possible token keys
    const token =
      localStorage.getItem("token") ||
      localStorage.getItem("access_token") ||
      localStorage.getItem("authToken");
    console.log("Starting interview with token:", token);

    try {
      // The correct endpoint based on your curl command
      const response = await axios.post(
        `${BASE_URL}/interview/foundation/start`,
        {}, // Empty body
        {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(isComplete);

      const { session_id, question, progress, is_complete } = response.data;
      if (is_complete) {
        navigate("/recommendations");
      } else {
        navigate("/homepage");
      }
      console.log("Interview started:", response.data);
      // Store session ID in state and localStorage for persistence
      setSessionId(session_id);
      localStorage.setItem("interview_session_id", session_id);

      // Check if interview is already complete
      // setIsComplete(is_complete || false);

      // Make sure we have a question to display
      if (!question) {
        throw new Error("No question received from the server");
      }

      updateQuestionWithAnimation(question);

      // Make sure progress is properly formatted
      if (progress) {
        setProgress(progress);
        console.log("Interview progress:", progress);
      } else {
        // Default progress object if none is provided
        setProgress({ answered: 0, total: 7 });
      }
    } catch (error: any) {
      console.error("Error starting interview:", error);
      const errorMsg =
        "Failed to start the interview: " +
        (error.response?.data?.message || error.message);
      setErrorMessage(errorMsg);
      // Auto-clear error after 5 seconds
      setTimeout(() => setErrorMessage(null), 5000);
    } finally {
      setIsLoading(false);
    }
  };
  // Function to submit an answer
  const submitAnswer = async () => {
    if (!sessionId) {
      alert("No active session. Please start the interview first.");
      return;
    }

    if (!answer.trim()) {
      alert("Please enter an answer before submitting.");
      return;
    }

    setIsLoading(true);
    try {
      // Try different possible token keys
      const token =
        localStorage.getItem("token") ||
        localStorage.getItem("access_token") ||
        localStorage.getItem("authToken");

      const response = await axios.post(
        `${BASE_URL}/interview/foundation/${sessionId}/answer`,
        {
          answer,
        },
        {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Answer submitted:", response.data);
      const { question, follow_up, is_complete, progress } = response.data;

      // Update the completion status
      setIsComplete(is_complete);

      // Display follow-up question if available, otherwise use the regular question
      updateQuestionWithAnimation(follow_up || question);
      setProgress(progress);
      setAnswer(""); // Clear the answer field after submission

      if (is_complete) {
        // Interview is complete, show message and redirect
        setIsLoading(true);
        alert(
          "Interview completed successfully! Redirecting to recommendations..."
        );
        setTimeout(() => {
          navigate("/recommendations");
        }, 1000); // Short delay for better UX
      }
    } catch (error: any) {
      console.error("Error submitting answer:", error);
      const errorMsg =
        "Failed to submit the answer: " +
        (error.response?.data?.message || error.message);

      setErrorMessage(errorMsg);
      alert(errorMsg);

      // Auto-clear error after 5 seconds
      setTimeout(() => setErrorMessage(null), 5000);
    } finally {
      setIsLoading(false);
    }
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("access_token");
    localStorage.removeItem("authToken");
    localStorage.removeItem("interview_session_id");
    navigate("/");
  };
  // Function to check interview completion status
  // const checkInterviewStatus = async () => {
  //   try {
  //     const token =
  //       localStorage.getItem("token") ||
  //       localStorage.getItem("access_token") ||
  //       localStorage.getItem("authToken");

  //     // Check if we have a stored session ID
  //     const storedSessionId = localStorage.getItem("interview_session_id");

  //     if (storedSessionId) {
  //       setSessionId(storedSessionId);

  //       // Fetch the current status to check if it's complete
  //       const statusResponse = await axios.get(
  //         `${BASE_URL}/interview/foundation/${storedSessionId}/status`,
  //         {
  //           headers: {
  //             accept: "application/json",
  //             Authorization: `Bearer ${token}`,
  //           },
  //         }
  //       );

  //       const { is_complete } = statusResponse.data;
  //       setIsComplete(is_complete);

  //       if (is_complete) {
  //         // If interview was already completed, redirect to recommendations
  //         navigate("/recommendations");
  //         return true;
  //       }
  //     }
  //     return false;
  //   } catch (error) {
  //     console.error("Error checking interview status:", error);
  //     return false;
  //   }
  // };

  useEffect(() => {
    // Check status first, then start interview if not complete
    // const initInterview = async () => {
    // const isAlreadyComplete = await checkInterviewStatus();
    // if (!isAlreadyComplete) {
    startInterview(); // Start the interview session if not completed
    // }
    // };

    // initInterview();
  }, []);

  return (
    <>
      <div
        style={{
          fontFamily: "Arial, sans-serif",
          backgroundColor: "#f9f9f9",
          minHeight: "100vh",
          padding: "20px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Topbar */}
        <div
          style={{
            width: "100%",
            maxWidth: "900px",
            borderBottom: "2px solid #cc00ff",
            padding: "15px 10px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "30px",
          }}
        >
          <span style={{ color: "#999", fontSize: "14px" }}>home page</span>
          <h1
            style={{
              color: "#cc00ff",
              fontSize: "32px",
              fontWeight: "bold",
              margin: "0 auto",
              textAlign: "center",
              flexGrow: 1,
            }}
          >
            Prism
          </h1>
          <div style={{ textAlign: "right", marginBottom: "20px" }}>
            <button
              onClick={handleLogout}
              style={{
                backgroundColor: "#cc00ff",
                color: "#fff",
                padding: "10px 20px",
                border: "none",
                borderRadius: "25px",
                fontWeight: 600,
                fontSize: "14px",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#a100cc")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "#cc00ff")
              }
            >
              Logout
            </button>
          </div>
        </div>{" "}
        {/* Welcome Text */}
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <p
            style={{
              fontSize: "18px",
              color: "#333",
              margin: "0 0 10px 0",
            }}
          >
            Hey! Welcome, build your profile with us
          </p>

          {progress &&
            progress.answered !== undefined &&
            progress.total !== undefined && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                <div
                  style={{
                    width: "200px",
                    height: "6px",
                    backgroundColor: "#f0e6ff",
                    borderRadius: "3px",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: `${(progress.answered / progress.total) * 100}%`,
                      backgroundColor: "#cc00ff",
                      borderRadius: "3px",
                      transition: "width 0.5s ease-in-out",
                    }}
                  />
                </div>
                <span
                  style={{
                    fontSize: "12px",
                    color: "#6a0dad",
                    marginTop: "5px",
                    fontWeight: "500",
                  }}
                >
                  {Math.round((progress.answered / progress.total) * 100)}%
                  Complete
                </span>
              </div>
            )}
        </div>
        {/* Error Message Display */}
        {errorMessage && (
          <div
            style={{
              width: "100%",
              maxWidth: "600px",
              padding: "12px 20px",
              marginBottom: "15px",
              backgroundColor: "#ffebee",
              borderLeft: "4px solid #ff5252",
              borderRadius: "4px",
              color: "#d32f2f",
              fontSize: "14px",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.05)",
              animation: "fadeIn 0.3s ease-in",
            }}
          >
            <strong>Error:</strong> {errorMessage}
          </div>
        )}
        {/* Question Section */}
        <div
          style={{
            width: "100%",
            maxWidth: "600px",
            backgroundColor: "#fff",
            borderRadius: "20px",
            padding: "30px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.05)",
            boxSizing: "border-box",
            border: "2px solid transparent",
            borderImage: "linear-gradient(90deg, #cc00ff, #ff6dfb) 1",
          }}
        >
          {isLoading ? (
            <p style={{ textAlign: "center", color: "#cc00ff" }}>Loading...</p>
          ) : (
            <>
              {" "}
              <div
                style={{
                  marginBottom: "20px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "10px",
                    ...(fadeAnimation === "fade-in"
                      ? styles.fadeIn
                      : styles.fadeOut),
                  }}
                >
                  <h3
                    style={{
                      fontSize: "18px",
                      color: "#333",
                      fontWeight: "600",
                      margin: 0,
                      flex: "1",
                    }}
                  >
                    {question}
                  </h3>
                  <div
                    style={{
                      fontSize: "14px",
                      color: "#cc00ff",
                      fontWeight: "bold",
                      padding: "2px 10px",
                      backgroundColor: "#f7eaff",
                      borderRadius: "12px",
                      marginLeft: "10px",
                    }}
                  >
                    {progress &&
                    progress.answered !== undefined &&
                    progress.total !== undefined
                      ? `Question ${progress.answered}/${progress.total}`
                      : `Question ${Object.keys(progress).length}/7`}
                  </div>
                </div>
              </div>{" "}
              <textarea
                rows={5}
                maxLength={150}
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Type your answer here..."
                onKeyDown={(e) => {
                  // Allow Shift+Enter for new lines, but submit on Enter alone
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    submitAnswer();
                  }
                }}
                style={{
                  width: "100%",
                  padding: "15px",
                  fontSize: "16px",
                  borderRadius: "10px",
                  border: "1px solid #cc00ff",
                  outline: "none",
                  resize: "none",
                  boxSizing: "border-box",
                  marginBottom: "8px",
                  backgroundColor: "#f7eaff",
                  color: "#4a0072",
                  boxShadow: "0 2px 4px rgba(204, 0, 255, 0.1)",
                  transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#a100cc";
                  e.currentTarget.style.boxShadow =
                    "0 0 0 2px rgba(204, 0, 255, 0.2)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "#cc00ff";
                  e.currentTarget.style.boxShadow =
                    "0 2px 4px rgba(204, 0, 255, 0.1)";
                }}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  fontSize: "13px",
                  color: answer.length > 120 ? "#ff3b30" : "#cc00ff",
                  marginBottom: "20px",
                  transition: "color 0.3s ease",
                }}
              >
                <div
                  style={{
                    backgroundColor:
                      answer.length > 120 ? "#ffedeb" : "#f7eaff",
                    padding: "3px 8px",
                    borderRadius: "10px",
                    fontWeight: "500",
                  }}
                >
                  {150 - answer.length} characters remaining
                </div>
              </div>{" "}
              <div style={{ textAlign: "right" }}>
                <button
                  style={{
                    backgroundColor: "#cc00ff",
                    color: "#fff",
                    padding: "12px 28px",
                    border: "none",
                    borderRadius: "25px",
                    fontWeight: 600,
                    fontSize: "15px",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    boxShadow: "0 4px 8px rgba(204, 0, 255, 0.3)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = "#a100cc";
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow =
                      "0 6px 12px rgba(204, 0, 255, 0.4)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = "#cc00ff";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 8px rgba(204, 0, 255, 0.3)";
                  }}
                  onClick={submitAnswer}
                  disabled={isLoading || !answer.trim()}
                >
                  {isLoading ? "Submitting..." : "Submit Answer"}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default HomePage;
