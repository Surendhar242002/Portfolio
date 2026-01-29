import React, { useEffect, useState } from "react";
import "./SkillBar.css";

export default function SkillBar({ label, value }) {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= value) {
          clearInterval(interval);
          return value;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [value]);

  return (
    <div className="skill-item">
      <div className="skill-title">
        <span>{label}</span>
        <span>{percent}%</span>
      </div>

      <div className="skill-bar-bg">
        <div
          className="skill-bar-fill"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
}
