import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
      }}
    >
      <h2>Arcane Harmonies</h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        <Link to="/">Home</Link>

        <Link to="/discover">Discover</Link>

        <Link to="/books">Books</Link>

        <Link to="/library">Library</Link>

        <Link to="/journal">Journal</Link>
      </div>
    </nav>
  );
}

export default Navbar;