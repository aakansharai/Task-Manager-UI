import { useState } from "react";

function RegistrationPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    console.log("Login:", {
      email,
      password,
    });
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

export default RegistrationPage;
