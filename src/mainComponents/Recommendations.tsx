import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
import food from "../assets/icons/dinner 1.png";
import movie from "../assets/icons/movie 1.png";
import travel from "../assets/icons/flight 1.png";
// @ts-ignore: Importing from a JavaScript file
import { BASE_URL } from "../BASE_URL/BASE_URL";

const Recommendations = () => {
  // const navigate = useNavigate();
  // const [isVerifying, setIsVerifying] = useState<boolean>(true);

  // Verify that user has completed the interview
  // useEffect(() => {
  //   const verifyInterviewCompletion = async () => {
  //     try {
  //       // Get token
  //       const token =
  //         localStorage.getItem("token") ||
  //         localStorage.getItem("access_token") ||
  //         localStorage.getItem("authToken");

  //       // Get session ID from localStorage
  //       const sessionId = localStorage.getItem("interview_session_id");

  //       if (!sessionId) {
  //         // No session ID found, redirect to homepage
  //         alert("Please complete the foundation interview first!");
  //         navigate("/homepage");
  //         return;
  //       }

  //       // Verify status from API
  //       const response = await axios.get(
  //         `${BASE_URL}/interview/foundation/${sessionId}/status`,
  //         {
  //           headers: {
  //             accept: "application/json",
  //             Authorization: `Bearer ${token}`,
  //           },
  //         }
  //       );

  //       const { is_complete } = response.data;

  //       if (!is_complete) {
  //         // Interview not complete, redirect to homepage
  //         alert(
  //           "Please complete all interview questions before accessing recommendations!"
  //         );
  //         navigate("/homepage");
  //       } else {
  //         // All good, allow access
  //         setIsVerifying(false);
  //       }
  //     } catch (error) {
  //       console.error("Error verifying interview completion:", error);
  //       // In case of error, redirect to homepage
  //       alert("Could not verify interview status. Please try again.");
  //       navigate("/homepage");
  //     }
  //   };

  //   verifyInterviewCompletion();
  // }, [navigate]);

  // If still verifying, show loading
  // if (isVerifying) {
  //   return (
  //     <div
  //       style={{
  //         display: "flex",
  //         justifyContent: "center",
  //         alignItems: "center",
  //         height: "100vh",
  //         flexDirection: "column",
  //       }}
  //     >
  //       <h2 style={{ color: "#A020F0" }}>Loading your recommendations...</h2>
  //       <p>Please wait while we verify your profile</p>
  //     </div>
  //   );
  // }
  const categories = [
    { name: "Food & Dining", icon: food },
    { name: "Movies & TV", icon: movie, active: true },
    { name: "Travelling", icon: travel },
  ];

  const [activeCategory, setActiveCategory] = useState("Movies & TV"); // Default active category

  const handleCategoryClick = (categoryName: string) => {
    setActiveCategory(categoryName);
  };

  const [movies, setMovies] = useState(() => {
    const getRandomColor = (index: number) => {
      const colors = ["#FF6767", "#337799", "#1A6565", "#FFB347", "#6A5ACD"];
      return colors[index % colors.length];
    };
    const storedMovies = JSON.parse(
      localStorage.getItem("bookmarkedMovies") || "[]"
    );
    return storedMovies.map((movie: any, index: number) => ({
      ...movie,
      bgColor: movie.bgColor || getRandomColor(index),
    }));
  });

  const handleDelete = (title: string) => {
    const updatedMovies = movies.filter((movie: any) => movie.title !== title);
    setMovies(updatedMovies);
    localStorage.setItem("bookmarkedMovies", JSON.stringify(updatedMovies));
  };

  return (
    <>
      <div
        style={{
          fontFamily: "Arial, sans-serif",
          padding: "20px",
          backgroundColor: "#FFFFFF", // Set background color to white
        }}
      >
        {/* Category Section */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            gap: "40px",
            marginBottom: "30px",
            flexWrap: "wrap", // Allow wrapping for smaller screens
          }}
        >
          {categories.map((cat) => (
            <>
              <div
                key={cat.name}
                onClick={() => handleCategoryClick(cat.name)} // Handle category click
                style={{
                  textAlign: "center",
                  color: activeCategory === cat.name ? "#A020F0" : "#333", // Highlight active category
                  fontWeight: activeCategory === cat.name ? "bold" : "normal", // Bold active category
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",

                  padding: "20px", // Adjust padding to prevent overlap with text
                }}
              >
                <div
                  style={{
                    width: "70px",
                    height: "70px",
                    borderRadius: cat.name === "Movies & TV" ? "50%" : "0%", // Border radius only for "Movies & TV"
                    padding: cat.name === "Movies & TV" ? "2px" : "0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={cat.icon}
                    alt={`${cat.name} Icon`}
                    style={{
                      border:
                        activeCategory === cat.name
                          ? "2px solid #A020F0"
                          : "none", // Add border for active category
                      borderRadius: activeCategory === cat.name ? "50%" : "8px", // Make the border rounded like a circle
                      width: cat.name === "Movies & TV" ? "100%" : "80%",
                      height: cat.name === "Movies & TV" ? "100%" : "80%",
                      // borderRadius: cat.name === "Movies & TV" ? "50%" : "0%",
                      objectFit: "cover",
                      backgroundColor: "#fff",
                    }}
                  />
                </div>
                <span
                  style={{
                    fontSize: "14px",
                    marginTop: "8px",
                    color: activeCategory === cat.name ? "#A020F0" : "#333", // Match text color with category
                  }}
                >
                  {cat.name}
                </span>
              </div>
            </>
          ))}
        </div>

        {/* Movie Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, max-content))", // Prevent stretching for single card
            gap: "20px", // Add space between cards
            justifyContent: "start", // Align cards to the start
          }}
        >
          {movies.map((movie: any) => (
            <div
              key={movie.title}
              style={{
                width: "300px",
                marginTop: "30px",
                borderRadius: "12px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#fff",
                position: "relative",
              }}
            >
              <img
                src={movie.image}
                alt={movie.title}
                style={{
                  height: "300px",
                  width: "100%",
                  // objectFit: "cover", // Ensure image fits within the card
                }}
              />
              <div
                style={{
                  height: "120px",
                  backgroundColor: movie.bgColor,
                  color: "#fff",
                  padding: "10px",
                }}
              >
                <strong>
                  {movie.title} ({movie.year})
                </strong>
                <p style={{ fontSize: "13px", marginTop: "8px" }}>
                  {movie.description}
                </p>
              </div>
              {/* Bookmarked Label */}
              <div
                style={{
                  position: "absolute",
                  top: "10px",
                  left: "10px",
                  backgroundColor: "#e041b1",
                  color: "#fff",
                  borderRadius: "8px",
                  padding: "4px 8px",
                  fontSize: "12px",
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Bookmarked
              </div>
              {/* Bookmark Icon */}
              <div
                onClick={() => handleDelete(movie.title)}
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  backgroundColor: "white",
                  borderRadius: "50%",
                  padding: "5px",
                  cursor: "pointer",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
                  transition: "transform 0.2s, background-color 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#e041b1";
                  e.currentTarget.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "white";
                  e.currentTarget.style.transform = "scale(1)";
                }}
                title="Delete"
              >
                🗑️
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Recommendations;
