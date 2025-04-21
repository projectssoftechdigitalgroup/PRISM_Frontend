import React from "react";
import "../styles/ContentArea.css";

const ContentArea = () => {
  return (
    <>
    <div className="content-area container d-flex flex-column justify-content-center align-items-center">
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
    </div>
    </>
  );
};

export default ContentArea;
