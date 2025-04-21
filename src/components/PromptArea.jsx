import React from 'react';
import '../styles/PromptArea.css';

const PromptArea = () => {
  return (
    <div className="prompt-area d-flex align-items-center">
      <input
        type="text"
        className="form-control me-3"
        placeholder="Type your response here..."
      />
      <button className="btn btn-primary">Submit</button>
    </div>
  );
};

export default PromptArea;
