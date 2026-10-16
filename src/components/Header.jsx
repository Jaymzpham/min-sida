import "./Header.css";

function Header({ namn, }) {
  return (
    <header className="header">
      <h1>{namn}</h1>
      <h1>Välkommen till min sida!</h1>
    </header>
  );
}

export default Header;
