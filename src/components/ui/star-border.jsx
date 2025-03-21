import React from "react";
import "../../styles/star-border.css"; // Ensure you import your CSS file

export function StarBorder({ as: Component = "button", className, color, speed = "6s", children, ...props }) {
  const defaultColor = color || "hsl(var(--foreground))";

  return (
    <Component className={`star-border ${className}`} {...props}>
      <div
        className="star-effect-bottom"
        style={{
          background: `radial-gradient(circle, ${defaultColor}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      <div
        className="star-effect-top"
        style={{
          background: `radial-gradient(circle, ${defaultColor}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      <div className="star-content">{children}</div>
    </Component>
  );
}
