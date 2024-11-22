import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/styles.css";
import { Header } from "./Header";

export const Results = () => {
  const [locations, setLocations] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      const user = JSON.parse(localStorage.getItem("user")); // Obtener el usuario de la sesión

      try {
        const response = await axios.get(
          `https://673a385d339a4ce44517975b.mockapi.io/destinations?userId=${user.id}`
        );
        setLocations(response.data);
      } catch (error) {
        console.error("Error fetching destinations:", error);
      }
    };

    fetchBlogs();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://673a385d339a4ce44517975b.mockapi.io/destinations/${id}`
      );
      setLocations(locations.filter((location) => location.id !== id));
      alert("Destino eliminado exitosamente");
    } catch (error) {
      console.error("Error eliminando el destino:", error);
      alert("Error eliminando el destino");
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="results">
        <div className="button-container">
          <button onClick={() => navigate("/create-destination")}>
            Crear Destino
          </button>
          <button onClick={() => navigate("/other-destination")}>
            Ver Otros Destino
          </button>
          </div>
          <h1>Destinos Creados</h1>
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Ubicación</th>
                <th>Reseña</th>
                <th>Calificación</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {locations.length === 0
                ? Array.from({ length: 5 }).map((_, index) => (
                    <tr key={index}>
                      <td colSpan="6" className="empty-row"></td>
                    </tr>
                  ))
                : locations.map((location) => (
                    <tr key={location.id}>
                      <td>{location.name}</td>
                      <td>{location.location}</td>
                      <td>{location.review}</td>
                      <td>{location.rating}</td>
                      <td>
                        <button
                          onClick={() =>
                            navigate(`/edit-destination/${location.id}`)
                          }
                        >
                          Editar
                        </button>
                        <button className="button-red" onClick={() => handleDelete(location.id)}>
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
