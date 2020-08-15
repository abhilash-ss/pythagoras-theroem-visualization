import React from "react";

function Alert(props) {
  return (
    <div className="alert">
      <p>{props.message}</p>
      <style jsx>
        {`
          .alert {
            padding: 0px 50px;
            background: #edb2b2;
            color: red;
            margin: 10px;
            border: 1px solid red;
            border-radius: 14px;
          }
        `}
      </style>
    </div>
  );
}

export default Alert;
