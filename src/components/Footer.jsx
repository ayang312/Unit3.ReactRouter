import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer">
      <Link to="/">Home</Link>
      <Link to="/blue">Blue</Link>
      <Link to="/red">Red</Link>
      <Link to="/yellow">Yellow</Link>
      <Link to="/green">Green</Link>
    </footer>
  );
};

export default Footer;
