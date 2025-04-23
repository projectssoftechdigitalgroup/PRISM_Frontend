import React from "react";
// import "../styles/ContentArea.css";

const ContentArea = () => {
  return (
    <>
      {/* <div className="content-area container d-flex flex-column justify-content-center align-items-center">
      <h1 className="text-center prism-title"><b>Prism</b></h1>
      <p className="text-center lead">
        Create your digital twin and get personalized recommendations
      </p>

      <p className="mt-3 text-center">
         <span> </span>
        <p >
        <span className="icon bg-warning text-white p-2 rounded me-2">
          <i className="fa-solid fa-robot text-dark"></i>
        </span> Life Narrative: Tell me the story of your life, starting from where
          you feel is important. Touch upon key phases like your childhood,
          education, significant relationships (family, friends, partners),
          major life events, and career path. What moments stand out as
          particularly formative or defining?
        </p>
      </p>
    </div> */}

      <div
        style={{
          textAlign: "center",
          maxWidth: "800px",
          margin: "0 auto",
          padding: "20px",
        }}
      >
        <h1 style={{ color: "#E041B1", fontSize: "4rem" }}>Prism</h1>
        <p style={{ fontSize: "1.2rem", marginTop: "-30px" }}>
          Create your digital twin and get personalized recommendations
        </p>
        <p style={{ fontSize: "1rem", marginTop: "-30px" }}>
          <br />
          <span style={{ marginTop: "-10px" }}>
            <i
              style={{
                backgroundColor: "#FFBD45",
                padding: "10px",
                borderRadius: "10px",
              }}
              className="fa-solid fa-robot"
            ></i>
          </span>{" "}
          Life Narrative: Tell me the story of your life, starting from where
          you feel is important. Touch upon key phases like your childhood,
          education, significant relationships (family, friends, partners),
          major life events, and career path. What moments stand out as
          particularly formative or defining?
        </p>
      </div>
      
    </>
  );
};

export default ContentArea;
