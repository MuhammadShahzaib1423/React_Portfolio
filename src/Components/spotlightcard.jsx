import { useRef, useState, useEffect } from "react";

const SpotlightCard = ({
  children,
  className = "",
  spotlightColor = "#F4F4F4",
}) => {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: "50%", y: "50%" }); // Default center
  const [opacity, setOpacity] = useState(0);
  const [borderAngle, setBorderAngle] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(0.6);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(0.6);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  // Update border angle every 50ms for smooth rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setBorderAngle((prevAngle) => (prevAngle + 3) % 360);
    }, 50); // 50ms = 20fps smooth animation

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-3xl border border-transparent bg-[#f4f4f4] p-8 overflow-hidden transition-all duration-500 group ${className}`}
      style={{
        background: `linear-gradient(45deg,rgb(240, 244, 250) 50%,rgb(255, 255, 255)) padding-box, 
                     conic-gradient(from ${borderAngle}deg, rgba(145, 183, 236, 0.48) 80%, #ff6d5a 86%, 
                     #ff8a75 90%, #ff6d5a 94%, rgba(221, 230, 243, 0.48)) border-box`,
        borderRadius: "16px",
        border: "2px solid transparent",
      }}
    >
      {/* Spotlight Effect */}
      <div
        className="pointer-events-none absolute w-full h-full top-0 left-0 transition-opacity duration-500 ease-in-out"
        style={{
          opacity,
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`,
        }}
      />
      {children}
    </div>
  );
};

export default SpotlightCard;
