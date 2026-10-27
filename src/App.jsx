import { useState } from "react";
import AppTitle from "./components/AppTitle";
import "./App.css";
import LoginPage from "./pages/Login";
import RegistrationPage from "./pages/Registration";

function App() {
  var [isLogin, setIsLogin] = useState(true);

  return (
    <div>
      <AppTitle
        title={isLogin ? "Login" : "Registration"}
      />
      {isLogin ? (
        <LoginPage />
      ) : (
        <RegistrationPage />
      )}
      {/* <LoginPage /> */}
      <p />
      <button
        onClick={() => setIsLogin(!isLogin)}
      >
        {isLogin
          ? "Dont have account? Register"
          : "Already have an account? Login"}
      </button>
    </div>
  );
}

export default App;
