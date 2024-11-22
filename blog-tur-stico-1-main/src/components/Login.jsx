import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/styles.css";
import { Header } from "./Header";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("https://673a385d339a4ce44517975b.mockapi.io/users");
      const users = response.data;
      const user = users.find(user => user.email === email && user.password === password);

      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/results"); // Redireccionar a la página de resultados
      } else {
        alert("Credenciales inválidas");
      }
    } catch (error) {
      console.error("Error iniciando sesión:", error);
      alert("Error iniciando sesión");
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="login">
          <form onSubmit={handleLogin}>
            <h1>Iniciar Sesión</h1>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Iniciar Sesión</button>
            <button type="button" onClick={() => navigate("/register")}>
              Registrarse
            </button>
          </form>
        </div>
      </div>
    </>
  );
}