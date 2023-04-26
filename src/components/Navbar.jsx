import icon from "../assets/iconPage.svg";
import "../styles/navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="icon_container">
        <li className="icon_navbar">
          <img className="icon" src={icon} alt="Icono de la pagina" />
        </li>
      </ul>

      <ul className="items_container">
        <li className="item"></li>

        <li className="item"></li>
      </ul>
    </nav>
  );
};
