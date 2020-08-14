import React from "react";
import { withRouter } from "next/router";

function Home(props) {
  const {
    router: {
      query: { a, b, c }
    }
  } = props;

  const isRightTriangle = (side1, side2, side3) => {
    if (a <= 0 || b <= 0 || c <= 0) {
      return false;
    }
    const vector = [side1, side2, side3].sort();
    if (
      vector[2] * vector[2] ===
      vector[0] * vector[0] + vector[1] * vector[1]
    ) {
      return true;
    }
    return false;
  };

  const t = isRightTriangle(3, 5, 4);
  console.log(t);
  return (
    <div>
      <h1> Hello World! </h1>
    </div>
  );
}

export default withRouter(Home);
