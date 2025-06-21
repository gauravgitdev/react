import { useState, useMemo } from "react";
import { nthPrime } from "../utils/constant";

const Memo = () => {
  const [num, setNum] = useState(0);
  const [isDark, setIsDark] = useState(false);

  const cachedValue = useMemo(() => nthPrime(Number(num)), [num]);

  const themeStyles = {
    container: {
      textAlign: "center",
      padding: "30px",
      minHeight: "100vh",
      backgroundColor: isDark ? "#222" : "#f9f9f9",
      color: isDark ? "#f9f9f9" : "#222",
      fontFamily: "Segoe UI, sans-serif",
      transition: "all 0.3s ease"
    },
    button: {
      padding: "10px 20px",
      fontSize: "15px",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      backgroundColor: "#4caf50",
      color: "white",
      marginBottom: "20px"
    },
    input: {
      padding: "10px",
      fontSize: "16px",
      borderRadius: "8px",
      border: "1px solid #ccc",
      margin: "15px"
    },
    result: {
      fontSize: "24px",
      marginTop: "20px"
    }
  };

  return (
    <div style={themeStyles.container}>
      <button style={themeStyles.button} onClick={() => setIsDark(!isDark)}>
        Toggle {isDark ? "Light" : "Dark"} Mode
      </button>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
        style={themeStyles.input}
        placeholder="Enter n"
      />
      <h1 style={themeStyles.result}>Prime Number is - {cachedValue}</h1>
    </div>
  );
};

export default Memo;
