import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import axios from "axios";
import { BASE_URL } from "../BASE_URL/BASE_URL.jsx";

const NewChat = () => {
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState("Movies & TV"); // Default category
  const [chatHistory, setChatHistory] = useState<{ type: "user" | "assistant"; content: string }[]>([
    { 
      type: "assistant", 
      content: "Hi there! I can help you find personalized recommendations. What would you like recommendations for? You can choose from categories like Movies & TV, Food & Dining, or Travel." 
    }
  ]);
  const [recommendations, setRecommendations] = useState<any[]>([]);

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async () => {
    if (!inputValue.trim()) {
      alert("Please enter a query before submitting.");
      return;
    }

    // Add user message to chat history
    const userMessage = inputValue;
    setChatHistory(prev => [...prev, { type: "user", content: userMessage }]);
    
    // Clear input field
    setInputValue("");
    
    // Set loading state
    setIsLoading(true);

    try {
      // Determine category from input if possible
      const lowerInput = userMessage.toLowerCase();
      if (lowerInput.includes("movie") || lowerInput.includes("film") || lowerInput.includes("tv") || lowerInput.includes("show")) {
        setCategory("Movies & TV");
      } else if (lowerInput.includes("food") || lowerInput.includes("restaurant") || lowerInput.includes("dining") || lowerInput.includes("eat")) {
        setCategory("Food & Dining");
      } else if (lowerInput.includes("travel") || lowerInput.includes("trip") || lowerInput.includes("destination") || lowerInput.includes("vacation")) {
        setCategory("Travel");
      }
      
      // Get token from localStorage
      const token = localStorage.getItem("token")
      console.log(  "Using token:", token);
      
      
      if (!token) {
        throw new Error("No authentication token found. Please log in again.");
      }

      // Make API request to generate recommendations
      const response = await axios.post(
        `${BASE_URL}/recommendations/generate`,
        {
          category: category,
          query: userMessage
        },
        {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        }
      );
      console.log(response);
      
      // Process the response
      const responseData = response.data;
      
      // Add assistant response to chat history
      setChatHistory(prev => [
        ...prev, 
        { 
          type: "assistant", 
          content: `Here are some ${category} recommendations based on your request:` 
        }
      ]);
      
      // Set recommendations to display
      if (typeof responseData === "string") {
        // If response is a string, try to parse it
        try {
          const parsedData = JSON.parse(responseData);
          setRecommendations(Array.isArray(parsedData) ? parsedData : []);
        } catch {
          // If parsing fails, just display the string response
          setChatHistory(prev => [
            ...prev,
            { type: "assistant", content: responseData }
          ]);
        }
      } else if (Array.isArray(responseData)) {
        // If response is already an array
        setRecommendations(responseData);
      } else if (responseData && responseData.recommendations) {
        // If response has a recommendations property
        setRecommendations(responseData.recommendations);
      } else {
        // Fallback
        setChatHistory(prev => [
          ...prev,
          { type: "assistant", content: "I found some recommendations for you!" }
        ]);
        setRecommendations(responseData ? [responseData] : []);
      }
    } catch (error: any) {
      console.error("Error generating recommendations:", error);
      
      // Add error message to chat history
      setChatHistory(prev => [
        ...prev, 
        { 
          type: "assistant", 
          content: `Sorry, I couldn't generate recommendations at this time: ${error.response?.data?.detail || error.message}. Please try again later.` 
        }
      ]);
    } finally {
      setIsLoading(false);
    }
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
      {/* Header Section */}
      <div
        style={{
          flex: "0 0 auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "16px",
        }}
      >
        <div
          style={{
            textAlign: "center",
            maxWidth: "90%",
            width: "100%",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(40px, 5vw, 70px)",
              fontWeight: "bold",
              color: "#e041b1",
              marginBottom: "16px",
            }}
          >
            Prism
          </h1>
          <p
            style={{
              fontSize: "clamp(14px, 2vw, 18px)",
              color: "black",
            }}
          >
            Get personalized recommendations that match your vibe.
          </p>
        </div>
      </div>

      {/* Chat History Section */}
      <div
        style={{
          flex: "1 0 auto",
          overflow: "auto",
          padding: "0 16px",
          marginBottom: "20px",
        }}
      >
        {chatHistory.map((message, index) => (
          <div
            key={index}
            style={{
              textAlign: message.type === "assistant" ? "left" : "right",
              marginBottom: "16px",
              fontSize: "16px",
              color: "#606060",
              wordWrap: "break-word",
            }}
          >
            <p
              style={{
                backgroundColor: message.type === "assistant" ? "#F0F2F6" : "#E0E0E0",
                padding: "12px",
                borderRadius: "8px",
                display: "inline-block",
                maxWidth: "90%",
              }}
            >
              {message.content}
            </p>
          </div>
        ))}

        {/* Display recommendations if available */}
        {recommendations && recommendations.length > 0 && (
          <div
            style={{
              marginLeft: "16px",
              marginBottom: "24px",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "20px",
                marginTop: "16px",
              }}
            >
              {recommendations.map((item, index) => (
                <div
                  key={index}
                  style={{
                    borderRadius: "12px",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "#fff",
                  }}
                >
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.title || `Recommendation ${index + 1}`}
                      style={{
                        height: "200px",
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
                  )}
                  <div style={{ padding: "16px" }}>
                    <h3 style={{ margin: "0 0 8px 0", color: "#e041b1" }}>
                      {item.title || `Recommendation ${index + 1}`}
                    </h3>
                    {item.description && (
                      <p style={{ margin: "0", color: "#606060", fontSize: "14px" }}>
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Loading Indicator */}
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
          <p style={{ fontSize: "16px", color: "#606060" }}>Generating recommendations...</p>
        </div>
      )}

      {/* Input Section */}
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
            maxWidth: "90%",
            width: "100%",
            backgroundColor: "#F0F2F6",
            borderRadius: "24px",
            padding: "8px 16px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          <input
            type="text"
            placeholder="Ask for recommendations (e.g., 'Suggest me thriller movies')"
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
              transition: "transform 0.2s, background-color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#c03a99";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#e041b1";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <FaPaperPlane style={{ color: "#fff", fontSize: "16px" }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewChat;