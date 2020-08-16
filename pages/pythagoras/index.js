import React from "react";
import { withRouter } from "next/router";
import Container from "../../components/Container";
import Square from "../../components/Square";

function Pythagoras(props) {
  const {
    router: {
      query: { a, b, c }
    }
  } = props;

  const hyp = Number(c) || 5;
  const alt = Number(a) || 3;
  const bs = Number(b) || 4;

  const mLeft =
    bs > alt ? `-${(bs - alt) * 40 + 5}px` : `-${((alt - bs) * 40 + 5) * 2}px`;
  // const value = bs < alt ? bs / alt : alt / bs;
  const angle = Math.asin(alt / hyp) * (180 / Math.PI);
  const shadowSize = (40 * hyp) / 2;
  return (
    <Container>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", alignItems: "end" }}>
          <div
            style={{
              transformOrigin: "bottom left",
              transform: `rotate(-${angle}deg)`,
              boxShadow: `0px ${shadowSize}px yellow`
            }}
          >
            <Square size={hyp} type="hypotenuse" />
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

export default withRouter(Pythagoras);
