import { Link } from 'react-router-dom';

const Navbar = () => (
  <div>
    <Link to="/" exact>Home </Link>
    <Link to="/quate">Quate </Link>
    <Link to="/calculator">Calculator </Link>
  </div>
);

export default Navbar;
