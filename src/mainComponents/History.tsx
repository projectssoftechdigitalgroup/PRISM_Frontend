import React, { useState, useEffect } from "react";

export function History() {
  const [inputValue, setInputValue] = useState("");
  const [bookmarkedMovies, setBookmarkedMovies] = useState<string[]>([]);

  useEffect(() => {
    const storedBookmarks = JSON.parse(
      localStorage.getItem("bookmarkedMovies") || "[]"
    );
    setBookmarkedMovies(storedBookmarks);
  }, []);

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    console.log("Submitted:", inputValue);
    setInputValue(""); // Clear input after submission
  };
  const toggleBookmark = (movie: any) => {
    const isBookmarked = bookmarkedMovies.some(
      (m: any) => m.title === movie.title
    );
    
    let updatedBookmarks;
    if (isBookmarked) {
      // Remove movie from bookmarks if it's already bookmarked
      updatedBookmarks = bookmarkedMovies.filter((m: any) => m.title !== movie.title);
    } else {
      // Add movie to bookmarks if it's not bookmarked
      updatedBookmarks = [
        ...bookmarkedMovies,
        { ...movie, bgColor: getRandomColor(bookmarkedMovies.length) },
      ];
    }
    
    // Update state and localStorage
    setBookmarkedMovies(updatedBookmarks);
    localStorage.setItem(
      "bookmarkedMovies",
      JSON.stringify(updatedBookmarks)
    );
  };

  const getRandomColor = (index: number) => {
    const colors = ["#FF6767", "#337799", "#1A6565", "#FFB347", "#6A5ACD"];
    return colors[index % colors.length];
  };

  const movies = [
    {
      title: "Pursuit of Happyness",
      year: "2006",
      description:
        "A powerful story of a man's struggle to provide a better life for his son despite overwhelming odds. It's deeply emotional and inspiring.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW5mDPXOgS6E_2LJECbHxPT1x6s9Dv__YWcdkPw4Qr7lJ3QK3D7TXko5fj_D9ng1ka1prv",
    },
    {
      title: "Boyhood",
      year: "2014",
      description:
        "Shot over 12 years, this film follows a boy's journey from childhood to adulthood. It captures everyday moments that shape a person's life.",
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTDjRpdkKLG0XM15fqyiNrdtkzzZ0IgrM3m6hlBYW3JzdDFXiyGOkPx6vqq_5oSIkwJA2q1lg",
    },
    {
      title: "Into the Wild",
      year: "2007",
      description:
        "Based on a true story, it explores a young man's decision to leave everything behind and venture into the wilderness, chasing freedom and meaning.",
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTyYm5CLW2exXTzFwdH9-hPKvtejdCplYPWlcdnzw4qoXiwK8oDeK3_iquJwHjjOP9Rfl35Uw",
    },
    {
      title: "Interstellar",
      year: "2013",
      description:
        "A daydreamer escapes his mundane life by embarking on a global journey that turns into an extraordinary adventure.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSngBJ0B7UDrLUkDlp6DCQLsEYuWR-DiHwbnxFFCniB3HiP3f3NZmR1-lKSC34ge6YXu4LX",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#FFFFFF",
        padding: "24px",
        fontFamily: "Arial, sans-serif",
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

      {/* Prompt Section */}
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
            // backgroundColor: "#F0F2F6",
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
      </div>
      {/* Prompt Section */}
      <div
        style={{
          textAlign: "right",
          marginRight: "5%",
          marginBottom: "24px",
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
      {/* Generated Answer Section */}
      <div
        style={{
          flex: 1,
          maxWidth: "90%", // Adjust width for responsiveness
          margin: "0 auto", // Center content
          textAlign: "left",
        }}
      >
        <div style={{ marginBottom: "16px" }}>
          <p style={{ fontSize: "16px", color: "black" }}>
            Here are 4 thoughtful, emotionally resonant movies that reflect
            themes of personal growth, relationships, and life turning
            points—great for someone reflecting on their own journey:
            Boyhood(2014) Little Miss Sunshine (2006) The Pursuit of Happyness
            (2006) Into the Wild (2007)
          </p>
        </div>
      </div>      {/* Movie Cards Section */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", // Responsive grid layout
          gap: "30px",
          justifyContent: "center",
          padding: "0 5%", // Add space from left and right
          marginBottom: "30px",
        }}
      >
        {movies.map((movie) => (
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
              maxWidth: "350px",
              margin: "0 auto",
            }}
          ><img
              src={movie.image}
              alt={movie.title}
              style={{
                height: "300px",
                width: "100%",
                objectFit: "cover",
              }}
            />
            {/* Movie details section */}            <div
              style={{
                height: "auto",
                minHeight: "120px",
                maxHeight: "150px",
                backgroundColor: getRandomColor(movies.indexOf(movie)),
                color: "#fff",
                padding: "15px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <strong style={{ 
                fontSize: "16px", 
                marginBottom: "6px",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis"
              }}>
                {movie.title} ({movie.year})
              </strong>
              <p style={{ 
                fontSize: "13px", 
                margin: "0",
                lineHeight: "1.4",
                display: "-webkit-box",
                WebkitLineClamp: 4,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis"
              }}>
                {movie.description}
              </p>
            </div>
            {/* Bookmark Icon */}            {/* Show bookmarked label if this movie is in bookmarks */}
            {bookmarkedMovies.some((m: any) => m.title === movie.title) && (
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
                  boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                }}
              >
                Bookmarked
              </div>
            )}
            
            <div onClick={() => toggleBookmark(movie)}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                backgroundColor: bookmarkedMovies.some((m: any) => m.title === movie.title) 
                  ? "#fff0f9"  // Lighter background when bookmarked
                  : "white",
                borderRadius: "50%",
                padding: "8px",
                cursor: "pointer",
                boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
                transition: "transform 0.3s, background-color 0.3s, box-shadow 0.3s",
                zIndex: 2,
              }}
              title={
                bookmarkedMovies.some((m: any) => m.title === movie.title)
                  ? "Bookmarked"
                  : "Bookmark"
              }              onMouseEnter={(e) => {
                const isBookmarked = bookmarkedMovies.some((m: any) => m.title === movie.title);
                e.currentTarget.style.backgroundColor = isBookmarked ? "#ffcce6" : "#f0f0f0";
                e.currentTarget.style.transform = "scale(1.1)";
                e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.25)";
              }}
              onMouseLeave={(e) => {
                const isBookmarked = bookmarkedMovies.some((m: any) => m.title === movie.title);
                e.currentTarget.style.backgroundColor = isBookmarked ? "#fff0f9" : "white";
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 2px 6px rgba(0,0,0,0.2)";
              }}
            >              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill={
                  bookmarkedMovies.some((m: any) => m.title === movie.title)
                    ? "#e041b1"
                    : "none"
                }
                stroke={
                  bookmarkedMovies.some((m: any) => m.title === movie.title)
                    ? "#e041b1"
                    : "#e041b1"
                }
                strokeWidth="2"
                width="20"
                height="20"
              >
                {bookmarkedMovies.some((m: any) => m.title === movie.title) ? (
                  // Filled bookmark icon when bookmarked
                  <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z" />
                ) : (
                  // Outline bookmark icon when not bookmarked
                  <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z" />
                )}
              </svg>
            </div>
          </div>
        ))}
      </div>
      {/* Input Field Section */}
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
            <span style={{ color: "#fff", fontSize: "16px" }}>➤</span>
          </button>
        </div>
      </div>
    </div>
  );
}
