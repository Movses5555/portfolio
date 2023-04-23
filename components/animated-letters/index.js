import React from "react";
function AnimatedLetters({ classNames, letters, idx }) {
  return (
    <span>
      {letters.map((letter, i) => {
        return (
          <span key={letter + i} className={`${classNames} _${i + idx}`}>
            {letter}
          </span>
        );
      })}
    </span>
  );
}

export default AnimatedLetters;
