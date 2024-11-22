import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/styles.css";
import { Header } from "./Header";

export const OtherDestinations = () => {
  const [locations, setLocations] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOtherDestinations = async () => {
      const user = JSON.parse(localStorage.getItem("user")); // Obtener el usuario de la sesión

      try {
        const response = await axios.get(
          `https://673a385d339a4ce44517975b.mockapi.io/destinations`
        );
        const otherLocations = response.data.filter(
          (location) => location.userId !== user.id
        );
        setLocations(otherLocations);
      } catch (error) {
        console.error("Error consultando otros destinos:", error);
      }
    };

    fetchOtherDestinations();
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <div className="results">
          <button
            className="create-blog-button"
            onClick={() => navigate("/results")}
          >
            Volver
          </button>
          <h1>Destinos de Otros Usuarios</h1>
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Ubicación</th>
                <th>Reseña</th>
                <th>Calificación</th>
              </tr>
            </thead>
            <tbody>
              {locations.length === 0
                ? Array.from({ length: 5 }).map((_, index) => (
                    <tr key={index}>
                      <td colSpan="5" className="empty-row"></td>
                    </tr>
                  ))
                : locations.map((location) => (
                    <tr key={location.id}>
                      <td>{location.name}</td>
                      <td>{location.location}</td>
                      <td>{location.review}</td>
                      <td>{location.rating}</td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
