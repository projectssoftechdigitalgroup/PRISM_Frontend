import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

export function MiddleSection() {
  const [inputValue, setInputValue] = useState("");

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    console.log("Submitted:", inputValue);
    setInputValue(""); // Clear input after submission
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#FFFFFF",
        padding: "24px",
      }}
    >
      <div
        style={{
          flex: 1,
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
      <div
        style={{
          flex: 1,
          maxWidth: "90%", // Adjust width for responsiveness
          margin: "0 auto", // Center content
          textAlign: "left",
        }}
      >
        <div>
          <p style={{ fontSize: "16px", color: "black" }}>
            Let me know for which category you want recommendations:
          </p>
          <ul style={{ paddingLeft: "16px", color: "black" }}>
            <li style={{ fontSize: "14px" }}>1. Food & Dining</li>
            <li style={{ fontSize: "14px" }}>2. Movies & TV</li>
            <li style={{ fontSize: "14px" }}>3. Travelling</li>
          </ul>
        </div>
      </div>
      {/* Prompt Section */}
      <div
        style={{
          marginBottom: "40px", // Adjust margin for responsiveness
          textAlign: "right",
          marginRight: "5%",
          fontSize: "16px",
          color: "#606060",
        }}
      >
        <p
          style={{
            backgroundColor: "#F0F2F6",
            padding: "12px",
            borderRadius: "8px",
            display: "inline-block",
            maxWidth: "90%", // Adjust width for responsiveness
            wordWrap: "break-word", // Handle long text
          }}
        >
          Give me inspiring movies based on personal growth like my life story
        </p>
      </div>
      <div
        style={{
          padding: "16px 0",
          marginTop: "auto",
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
        >
          <input
            type="text"
            placeholder="Type your answer here..."
            value={inputValue}
            onChange={handleInputValue}
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
