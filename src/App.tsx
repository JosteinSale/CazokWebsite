import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import BigImage from "./components/BigImage";
import AboutMe from "./components/AboutMe";
import MusicNavbar from "./components/MusicNavbar";
import AlbumLink from "./components/AlbumLink";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <BigImage fileName="cazok_title.png" style="regular" />
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/music" element={<MusicNavbar />}>
              <Route
                path="everhood"
                element={
                  <AlbumLink
                    title="Everhood"
                    imageSrc="everhood1_ost.png"
                    link="https://www.youtube.com/watch?v=h7pGABDCu2s"
                    linkLabel="Full OST on YouTube"
                    description="(See video description for the songs made by Cazok)"
                  />
                }
              />
              <Route
                path="cursed_carousel"
                element={
                  <AlbumLink
                    title="Cursed Carousel"
                    imageSrc="cursed_carousel.png"
                    link="https://www.youtube.com/watch?v=DI8ct0iMETI"
                    linkLabel="Full album on YouTube"
                  />
                }
              />
              <Route
                path="puppet_story"
                element={
                  <AlbumLink
                    title="Puppet Story"
                    imageSrc="puppet_story.png"
                    link="https://www.youtube.com/watch?v=uYQxgM5Ymns&list=PLPcFHzTSqpw9-FzUNdWjzbQwxImQTvK3P"
                    linkLabel="Full playlist on YouTube"
                  />
                }
              />
              <Route
                path="newgrounds"
                element={
                  <AlbumLink
                    title="Newgrounds"
                    imageSrc="cazok_origins.png"
                    link="https://cazok.newgrounds.com/audio"
                    linkLabel="Cazok's old Newgrounds page"
                  />
                }
              />
            </Route>
            <Route path="contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
