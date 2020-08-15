import React from "react";
import { withRouter } from "next/router";
import Container from "../components/Container";
import Triangle from "../components/Triangle";
import Square from "../components/Square";

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

  const style = {
    transform: "rotate(53deg)",
    transformOrigin: "bottom right",
    // paddingRight: "62px"
    // left: "14px",
    // position: "absolute",
    // top: "581px"
    marginBottom: "27%"
  };
  const hyp = 5;
  const alt = 4;
  const bs = 3;
  const mLeft =
    bs > alt ? `-${(bs - alt) * 40 + 5}px` : `-${((alt - bs) * 40 + 5) * 2}px`;
  // const value = bs < alt ? bs / alt : alt / bs;
  const angle = Math.asin(alt / hyp) * (180 / Math.PI);
  const shadowSize = (40 * hyp) / 2;
  return (
    <Container>
      {/* <Triangle sides={[3, 5, 4]} /> */}
      {/* <div>
        <div
          style={{ display: "flex", paddingLeft: "100%", background: "yellow" }}
        >
          <Square size={3} type="altitude" />
        </div>
        <div style={style}>
          <Square size={5} type="base" />
        </div>
        <div style={{ display: "flex" }}>
          <Square size={4} type="base" />
        </div>
      </div> */}
      {/* <div style={style}>
        <Square size={5} type="base" />
      </div>
      <div>
        <div
          style={{ display: "flex", paddingLeft: "100%", background: "yellow" }}
        >
          <Square size={3} type="altitude" />
        </div>

        <div style={{ display: "flex" }}>
          <Square size={4} type="base" />
        </div>
      </div> */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", alignItems: "end" }}>
          <div
            style={{
              transformOrigin: "bottom left",
              transform: `rotate(-${angle}deg)`,
              boxShadow: `0px ${shadowSize}px yellow`
            }}
          >
            <Square size={hyp} type="base" />
          </div>
          {/* red */}
          <div style={{ marginLeft: mLeft, zIndex: 1000 }}>
            <Square size={alt} type="altitude" />
          </div>
        </div>
        {/* blue */}
        <div style={{ display: "flex", zIndex: 1000 }}>
          <Square size={bs} type="base" />
        </div>
      </div>
    </Container>
  );
}

export default withRouter(Home);
