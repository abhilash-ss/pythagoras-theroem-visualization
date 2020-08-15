import React from "react";
import styles from "./Square.module.scss";

function Square({ size, type, opacity = 1 }) {
  const row = Array.from(Array(size).keys());
  const cellColorClass =
    type === "base" ? "square__cell--base" : "square__cell--altitude";
  return (
    <div className={styles.square} style={{ opacity: opacity }}>
      {row.map((i, rowIndex) => {
        return (
          <div className={styles.square__row} key={rowIndex.toString()}>
            {row.map((i, colIndex) => (
              <div
                key={colIndex.toString()}
                className={styles.square__cell}
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
    </div>
  );
}

export default Square;
