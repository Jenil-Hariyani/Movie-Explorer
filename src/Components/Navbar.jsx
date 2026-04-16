import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link className="logo" to="/">
        🎬 Movie Explorer
      </Link>
    </nav>
  );
}

export default Navbar;
