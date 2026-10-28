import { useState } from "react";
import api from "../services/api";

function RegistrationPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleRegistration = async (e) => {
    e.preventDefault();
    console.log("1. Clicked");
    try {
      console.log("2. Under try");
      var response = await api.post(
        "/auth/register",
        {
          name,
          email,
          password,
        }
      );
      console.log("4. Response:", response.data);
    } catch (e) {
      console.error("Registration Error", e);
    }
  };

  return (
    <div>
      <form onSubmit={handleRegistration}>
        <input
          type="name"
          title="Name *"
          placeholder="your name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />
        <p />
        <input
          type="email"
          placeholder="email id"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />
        <p />
        <input
          type="password"
          placeholder="Create password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />
        <p />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationPage;
