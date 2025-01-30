import "./GradientText.css";

export default function GradientText({
  children,
  className = "",
  colors = [
    "#d3d3d3", // Light Gray
    "#a9a9a9", // Dark Gray
    "#808080", // Gray
    "#696969", // Dim Gray
    "#404040", // Charcoal Gray
    "#2c2c2c", // Almost Black
    "#1a1a1a", // Very Dark Gray
    "#000000", // Black
  ], // Default colors
  animationSpeed = 8, // Default animation speed in seconds
  showBorder = false, // Default overlay visibility
}) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    animationDuration: `${animationSpeed}s`,
  };

  return (
    <div className={`animated-gradient-text ${className}`}>
      {showBorder && (
        <div className="gradient-overlay" style={gradientStyle}></div>
      )}
      <div className="text-content" style={gradientStyle}>
        {children}
      </div>
    </div>
  );
}
