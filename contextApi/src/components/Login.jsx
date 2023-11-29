import React from "react";
import UserContext from "../context/UserContext";
import { useState, useContext } from "react";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);
  const handleSubmit = () => {
    setUser({ username, password });
  };
  return (
    <>
      <input
        type="text"
        value={username}
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        value={password}
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <botton onClick={handleSubmit}>Click</botton>
    </>
  );
}

export default Login;
