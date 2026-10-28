import { useState } from "react";
import api from "../services/api";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    console.log("1. Login clicked");
    console.log("2. Email:", email);

    try {
      console.log("3. Sending request");

      const response = await api.post(
        "/auth/login",
        {
          email,
          password,
        }
      );

      console.log("4. Response:", response.data);
      localStorage.setItem(
        "token",
        response.data.token
      );
      console.log(
        "Saved token :",
        localStorage.getItem("token")
      );
    } catch (error) {
      console.error(
        "Login error:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Enter email ID"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />
        <p />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />
        <p />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
