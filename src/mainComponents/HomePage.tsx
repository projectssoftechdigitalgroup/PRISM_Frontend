import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
    const navigate = useNavigate();
  return (
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
        <div
          style={{
            height: "28px",
            width: "28px",
            border: "2px solid #cc00ff",
            borderRadius: "50%",
            marginLeft: "auto",
          }}
        ></div>
      </div>

      {/* Welcome Text */}
      <p
        style={{
          fontSize: "18px",
          marginBottom: "20px",
          color: "#333",
          textAlign: "center",
        }}
      >
        Hey! Welcome, build your profile with us
      </p>

      {/* Card */}
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
        {/* Question Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
            fontSize: "16px",
            color: "#444",
          }}
        >
          <span>1. How would you describe yourself in few words?</span>
          <span style={{ fontSize: "14px", color: "#cc00ff" }}>1/7</span>
        </div>

        {/* Textarea */}
        <textarea
          rows={5}
          maxLength={150}
          placeholder="Type here..."
          style={{
            width: "100%",
            padding: "12px",
            fontSize: "15px",
            borderRadius: "8px",
            border: "1px solid #cc00ff",
            outline: "none",
            resize: "none",
            boxSizing: "border-box",
            marginBottom: "8px",
            backgroundColor: "#f7eaff", // Updated background color
            color: "#4a0072", // Updated text color
          }}
        />

        {/* Word Count */}
        <div
          style={{
            textAlign: "right",
            fontSize: "12px",
            color: "#cc00ff",
            marginBottom: "20px",
          }}
        >
          150 words
        </div>

        {/* Next Button */}
        <div style={{ textAlign: "right" }}>
          <button
            style={{
              backgroundColor: "#cc00ff",
              color: "#fff",
              padding: "10px 24px",
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
            onClick={()=>navigate("/middlesection")}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
