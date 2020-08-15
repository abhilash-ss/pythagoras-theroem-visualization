import React from "react";

function Container({ children }) {
  return (
    <div className="container">
      {children}
      <style jsx>{`
        .container {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  );
}

export default Container;
