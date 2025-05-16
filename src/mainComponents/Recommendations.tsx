import { useState } from "react";

const Recommendations = () => {
  const categories = [
    { name: "Food & Dining", icon: "🍽️" },
    { name: "Movies & TV", icon: "🎬", active: true },
    { name: "Travelling", icon: "✈️" },
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
      <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
        {/* Category Section */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            marginBottom: "30px",
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
              }}
            >
              <div style={{ fontSize: "30px" }}>{cat.icon}</div>
              <div style={{ marginTop: "8px", fontSize: "14px" }}>
                {cat.name}
              </div>
            </div>
          ))}
        </div>

        {/* Movie Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
            justifyContent: "center",
          }}
        >
          {movies.map((movie: any) => (
            <div
              key={movie.title}
              style={{
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
                style={{ height: "280px" }}
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
