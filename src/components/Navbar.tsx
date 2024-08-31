import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarWrapper = styled.div`
  padding: 20px;

  .links {
    margin-left: auto;
  }

  a {
    background-color: purple;
    margin-left: 16px;
    text-decoration: none;
    padding: 6px;
    font-size: 20px;
    border-radius: 10px;
    line-height: 28px;
    display: inline-block; /* Enables enlargement */
    transition: all 0.2s ease-in-out;
  }

  a:hover {
    background-color: #c12751;
    transform: scale(1.2);
  }
`;

const Navbar = () => {
  return (
    <NavbarWrapper>
      <Link to="/">Home</Link>
      <Link to="/about">About Me</Link>
      <Link to="/music">Music</Link>
      <Link to="/contact">Contact</Link>
    </NavbarWrapper>
  );
};

export default Navbar;
