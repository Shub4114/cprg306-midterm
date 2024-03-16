import React, { useState } from "react";

const APICallExam = () => {
  const [secretCode, setSecretCode] = useState(null);

  const handleAPICall = () => {
    const passcode = "ehen2rfow";
    const apiUrl = `https://webdev2-class-demo.vercel.app/api/sampleReqs/${passcode}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setSecretCode(data.secretCode);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div>
      <div className="flex items-center justify-center">
        <button
          className="bg-red-100 p-2 rounded-md border border-red-500"
          onClick={handleAPICall}
        >
          Submit
        </button>
      </div>
      {secretCode && (
        <div className="flex items-center justify-center mt-4">
          Secret Code: {secretCode}
        </div>
      )}
    </div>
  );
};

export default APICallExam;
