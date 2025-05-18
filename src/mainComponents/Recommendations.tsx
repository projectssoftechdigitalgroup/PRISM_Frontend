import { useState } from "react";
import food from "../assets/icons/food.png"
import movie from "../assets/icons/film-reel-2.png"
import travel from "../assets/icons/plane-1.png"
const Recommendations = () => {
  const categories = [
    { name: "Food & Dining", icon: food },
    { name: "Movies & TV", icon: movie, active: true },
    { name: "Travelling", icon: travel },
  ];

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
            <div
              key={cat.name}
              style={{
                textAlign: "center",
                color: cat.active ? "#A020F0" : "#333",
                fontWeight: cat.active ? "bold" : "normal",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  borderRadius: cat.name === "Movies & TV" ? "50%" : "0%", // Border radius only for "Movies & TV"
                  background: cat.name === "Movies & TV"
                    ? "linear-gradient(185deg, #FF6767, #6A5ACD)" // Gradient border for "Movies & TV"
                    : "none",
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
                    width: cat.name === "Movies & TV" ? "100%" : "70%",
                    height: cat.name === "Movies & TV" ? "100%" : "70%",
                    borderRadius: cat.name === "Movies & TV" ? "50%" : "0%",
                    objectFit: "cover",
                    backgroundColor: "#fff",
                  }}
                />
              </div>
              <div style={{ marginTop: "8px", fontSize: "14px" }}>{cat.name}</div>
            </div>
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
