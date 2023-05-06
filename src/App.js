import "./App.css";

import { Route, Routes } from "react-router-dom";

import { useState, useContext } from "react";
import LoginUser from "./pages/Login/Login";
import { userContext } from "./components/context/userContext";
import BazaAdmin from "./pages/BAZA-ADMIN/BazaAdmin";
import OptionInput from "./pages/Option/OptionInput";
import { BosIndex } from "./pages/BosBaza/bosIndex";
function App() {
  const [states, useStates] = useState("");
  const [passwords, usePasswords] = useState("");
  const [PPxbaza, setPPXbaza] = useState(true);

  const [TokenPPS, setTokenPPS] = useState();

  if (states != false && passwords != false) {
    async function LogRend() {
      try {
        const res = await fetch("http://localhost:8081/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: states,
            password: passwords,
          }),
        });
        const data = await res.json();
        let accessToken = data.token;

        localStorage.setItem("tokenPPS", accessToken);
        const Local = localStorage.getItem("tokenPPS");
        setTokenPPS(Local);
      } catch (error) {
        console.log(error);
        alert("Login yoki parol hato");
      }
    }
    LogRend();
  }
  // TokenPPS   if ni shartiga qoyasan tokkenPPS kesa kiritadi.
  if (states == "admin" && passwords == "123456") {
    return <OptionInput setPPXbaza={setPPXbaza} PPxbaza={PPxbaza} />;
  }
  if (states == "admin" && passwords == "12345") {
    if (PPxbaza) {
      return <BazaAdmin setPPXbaza={setPPXbaza} PPxbaza={PPxbaza} />;
    } else
      return (
        <>
          <Routes>
            <Route path='BazaAdmin' element={<BosIndex />} />
          </Routes>
        </>
      );
  } else {
    console.log("bekor");
  }

  return (
    <>
      <userContext.Provider
        value={{ states, useStates, passwords, usePasswords }}
      >
        <LoginUser />
      </userContext.Provider>
    </>
  );
}

export default App;
