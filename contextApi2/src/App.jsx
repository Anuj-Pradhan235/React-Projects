import Card from "./components/Card";
import FullCard from "./components/FullCard";
import ThemeBtn from "./components/ThemeBtn";
import { ThemeProvider } from "./context/Theme";
import { useState, useEffect } from "react";
function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  // actual change in theme

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);
  return (
    <>
      <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <FullCard />
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
