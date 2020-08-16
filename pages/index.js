import React, { useState } from "react";
import { withRouter } from "next/router";
import Alert from "../components/Alert";

function Home(props) {
  const [side1, setSide1] = useState(0);
  const [side2, setSide2] = useState(0);
  const [side3, setSide3] = useState(0);
  const [isError, setErrorStatus] = useState(false);

  const isRightTriangle = (side1, side2, side3) => {
    if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
      return false;
    }
    if (side3 * side3 === side1 * side1 + side2 * side2) {
      return true;
    }
    return false;
  };

  const onClick = () => {
    if (isRightTriangle(side1, side2, side3)) {
      props.router.push(`/pythagoras?a=${side1}&&b=${side2}&&c=${side3}`);
    } else setErrorStatus(true);
  };

  return (
    <div className="container">
      <main>
        <h1 className="title">Pythagoras Therorem Visualisation</h1>
        <p className="descsription">
          Enter the sides of triangles ang click to see
        </p>
        <div className="form">
          <div>
            <input
              placeholder="base"
              onChange={(event) => setSide1(event.target.value)}
            />
            <input
              placeholder="altitude"
              onChange={(event) => setSide2(event.target.value)}
            />
            <input
              placeholder="hypotenuse"
              onChange={(event) => setSide3(event.target.value)}
            />
          </div>
          <div>
            <button onClick={onClick}>Click here to visualise</button>
          </div>
        </div>
        {isError && <Alert message="please enter valid values" />}
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .form {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        input {
          margin: 10px;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
      `}</style>
    </div>
  );
}

export default withRouter(Home);
