import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

const MusicNavbarWrapper = styled.div`
  .links {
    margin-left: auto;
  }

  a {
    background-color: #1d187a;
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
    background-color: #4f48d9;
    transform: scale(1.2);
  }
`;

const MusicNavbar = () => {
  return (
    <div className="navbar music-navbar">
      <MusicNavbarWrapper>
        <Link to="/music/everhood">Everhood</Link>
        <Link to="/music/cursed_carousel">Cursed Carousel</Link>
        <Link to="/music/puppet_story">Puppet Story</Link>
        <Link to="/music/newgrounds">Newgrounds</Link>
      </MusicNavbarWrapper>
      <Outlet /> {/* This renders the nested routes */}
    </div>
  );
};

export default MusicNavbar;
