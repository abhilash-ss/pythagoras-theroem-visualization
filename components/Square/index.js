import React from "react";
import styles from "./Square.module.scss";

function Square({ size, type, opacity = 1 }) {
  const row = Array.from(Array(size).keys());
  const cellColorClass =
    type === "base" ? "square__cell--base" : "square__cell--altitude";
  return (
    <div className={styles.square} style={{ opacity: opacity }}>
      {row.map((i) => {
        return (
          <div className={styles.square__row}>
            {row.map((i) => (
              <div
                className={styles.square__cell}
                style={{ background: type === "base" ? "blue" : "red" }}
              />
            ))}
          </div>
        );
      })}
      <style jsx>{`
        .container {
          margin: 50px;
        }
        p {
          color: blue;
        }
      `}</style>
    </div>
  );
}

export default Square;
