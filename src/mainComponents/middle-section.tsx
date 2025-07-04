import React, { useEffect, useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import axios from "axios";
import {BASE_URL} from "../BASE_URL/BASE_URL"; // Adjust the import path as necessary

export function MiddleSection() {
  const [inputValue, setInputValue] = useState("");
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [qaPairs, setQaPairs] = useState<{ type: "question" | "answer"; content: string }[]>([]);
  const [progress, setProgress] = useState(0);

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    if (!inputValue.trim()) {
      alert("Please enter an answer before submitting.");
      return;
    }

    console.log("Submitted:", inputValue);
    submitAnswer(inputValue); // Use the submitAnswer function to process the input
    setInputValue(""); // Clear input after submission
  };

  const startInterview = async () => {
    setIsLoading(true);
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `${BASE_URL}/interview/start`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Interview started:", response.data);
      const { session_id, question } = response.data;
      console.log("Session ID:", session_id);

      setSessionId(session_id);
      setQaPairs([{ type: "question", content: question }]);
    } catch (error: any) {
      console.error("Error starting interview:", error.response?.data || error.message);
      alert("Failed to start the interview. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const submitAnswer = async (answer: string) => {
    if (!sessionId) {
      alert("No active session. Please start the interview first.");
      return;
    }

    setQaPairs((prev) => [...prev, { type: "answer", content: answer }]);
    setIsLoading(true);
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `${BASE_URL}/interview/${sessionId}/answer`,
        { answer },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Answer processed:", response.data);

      const { question, follow_up, is_complete, progress: progressData } = response.data;

      if (follow_up) {
        setQaPairs((prev) => [...prev, { type: "question", content: follow_up }]);
      } else if (question) {
        setQaPairs((prev) => [...prev, { type: "question", content: question }]);
      }

      if (is_complete) {
        setProgress(100);
        alert("Interview complete!");
      } else if (progressData) {
        const { answered, total } = progressData;
        setProgress((answered / total) * 100);
      }
    } catch (error: any) {
      console.error("Error processing answer:", error.response?.data || error.message);
      alert("Failed to process your answer. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    startInterview();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh", // Ensure it grows dynamically with content
        backgroundColor: "#FFFFFF",
        padding: "24px",
      }}
    >
      {/* Add progress bar at the top of the screen with percentage */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "8px",
          backgroundColor: "#E0E0E0",
          zIndex: 1000,
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            backgroundColor: "#e041b1",
            position: "relative",
          }}
        >
          <span
            style={{
              position: "absolute",
              right: "50%",
              top: "-20px",
              transform: "translateX(50%)",
              fontSize: "12px",
              color: "#000",
              textAlign: "center",
            }}
          >
            {Math.round(progress)}%
          </span>
        </div>
      </div>

      {/* Adjust the main content area to grow dynamically */}
      <div
        style={{
          flex: "1 0 auto", // Allow the content to grow and shrink dynamically
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "16px",
        }}
      >
        <div
          style={{
            textAlign: "center",
            maxWidth: "90%", // Adjust width for responsiveness
            width: "100%",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(40px, 5vw, 70px)", // Responsive font size
              fontWeight: "bold",
              color: "#e041b1",
              marginBottom: "16px",
            }}
          >
            Prism
          </h1>
          <p
            style={{
              fontSize: "clamp(14px, 2vw, 18px)", // Responsive font size
              color: "black",
            }}
          >
            Get personalized recommendations that match your vibe.
          </p>
        </div>
      </div>

      {/* Prompt Section
      <div
        style={{
          textAlign: "left",
          marginRight: "5%",
          marginBottom: "24px",
          fontSize: "16px",
          color: "#606060",
        }}
      >
        <p
          style={{
            color: "black",
            marginLeft: "4.3%",
            padding: "12px",
            borderRadius: "8px",
            display: "inline-block",
            maxWidth: "90%", // Adjust width for responsiveness
            wordWrap: "break-word", // Handle long text
          }}
        >
          Let me know for which category you want recommendations: <br />
          1. Food & Dining <br />
          2. Movies & TV <br />
          3. Travelling <br />
        </p>
      </div> */}

      {/* QA Pairs Section */}
      {qaPairs.map((qa, index) => (
        <div
          key={index}
          style={{
            textAlign: qa.type === "question" ? "left" : "right",
            marginBottom: "24px",
            fontSize: "16px",
            color: "#606060",
            wordWrap: "break-word", // Ensure long text wraps properly
          }}
        >
          <p
            style={{
              backgroundColor: qa.type === "question" ? "#F0F2F6" : "#E0E0E0",
              padding: "12px",
              borderRadius: "8px",
              display: "inline-block",
              maxWidth: "90%", // Adjust width for responsiveness
            }}
          >
            {qa.content}
          </p>
        </div>
      ))}

      {/* Loader Section */}
      {isLoading && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            zIndex: 2000,
          }}
        >
          <p style={{ fontSize: "16px", color: "#606060" }}>Loading...</p>
        </div>
      )}

      {/* Footer Section */}
      <div
        style={{
          padding: "16px 0",
          marginTop: "auto", // Push footer to the bottom if content is short
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            maxWidth: "90%", // Adjust width for responsiveness
            width: "100%",
            backgroundColor: "#F0F2F6",
            borderRadius: "24px",
            padding: "8px 16px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >          <input
            type="text"
            placeholder="Type your answer here..."
            value={inputValue}
            onChange={handleInputValue}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleSubmit();
              }
            }}
            style={{
              flex: 1,
              border: "none",
              outline: "none",
              backgroundColor: "transparent",
              fontSize: "16px",
              color: "#000",
              padding: "8px",
              marginRight: "8px",
            }}
          />
          <button
            onClick={handleSubmit}
            style={{
              backgroundColor: "#e041b1",
              border: "none",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <FaPaperPlane style={{ color: "#fff", fontSize: "16px" }} />
          </button>
        </div>
      </div>
    </div>
  );
}
