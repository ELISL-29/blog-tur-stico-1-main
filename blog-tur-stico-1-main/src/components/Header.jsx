import { useNavigate, Link } from 'react-router-dom';
import '../styles/styles.css';

export const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user'); // Eliminar la sesión del usuario
    navigate('/'); // Redireccionar a la página de inicio de sesión
  };

  return (
    <header className="header">
      <h1>Journeys That Leave Footprints</h1>
      <Link to="/" className="logout-link" onClick={handleLogout}>Cerrar Sesión</Link>
    </header>
  );
}