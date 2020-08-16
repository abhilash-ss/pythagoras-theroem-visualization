import React from "react";

function Square({ size, type, opacity = 1 }) {
  const row = Array.from(Array(size).keys());
  const cellColorClass =
    type === "base" ? "square__cell--base" : "square__cell--altitude";
  return (
    <div className="square" style={{ opacity: opacity }}>
      {row.map((i, rowIndex) => {
        return (
          <div className="square__row" key={rowIndex.toString()}>
            {row.map((i, colIndex) => (
              <div
                key={colIndex.toString()}
                className="square__cell"
                style={{
                  background:
                    type === "altitude" ||
                    (type === "hypotenuse" &&
                      (!rowIndex || colIndex === size - 1))
                      ? "red"
                      : "blue"
                }}
              />
            ))}
          </div>
        );
      })}

      <style jsx>{`
        .square {
          border: 4px solid black;
        }

        .square__row {
          display: flex;
          background: black;
        }

        .square__cell {
          height: 40px;
          width: 40px;
          background: lightgrey;
          margin: 1px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 45px;
          font-weight: 800px;
          color: white;
        }

        .square__cell--base {
          color: red;
        }

        .square__cell--altitude {
          color: blue;
        }
      `}</style>
    </div>
  );
}

export default Square;
