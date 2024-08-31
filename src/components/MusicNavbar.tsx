import { Link, Outlet } from "react-router-dom";

const MusicNavbar = () => {
  return (
    <div className="navbar music-navbar">
      <nav>
        <Link to="/music/everhood">Everhood</Link>
        <Link to="/music/cursed_carousel">Cursed Carousel</Link>
        <Link to="/music/puppet_story">Puppet Story</Link>
        <Link to="/music/newgrounds">Newgrounds</Link>
      </nav>
      <Outlet /> {/* This renders the nested routes */}
    </div>
  );
};

export default MusicNavbar;
