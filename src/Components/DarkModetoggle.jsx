import { useEffect, useState } from "react";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }

    // Trigger storage event for Navbar update
    window.dispatchEvent(new Event("storage"));
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2   text-black dark:text-white border border-white rounded-full bg-white cursor-pointer text-xl" id="three"
    >
      {darkMode ? "🌙 " : "☀️ "}
    </button>
  );
};

export default DarkModeToggle;
