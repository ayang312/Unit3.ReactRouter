import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="navbar">
      <Link to="/">Home</Link>
      <Link to="/blue">Blue</Link>
      <Link to="/red">Red</Link>
      <Link to="/yellow">Yellow</Link> {/* New Route */}
      <Link to="/green">Green</Link> {/* New Route */}
    </div>
  );
};

export default Navbar;
